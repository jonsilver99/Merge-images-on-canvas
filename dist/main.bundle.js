webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ":host{\r\n    height: 100%;\r\n}\r\n\r\n#wrapper{\r\n    padding: 1rem;\r\n}\r\n\r\nheader{\r\n    /* border-bottom: 1px solid darkblue; */\r\n    /* border-top: 1px solid darkblue; */\r\n    position: relative;\r\n    background: dodgerblue;\r\n    -webkit-box-shadow: -2px 2px 2px #a4a3a3;\r\n            box-shadow: -2px 2px 2px #a4a3a3;\r\n    \r\n}\r\n\r\nh1{\r\n    text-shadow: -1px -1px 2px #050544, -2px -2px 2px white;\r\n}\r\n\r\n#action-buttons-container{\r\n    position: absolute;\r\n    bottom: 1rem;\r\n    right: 0;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    width: 500px;\r\n    -ms-flex-wrap: nowrap;\r\n        flex-wrap: nowrap;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n}\r\n\r\n.action-button{\r\n    width: 200px;\r\n    display: block;\r\n    background: dodgerblue;\r\n    border: 2px solid rgb(48, 48, 48);\r\n    font-weight: bold;\r\n    padding: 1rem;\r\n    font-size: 1.15rem;\r\n    text-align: center;\r\n    -webkit-transition: all 300ms linear;\r\n    transition: all 300ms linear;\r\n    margin: 0 5px;\r\n}\r\n\r\n.action-button:hover{\r\n    background:rgb(4, 81, 153);\r\n    border: 2px solid whitesmoke;\r\n    color:whitesmoke;\r\n    -webkit-transition: all 300ms linear;\r\n    transition: all 300ms linear;\r\n    cursor: pointer\r\n}\r\n\r\nh3{\r\n    background:  dodgerblue;\r\n    padding: .25rem;\r\n    color: whitesmoke;\r\n    -webkit-box-shadow: -1px 1px 1px #a4a3a3;\r\n            box-shadow: -1px 1px 1px #a4a3a3;\r\n}\r\n\r\n#content{\r\n    padding: 1rem 0;\r\n}\r\n\r\n#draggables-list{\r\n    background: gainsboro;\r\n    padding: 1rem;    \r\n}\r\n\r\n.product-box{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-line-pack: center;\r\n        align-content: center;\r\n    -webkit-box-pack: justify;\r\n        -ms-flex-pack: justify;\r\n            justify-content: space-between;\r\n    background: aliceblue;\r\n    width: 350px;\r\n    padding: .5rem;\r\n    height: 92px;\r\n    margin-bottom: 10px;\r\n    -webkit-box-shadow: -1px 1px 1px #a4a3a3;\r\n            box-shadow: -1px 1px 1px #a4a3a3;    \r\n}\r\n\r\n/* Drop area  */\r\n\r\n#dropable-area{\r\n    width: 500px;    \r\n    height: 600px;    \r\n}\r\n\r\n/***************************\r\n     Dragables styles \r\n**************************/\r\n\r\n.draggable-initial-container{\r\n    position: relative;\r\n    height: 75px;\r\n    width: 75px;\r\n    background: gainsboro;\r\n}\r\n\r\n.draggable{\r\n    position: relative;\r\n    background: aliceblue;\r\n    border: 3px solid rgb(225, 241, 255);\r\n    width:75px;\r\n    height:75px;\r\n    -webkit-transition: background 200ms linear;\r\n    transition: background 200ms linear;    \r\n}\r\n\r\n.draggable.dragging{\r\n    background: rgb(114, 153, 187) !important;\r\n    border-color: rgb(35, 74, 107) !important;\r\n    -webkit-transition: background 200ms linear;\r\n    transition: background 200ms linear;\r\n}\r\n\r\n.draggable-img {\r\n    width:100%;\r\n    height:100%;\r\n}\r\n\r\n/****************************\r\n     resizeables styles \r\n****************************/\r\n\r\n.resize-handler{\r\n    position: absolute;\r\n    bottom: 0;\r\n    right: 0;\r\n    background: white;\r\n    font-size: .75rem;\r\n    font-weight: bold;\r\n    padding: .25rem;\r\n    cursor: se-resize\r\n}\r\n\r\n#note{\r\n    width: 450px;\r\n    font-size: 1.05rem;\r\n    background: #d6ebff;\r\n    -webkit-box-shadow: -1px 1px 1px #a4a3a3;\r\n            box-shadow: -1px 1px 1px #a4a3a3;\r\n    padding: .25rem;    \r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\" class=\"flexCol fullHeight\">\n    <header>\n        <h1>Angular Exercise</h1>\n        <h2>Yonatan silverstein</h2>\n        <div id=\"action-buttons-container\">\n            <a id=\"reset-app\" class=\"action-button\" (click)=\"resetApp()\">Reset</a>\n            <a id=\"download-canvas-button\" class=\"action-button\" #DownloadCanvasButton (click)=\"downloadCanvas()\">Download canvas</a>\n        </div>\n    </header>\n    <div id=\"content\" class=\"fullHeight flexRow justify-content-spread align-items-start\">\n        <div id=\"draggables-list\" class=\"fullHeight\">\n            <h3>Products</h3>\n            <ng-container *ngIf=\"Products$ | async as products; else loading\">\n                <div *ngFor=\"let product of products, let i = index\" class=\"product-box\">\n                    <div class=\"product-details\">\n                        <h4> Name: {{ product.name }} </h4>\n                        <h4> Code: {{ product.code }} </h4>\n                    </div>\n                    <section class=\"draggable-initial-container\">\n                        <div appResizeHandler appDraggable [ResetPositionOnDrop]=false class=\"draggable\">\n                            <img class=\"draggable-img resizeable-element\" src=\"{{ImageResolveEndpoint}}/?picUrl={{product.link_to_image}}\" alt=\"\">\n                            <div class=\"resize-handler\">resize</div>\n                        </div>\n                    </section>\n                </div>\n            </ng-container>\n            <ng-template #loading>\n                <h2>Loading...</h2>\n            </ng-template>\n        </div>\n\n        <div id=\"note\">\n            <b>Note:</b>\n            <br> Tainted canvas / cross origin problem solved.\n            <br> Images are downloaded by proxy (downloaded to node, then piped back to client)\n            <br>\n            <br>How to use:\n            <ol>\n                <li>drag image anywhere <b>within</b> the canvas</li>\n                <li>click 'Download canvas' button to download</li>\n            </ol>\n        </div>\n\n        <div appDropable id=\"dropable-area\" class=\"fullHeight\">\n            <canvas id=\"canvas\" width=\"500\" height=\"600\" #Canvas></canvas>\n        </div>\n\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_drop_action_service__ = __webpack_require__("./src/app/services/drop-action.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_api_data_service__ = __webpack_require__("./src/app/services/api-data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(DropActionService, ApiDataService) {
        this.DropActionService = DropActionService;
        this.ApiDataService = ApiDataService;
        this.title = 'NgExercise - yoni sivlerstein';
        this.ImageResolveEndpoint = "http://localhost:4200/image";
    }
    AppComponent.prototype.ngOnInit = function () {
        this.Products$ = this.ApiDataService.getProducts();
    };
    AppComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        var BaseImage = new Image();
        BaseImage.src = '/assets/shelves.jpg';
        BaseImage.onload = function () {
            _this.draw(BaseImage);
        };
    };
    AppComponent.prototype.draw = function (img, options) {
        var canvasElement = this.Canvas.nativeElement;
        var ctx = canvasElement.getContext('2d');
        debugger;
        ctx.imageSmoothingEnabled = true;
        // ctx.imageSmoothingQuality = "high"
        if (!options) {
            ctx.drawImage(img, 0, 0, canvasElement.width, canvasElement.height);
        }
        else {
            ctx.drawImage(img, options.x, options.y, options.w, options.h);
        }
    };
    AppComponent.prototype.downloadCanvas = function () {
        this.drawAllImagesOnCanvas();
        var downloadLink = this.DownloadCanvasButton.nativeElement;
        var canvasElement = this.Canvas.nativeElement;
        downloadLink.href = canvasElement.toDataURL();
        downloadLink.download = 'canvas.png';
    };
    AppComponent.prototype.drawAllImagesOnCanvas = function () {
        var _this = this;
        var droppedOnCanvas = this.DropActionService.approvedDrops;
        var canvasBoundries = this.DropActionService.dropZoneBoundries;
        droppedOnCanvas.map(function (itemOnCanvas) {
            var addedImg = itemOnCanvas.Image;
            var rect = itemOnCanvas.Rect;
            var drawX = rect.left - canvasBoundries.left;
            var drawY = rect.top - canvasBoundries.top;
            _this.draw(addedImg, { x: drawX, y: drawY, w: rect.width, h: rect.height });
        });
    };
    AppComponent.prototype.resetApp = function () {
        window.location.reload();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* ViewChild */])('Canvas'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ElementRef */])
    ], AppComponent.prototype, "Canvas", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* ViewChild */])('DownloadCanvasButton'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ElementRef */])
    ], AppComponent.prototype, "DownloadCanvasButton", void 0);
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_drop_action_service__["a" /* DropActionService */],
            __WEBPACK_IMPORTED_MODULE_2__services_api_data_service__["a" /* ApiDataService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__directives_draggable_directive__ = __webpack_require__("./src/app/directives/draggable.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__directives_dropable_directive__ = __webpack_require__("./src/app/directives/dropable.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_drop_action_service__ = __webpack_require__("./src/app/services/drop-action.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__directives_resize_handler_directive__ = __webpack_require__("./src/app/directives/resize-handler.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_api_data_service__ = __webpack_require__("./src/app/services/api-data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["F" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__directives_draggable_directive__["a" /* DraggableDirective */],
                __WEBPACK_IMPORTED_MODULE_5__directives_dropable_directive__["a" /* DropableDirective */],
                __WEBPACK_IMPORTED_MODULE_7__directives_resize_handler_directive__["a" /* ResizeHandlerDirective */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClientModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_6__services_drop_action_service__["a" /* DropActionService */], __WEBPACK_IMPORTED_MODULE_8__services_api_data_service__["a" /* ApiDataService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/directives/draggable.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DraggableDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_drop_action_service__ = __webpack_require__("./src/app/services/drop-action.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DraggableDirective = (function () {
    function DraggableDirective(ElRef, Renderer, DropActionService) {
        this.ElRef = ElRef;
        this.Renderer = Renderer;
        this.DropActionService = DropActionService;
        // config
        this.ResetPositionOnDrop = false;
        // mouse click state
        this.MouseButtonPressed = false;
        // drag action observables
        this.MouseDownEvent$ = __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].fromEvent(this.ElRef.nativeElement, 'mousedown');
        this.MouseMoveEvent$ = __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].fromEvent(document, 'mousemove');
        this.MouseUpEvent$ = __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].fromEvent(document, 'mouseup');
    }
    DraggableDirective.prototype.onResize = function (event) {
        this.resetPosition();
    };
    DraggableDirective.prototype.ngOnInit = function () {
        this.initObservables();
        this.listenToDropResponse();
    };
    DraggableDirective.prototype.initObservables = function () {
        var _this = this;
        // Mouse down
        this.MouseDownEvent$
            .do(function (event) {
            _this.MouseButtonPressed = true;
            event.preventDefault();
        })
            .map(function (event) {
            return { x: event.clientX, y: event.clientY };
        })
            .subscribe(function (data) {
            _this.applyStyle('dragging');
            _this.startPosition = data;
        }, function (err) { return console.log(err); });
        // In transit
        this.MouseMoveEvent$
            .takeWhile(function () { return _this.MouseButtonPressed; })
            .repeat()
            .map(function (event) {
            return { x: event.clientX, y: event.clientY };
        })
            .subscribe(function (data) {
            _this.dragElement(data);
        }, function (err) { return console.log(err); });
        // Mouse up - stop dragging
        this.MouseUpEvent$
            .do(function () { return _this.MouseButtonPressed = false; })
            .map(function (event) {
            return { x: event.clientX, y: event.clientY };
        })
            .subscribe(function (data) {
            _this.dropElementInPosition();
            if (_this.ResetPositionOnDrop)
                _this.resetPosition();
            _this.removeStyle('dragging');
        }, function (err) { return console.log(err); });
    };
    DraggableDirective.prototype.listenToDropResponse = function () {
        var _this = this;
        this.DropActionService.DropResponse
            .subscribe(function (response) {
            if (response.Status == 'rejected') {
                _this.Renderer.setStyle(response.Element, 'width', '75px');
                _this.Renderer.setStyle(response.Element, 'height', '75px');
                _this.resetPosition(response.Element);
            }
        });
    };
    Object.defineProperty(DraggableDirective.prototype, "startPosition", {
        set: function (startPos) {
            if (this.StartPosition)
                return;
            else
                this.StartPosition = startPos;
        },
        enumerable: true,
        configurable: true
    });
    DraggableDirective.prototype.dragElement = function (pos) {
        var currentPositionX = pos.x - this.StartPosition.x;
        var currentPositiony = pos.y - this.StartPosition.y;
        this.Renderer.setStyle(this.ElRef.nativeElement, 'transform', "translateX(" + currentPositionX + "px) translateY(" + currentPositiony + "px)");
    };
    DraggableDirective.prototype.dropElementInPosition = function () {
        var dropEvent = {
            Element: this.ElRef.nativeElement,
            Image: this.ElRef.nativeElement.querySelector('.draggable-img'),
            Rect: this.ElRef.nativeElement.getBoundingClientRect()
        };
        this.DropActionService.requestDrop(dropEvent);
    };
    DraggableDirective.prototype.resetPosition = function (element) {
        var elemToReset = element || this.ElRef.nativeElement;
        this.Renderer.setStyle(elemToReset, 'transform', "translateX(" + 0 + "px) translateY(" + 0 + "px)");
    };
    DraggableDirective.prototype.applyStyle = function (style) {
        this.Renderer.addClass(this.ElRef.nativeElement, style);
    };
    DraggableDirective.prototype.removeStyle = function (style) {
        this.Renderer.removeClass(this.ElRef.nativeElement, style);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Input */])(),
        __metadata("design:type", Boolean)
    ], DraggableDirective.prototype, "ResetPositionOnDrop", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* HostListener */])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], DraggableDirective.prototype, "onResize", null);
    DraggableDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Directive */])({
            selector: '[appDraggable]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Renderer2 */],
            __WEBPACK_IMPORTED_MODULE_3__services_drop_action_service__["a" /* DropActionService */]])
    ], DraggableDirective);
    return DraggableDirective;
}());



/***/ }),

/***/ "./src/app/directives/dropable.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DropableDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_drop_action_service__ = __webpack_require__("./src/app/services/drop-action.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DropableDirective = (function () {
    function DropableDirective(ElRef, Renderer, DropActionService) {
        this.ElRef = ElRef;
        this.Renderer = Renderer;
        this.DropActionService = DropActionService;
        this.ApprovedDrops = [];
    }
    DropableDirective.prototype.onResize = function (event) {
        this.defineDropZoneBoundries();
        this.resetApprovedDrops();
    };
    DropableDirective.prototype.ngOnInit = function () {
        this.defineDropZoneBoundries();
        this.listenToDropEvents();
    };
    DropableDirective.prototype.defineDropZoneBoundries = function () {
        var element = this.ElRef.nativeElement;
        this.DropZoneBoundries = element.getBoundingClientRect();
        this.DropActionService.updateDropZoneBoundries(this.DropZoneBoundries);
        // console.log('new dropzone boundries')
        // console.log(this.DropZoneBoundries.top, this.DropZoneBoundries.right, this.DropZoneBoundries.bottom, this.DropZoneBoundries.left)
    };
    DropableDirective.prototype.listenToDropEvents = function () {
        var _this = this;
        this.DropEventsListener = this.DropActionService.DropRequest
            .subscribe(function (dropEvent) { return _this.resolveDropEvent(dropEvent); });
    };
    DropableDirective.prototype.resolveDropEvent = function (dropEvent) {
        if (this.isWithinDropZone(dropEvent.Rect)) {
            var exists = void 0;
            for (var i = 0; i < this.ApprovedDrops.length; i++) {
                if (this.ApprovedDrops[i].Element == dropEvent.Element) {
                    exists = true;
                    this.ApprovedDrops[i] = dropEvent;
                }
            }
            if (!exists)
                this.ApprovedDrops.push(dropEvent);
        }
        else {
            for (var i = 0; i < this.ApprovedDrops.length; i++) {
                if (this.ApprovedDrops[i].Element == dropEvent.Element) {
                    this.ApprovedDrops.splice(i, 1);
                }
            }
            var response = { Element: dropEvent.Element, Status: 'rejected' };
            this.DropActionService.respondToDropEvent(response);
        }
        this.DropActionService.setApprovedDrops(this.ApprovedDrops);
    };
    DropableDirective.prototype.isWithinDropZone = function (rect) {
        if (rect.left < this.DropZoneBoundries.left ||
            rect.top < this.DropZoneBoundries.top ||
            rect.right > this.DropZoneBoundries.right ||
            rect.bottom > this.DropZoneBoundries.bottom) {
            return false;
        }
        else {
            return true;
        }
    };
    DropableDirective.prototype.resetApprovedDrops = function () {
        this.ApprovedDrops = [];
        this.DropActionService.setApprovedDrops(this.ApprovedDrops);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* HostListener */])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], DropableDirective.prototype, "onResize", null);
    DropableDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Directive */])({
            selector: '[appDropable]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Renderer2 */],
            __WEBPACK_IMPORTED_MODULE_1__services_drop_action_service__["a" /* DropActionService */]])
    ], DropableDirective);
    return DropableDirective;
}());



/***/ }),

/***/ "./src/app/directives/resize-handler.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResizeHandlerDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ResizeHandlerDirective = (function () {
    function ResizeHandlerDirective(ElRef, Renderer) {
        this.ElRef = ElRef;
        this.Renderer = Renderer;
        // handler click state
        this.HandlerPressed = false;
    }
    ResizeHandlerDirective.prototype.ngAfterContentInit = function () {
        this.initResizeElements();
        this.initResizeEvents();
    };
    ResizeHandlerDirective.prototype.initResizeElements = function () {
        // this.ResizeableElement = this.ElRef.nativeElement.querySelector('.resizeable-element')
        this.ResizeableElement = this.ElRef.nativeElement;
        this.ResizeHandler = this.ElRef.nativeElement.querySelector('.resize-handler');
    };
    ResizeHandlerDirective.prototype.initResizeEvents = function () {
        var _this = this;
        this.MouseDownEvent$ = __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].fromEvent(this.ResizeHandler, 'mousedown');
        this.MouseMoveEvent$ = __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].fromEvent(document, 'mousemove');
        this.MouseUpEvent$ = __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].fromEvent(document, 'mouseup');
        // resize handle clicked
        this.MouseDownEvent$
            .do(function (event) {
            _this.HandlerPressed = true;
            event.preventDefault();
            event.stopPropagation();
        })
            .subscribe();
        // resizeing mouse movement
        this.MouseMoveEvent$
            .takeWhile(function () { return _this.HandlerPressed; })
            .repeat()
            .map(function (event) {
            return { x: event.clientX, y: event.clientY };
        })
            .subscribe(function (data) { return _this.resizeElement(data); }, function (err) { return console.log(err); });
        // Mouse up - stop resizing
        this.MouseUpEvent$
            .do(function () { return _this.HandlerPressed = false; }).subscribe();
    };
    ResizeHandlerDirective.prototype.resizeElement = function (data) {
        var rect = this.ResizeableElement.getBoundingClientRect();
        var newWidth = data.x - rect.left;
        var newHeight = data.y - rect.bottom;
        this.Renderer.setStyle(this.ResizeableElement, 'position', "absolute");
        this.Renderer.setStyle(this.ResizeableElement, 'width', newWidth + "px");
        this.Renderer.setStyle(this.ResizeableElement, 'height', newHeight + "px");
    };
    ResizeHandlerDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Directive */])({
            selector: '[appResizeHandler]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Renderer2 */]])
    ], ResizeHandlerDirective);
    return ResizeHandlerDirective;
}());



/***/ }),

/***/ "./src/app/services/api-data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiDataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ApiDataService = (function () {
    function ApiDataService(HttpReqs) {
        this.HttpReqs = HttpReqs;
        this.Address = "http://www.mocky.io/v2/5b00281e3100007d0076def9";
        this.ImageResolveEndpoint = "http://localhost:4200/image";
    }
    ApiDataService.prototype.getProducts = function () {
        return this.HttpReqs.get(this.Address)
            .map(function (data) {
            var products = data.products;
            return products;
        });
    };
    ApiDataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], ApiDataService);
    return ApiDataService;
}());



/***/ }),

/***/ "./src/app/services/drop-action.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DropActionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DropActionService = (function () {
    function DropActionService() {
        this.DropRequest = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["Subject"]();
        this.DropResponse = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["Subject"]();
        this.ApprovedDrops = [];
    }
    DropActionService.prototype.requestDrop = function (event) {
        this.DropRequest.next(event);
    };
    DropActionService.prototype.respondToDropEvent = function (response) {
        this.DropResponse.next(response);
    };
    DropActionService.prototype.setApprovedDrops = function (approvedDrops) {
        this.ApprovedDrops = approvedDrops;
        // console.log('approved drops in service', this.ApprovedDrops)
    };
    DropActionService.prototype.updateDropZoneBoundries = function (boundries) {
        this.DropZoneBoundries = boundries;
    };
    Object.defineProperty(DropActionService.prototype, "approvedDrops", {
        get: function () {
            return this.ApprovedDrops;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropActionService.prototype, "dropZoneBoundries", {
        get: function () {
            return this.DropZoneBoundries;
        },
        enumerable: true,
        configurable: true
    });
    DropActionService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], DropActionService);
    return DropActionService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map