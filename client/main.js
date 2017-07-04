/**
 * Created by User on 21/06/2017.
 */
import '../imports/startup/client'

// import { Template } from 'meteor/templating';
//
// import './main.html'
//
// Template.pdget.onRendered(function () {
//
//     // If absolute URL from the remote server is provided, configure the CORS
//     // header on that server.
//
//     var currentPage = 1;
//     var pages = [];
//
//     var url = '//cdn.mozilla.net/pdfjs/tracemonkey.pdf';
//
//     // The workerSrc property shall be specified.
//     PDFJS.workerSrc = '/packages/pascoual_pdfjs/build/pdf.worker.js';
//
//     // Asynchronous download of PDF
//     var loadingTask = PDFJS.getDocument(url);
//     loadingTask.promise.then(function(pdf) {
//         console.log('PDF loaded');
//
//         function renderPage(page) {
//             console.log('Page loaded ');
//
//             var scale = 1.3;
//             var scaledViewport = page.getViewport(scale);
//
//             var canvas = document.createElement('canvas');
//             var context = canvas.getContext('2d');
//             canvas.height = scaledViewport.height;
//             canvas.width = scaledViewport.width;
//
//             var renderContext = {
//                 canvasContext: context,
//                 viewport: scaledViewport
//             };
//
//             page.render(renderContext).then(function () {
//                 if(currentPage < pdf.numPages) {
//                     pages[currentPage] = canvas;
//                     currentPage++;
//                     pdf.getPage(currentPage).then(renderPage);
//                 } else {
//                     for (var i = 1; i < pages.length; i++) {
//                         document.getElementById('pdfcanvas').appendChild(pages[i]);
//                     }
//                 }
//             });
//         }
//
//         // Render the fetched first page
//             pdf.getPage(currentPage).then(renderPage);
//
//     }, function (reason) {
//         // PDF loading error
//         console.error(reason);
//     });
//
//
//
// });

// Template.pdget.onRendered(function () {
//     // If absolute URL from the remote server is provided, configure the CORS
//     // header on that server.
//
//     var currentPage = 1;
//     var pages = [];
//
//     var url = '//cdn.mozilla.net/pdfjs/tracemonkey.pdf';
//
//     // The workerSrc property shall be specified.
//     PDFJS.workerSrc = '/packages/pascoual_pdfjs/build/pdf.worker.js';
//
//     // Asynchronous download of PDF
//     var loadingTask = PDFJS.getDocument(url);
//     loadingTask.promise.then(function(pdf) {
//         console.log('PDF loaded');
//
//         // Fetch the first page
//             pdf.getPage(currentPage).then(renderPage);
//
//     }, function (reason) {
//         // PDF loading error
//         console.error(reason);
//     });
//
//     function renderPage(page) {
//         console.log('Page loaded ');
//
//         var height = 700;
//         var viewport = page.getViewport(1);
//         var scale = height / viewport.height;
//         var viewport = page.getViewport(scale);
//
//         // Prepare canvas using PDF page dimensions
//         $('#pdfcanvas').append($('<canvas/>', {'id': 'pdf-viewer-' + i}));
//
//         var canvas = document.getElementById('pdf-viewer-' + i);
//
//         var context = canvas.getContext('2d');
//         canvas.height = viewport.height;
//         canvas.width = viewport.width;
//
//         // Render PDF page into canvas context
//         var renderContext = {
//             canvasContext: context,
//             viewport: viewport
//         };
//         var renderTask = page.render(renderContext);
//         renderTask.then(function () {
//             console.log('Page rendered ');
//         });
//     }
//
// });
//
// Template.pdfjs.onRendered(function () {
//
//     var url = 'lele.pdf';
//
//    console.log("rendered");
//     // Set worker URL to package assets
//     PDFJS.workerSrc = '/packages/pascoual_pdfjs/build/pdf.worker.js';
// // Create PDF
//     PDFJS.getDocument(url).then(function getPdfHelloWorld(pdf) {
//         // Fetch the first page
//         pdf.getPage(1).then(function getPageHelloWorld(page) {
//             var scale = 1;
//             var viewport = page.getViewport(scale);
//
//             // Prepare canvas using PDF page dimensions
//             var canvas = document.getElementById('pdfcanvas');
//             var context = canvas.getContext('2d');
//             canvas.height = viewport.height;
//             canvas.width = viewport.width;
//
//             // Render PDF page into canvas context
//             page.render({canvasContext: context, viewport: viewport}).promise.then(function () {
//                 console.log("rendered page");
//             });
//         });
//     });
// });
