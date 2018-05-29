import { Directive, Renderer2, ElementRef, OnInit, HostListener } from '@angular/core';
import { Subscription } from 'rxjs';
import { DropActionService } from '../services/drop-action.service';
import { DropEvent, DropResponse } from '../types/types';

@Directive({
    selector: '[appDropable]'
})
export class DropableDirective implements OnInit {

    private DropZoneBoundries: ClientRect;
    private DropEventsListener: Subscription;
    private ApprovedDrops: DropEvent[] = []

    constructor(
        private ElRef: ElementRef,
        private Renderer: Renderer2,
        private DropActionService: DropActionService
    ) { }

    @HostListener('window:resize', ['$event'])
    onResize(event) {
        this.defineDropZoneBoundries()
        this.resetApprovedDrops()
    }

    ngOnInit() {
        this.defineDropZoneBoundries()
        this.listenToDropEvents()
    }

    defineDropZoneBoundries() {
        const element: HTMLElement = this.ElRef.nativeElement
        this.DropZoneBoundries = element.getBoundingClientRect()
        this.DropActionService.updateDropZoneBoundries(this.DropZoneBoundries)
        // console.log('new dropzone boundries')
        // console.log(this.DropZoneBoundries.top, this.DropZoneBoundries.right, this.DropZoneBoundries.bottom, this.DropZoneBoundries.left)
    }

    listenToDropEvents() {
        this.DropEventsListener = this.DropActionService.DropRequest
            .subscribe((dropEvent: DropEvent) => this.resolveDropEvent(dropEvent))
    }

    resolveDropEvent(dropEvent: DropEvent) {
        if (this.isWithinDropZone(dropEvent.Rect)) {
            let exists;
            for (let i = 0; i < this.ApprovedDrops.length; i++) {
                if (this.ApprovedDrops[i].Element == dropEvent.Element) {
                    exists = true
                    this.ApprovedDrops[i] = dropEvent;
                }
            }
            if (!exists) this.ApprovedDrops.push(dropEvent)
        } else {
            for (let i = 0; i < this.ApprovedDrops.length; i++) {
                if (this.ApprovedDrops[i].Element == dropEvent.Element) {
                    this.ApprovedDrops.splice(i, 1)
                }
            }
            const response: DropResponse = { Element: dropEvent.Element, Status: 'rejected' }
            this.DropActionService.respondToDropEvent(response)
        }
        this.DropActionService.setApprovedDrops(this.ApprovedDrops);
    }

    isWithinDropZone(rect: ClientRect) {
        if (
            rect.left < this.DropZoneBoundries.left ||
            rect.top < this.DropZoneBoundries.top ||
            rect.right > this.DropZoneBoundries.right ||
            rect.bottom > this.DropZoneBoundries.bottom
        ) {
            return false
        }
        else {
            return true
        }
    }

    resetApprovedDrops() {
        this.ApprovedDrops = [];
        this.DropActionService.setApprovedDrops(this.ApprovedDrops);
    }
}