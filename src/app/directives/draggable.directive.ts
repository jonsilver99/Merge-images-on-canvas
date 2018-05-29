import { Directive, ElementRef, OnInit, Renderer2, Input, HostListener } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { operators } from 'rxjs';
import 'rxjs/Rx';
import { CursorPosition, DropResponse, DropEvent } from '../types/types';
import { DropActionService } from '../services/drop-action.service';

@Directive({
    selector: '[appDraggable]'
})
export class DraggableDirective implements OnInit {

    // config
    @Input() public ResetPositionOnDrop: boolean = false

    // mouse click state
    private MouseButtonPressed: boolean = false;

    // positioning
    private StartPosition: CursorPosition;

    // drag action observables
    private MouseDownEvent$: Observable<any> = Observable.fromEvent(this.ElRef.nativeElement, 'mousedown')
    private MouseMoveEvent$: Observable<any> = Observable.fromEvent(document, 'mousemove')
    private MouseUpEvent$: Observable<any> = Observable.fromEvent(document, 'mouseup')

    constructor(
        private ElRef: ElementRef,
        private Renderer: Renderer2,
        private DropActionService: DropActionService
    ) { }

    @HostListener('window:resize', ['$event'])
    onResize(event) {
        this.resetPosition()
    }

    ngOnInit() {
        this.initObservables()
        this.listenToDropResponse()
    }

    initObservables() {
        // Mouse down
        this.MouseDownEvent$
            .do((event: MouseEvent) => {
                this.MouseButtonPressed = true
                event.preventDefault()
            })
            .map((event: MouseEvent) => {
                return { x: event.clientX, y: event.clientY }
            })
            .subscribe(
            (data: CursorPosition) => {
                this.applyStyle('dragging')
                this.startPosition = data
            },
            err => console.log(err)
            )

        // In transit
        this.MouseMoveEvent$
            .takeWhile(() => this.MouseButtonPressed)
            .repeat()
            .map((event: MouseEvent) => {
                return { x: event.clientX, y: event.clientY }
            })
            .subscribe(
            (data: CursorPosition) => {
                this.dragElement(data)
            },
            err => console.log(err)
            )

        // Mouse up - stop dragging
        this.MouseUpEvent$
            .do(() => this.MouseButtonPressed = false)
            .map((event: MouseEvent) => {
                return { x: event.clientX, y: event.clientY }
            })
            .subscribe(
            (data: CursorPosition) => {
                this.dropElementInPosition()
                if (this.ResetPositionOnDrop) this.resetPosition()
                this.removeStyle('dragging')
            },
            err => console.log(err)
            )
    }

    listenToDropResponse() {
        this.DropActionService.DropResponse
            .subscribe((response: DropResponse) => {
                if (response.Status == 'rejected') {
                    this.Renderer.setStyle(response.Element, 'width', '75px')
                    this.Renderer.setStyle(response.Element, 'height', '75px')
                    this.resetPosition(response.Element)
                }
            })
    }

    set startPosition(startPos: CursorPosition) {
        if (this.StartPosition) return
        else this.StartPosition = startPos
    }

    dragElement(pos: CursorPosition) {
        let currentPositionX = pos.x - this.StartPosition.x
        let currentPositiony = pos.y - this.StartPosition.y
        this.Renderer.setStyle(this.ElRef.nativeElement, 'transform', `translateX(${currentPositionX}px) translateY(${currentPositiony}px)`)
    }

    dropElementInPosition() {
        const dropEvent: DropEvent = {
            Element: this.ElRef.nativeElement,
            Image: this.ElRef.nativeElement.querySelector('.draggable-img'),
            Rect: this.ElRef.nativeElement.getBoundingClientRect()
        }
        this.DropActionService.requestDrop(dropEvent)
    }

    resetPosition(element?: HTMLElement) {
        const elemToReset = element || this.ElRef.nativeElement
        this.Renderer.setStyle(elemToReset, 'transform', `translateX(${0}px) translateY(${0}px)`)
    }

    applyStyle(style: string) {
        this.Renderer.addClass(this.ElRef.nativeElement, style)
    }

    removeStyle(style: string) {
        this.Renderer.removeClass(this.ElRef.nativeElement, style)
    }

}