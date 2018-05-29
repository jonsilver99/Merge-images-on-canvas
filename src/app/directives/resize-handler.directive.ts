import { Directive, ElementRef, Renderer2, AfterContentInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { CursorPosition } from '../types/types';

@Directive({
    selector: '[appResizeHandler]'
})
export class ResizeHandlerDirective implements AfterContentInit {

    // handler click state
    private HandlerPressed: boolean = false;

    // resize elements
    private ResizeableElement: HTMLElement;
    private ResizeHandler: HTMLElement;

    // resize action observables
    private MouseDownEvent$: Observable<any>;
    private MouseMoveEvent$: Observable<any>;
    private MouseUpEvent$: Observable<any>;

    constructor(
        private ElRef: ElementRef,
        private Renderer: Renderer2,
    ) { }

    ngAfterContentInit() {
        this.initResizeElements()
        this.initResizeEvents()
    }

    initResizeElements() {
        // this.ResizeableElement = this.ElRef.nativeElement.querySelector('.resizeable-element')
        this.ResizeableElement = this.ElRef.nativeElement
        this.ResizeHandler = this.ElRef.nativeElement.querySelector('.resize-handler')
    }

    initResizeEvents() {
        this.MouseDownEvent$ = Observable.fromEvent(this.ResizeHandler, 'mousedown')
        this.MouseMoveEvent$ = Observable.fromEvent(document, 'mousemove')
        this.MouseUpEvent$ = Observable.fromEvent(document, 'mouseup')

        // resize handle clicked
        this.MouseDownEvent$
            .do((event: MouseEvent) => {
                this.HandlerPressed = true
                event.preventDefault()
                event.stopPropagation()
            })
            .subscribe()

        // resizeing mouse movement
        this.MouseMoveEvent$
            .takeWhile(() => this.HandlerPressed)
            .repeat()
            .map((event: MouseEvent) => {
                return { x: event.clientX, y: event.clientY }
            })
            .subscribe(
            (data: CursorPosition) => this.resizeElement(data),
            err => console.log(err)
            )

        // Mouse up - stop resizing
        this.MouseUpEvent$
            .do(() => this.HandlerPressed = false).subscribe()
    }

    resizeElement(data: CursorPosition) {
        const rect = this.ResizeableElement.getBoundingClientRect()
        let newWidth = data.x - rect.left;
        let newHeight = data.y - rect.bottom;
        this.Renderer.setStyle(this.ResizeableElement, 'position', `absolute`)
        this.Renderer.setStyle(this.ResizeableElement, 'width', `${newWidth}px`)
        this.Renderer.setStyle(this.ResizeableElement, 'height', `${newHeight}px`)
    }
}