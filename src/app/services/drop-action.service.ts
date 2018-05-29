import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { DropEvent, DropResponse } from '../types/types';

@Injectable()
export class DropActionService {

    public DropRequest: Subject<DropEvent> = new Subject<DropEvent>()
    public DropResponse: Subject<DropResponse> = new Subject<DropResponse>()

    private ApprovedDrops: DropEvent[] = []
    private DropZoneBoundries: ClientRect;
    
    constructor() { }

    requestDrop(event: DropEvent) {
        this.DropRequest.next(event)
    }

    respondToDropEvent(response: DropResponse) {
        this.DropResponse.next(response)
    }

    setApprovedDrops(approvedDrops: DropEvent[]) {
        this.ApprovedDrops = approvedDrops
        // console.log('approved drops in service', this.ApprovedDrops)
    }

    updateDropZoneBoundries(boundries:ClientRect){
        this.DropZoneBoundries = boundries
    }

    get approvedDrops(): DropEvent[] {
        return this.ApprovedDrops
    }

    get dropZoneBoundries(): ClientRect {
        return this.DropZoneBoundries
    }

}
