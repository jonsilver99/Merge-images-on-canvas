import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { DropActionService } from './services/drop-action.service';
import { DropEvent, options, Product } from './types/types';
import { ApiDataService } from './services/api-data.service';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
    public title = 'NgExercise - yoni sivlerstein';
    public Products$: Observable<Product[]>
    private ImageResolveEndpoint: string = "http://localhost:4200/image"
    

    @ViewChild('Canvas') public Canvas: ElementRef;
    @ViewChild('DownloadCanvasButton') public DownloadCanvasButton: ElementRef;

    constructor(
        private DropActionService: DropActionService,
        private ApiDataService: ApiDataService
    ) { }

    ngOnInit() {
        this.Products$ = this.ApiDataService.getProducts()
    }

    ngAfterViewInit() {
        const BaseImage: HTMLImageElement = new Image()
        BaseImage.src = '/assets/shelves.jpg';
        BaseImage.onload = () => {
            this.draw(BaseImage)
        }
    }

    draw(img: HTMLImageElement, options?: options) {
        const canvasElement: HTMLCanvasElement = this.Canvas.nativeElement;
        let ctx = canvasElement.getContext('2d')
        debugger;
        ctx.imageSmoothingEnabled = true;
        // ctx.imageSmoothingQuality = "high"
        if (!options) {
            ctx.drawImage(img, 0, 0, canvasElement.width, canvasElement.height)
        }
        else {
            ctx.drawImage(img, options.x, options.y, options.w, options.h)
        }
    }

    downloadCanvas() {
        this.drawAllImagesOnCanvas()
        const downloadLink: HTMLAnchorElement = this.DownloadCanvasButton.nativeElement
        const canvasElement: HTMLCanvasElement = this.Canvas.nativeElement
        downloadLink.href = canvasElement.toDataURL()
        downloadLink.download = 'canvas.png'
    }

    drawAllImagesOnCanvas() {
        const droppedOnCanvas: DropEvent[] = this.DropActionService.approvedDrops
        const canvasBoundries: ClientRect = this.DropActionService.dropZoneBoundries

        droppedOnCanvas.map((itemOnCanvas: DropEvent) => {
            let addedImg: HTMLImageElement = itemOnCanvas.Image
            let rect: ClientRect = itemOnCanvas.Rect
            let drawX = rect.left - canvasBoundries.left
            let drawY = rect.top - canvasBoundries.top
            this.draw(addedImg, { x: drawX, y: drawY, w: rect.width, h: rect.height })
        })
    }

    resetApp() {
        window.location.reload()
    }
}


