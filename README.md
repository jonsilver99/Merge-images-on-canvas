# NgExcercise

This app allows user to merge and edit images together by dragging and dropping them into a canvas, and
resizing the image by dragging its corners.

The app also features a proxy server that downloads images from different domains - and then serves them back
to client. This keeps the canvas from being tainted and unable to export due to CORS issues.

At any time the user can download the canvas as a png, along with all the merged photos in it. 

App uses a custom, draggable, droppable and resizeable directives, that can be applied to any html element. 

## How to run this project

* This project should be served through node.
- Run npm install in cli
- Run node server.js in cli
- Go to localhost:4200 in browser


