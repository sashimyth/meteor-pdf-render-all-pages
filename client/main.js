/**
 * Created by User on 21/06/2017.
 */
// import '../imports/startup/client'

import { Template } from 'meteor/templating';

import './main.html'

Template.pdget.onRendered(function () {
    // If absolute URL from the remote server is provided, configure the CORS
    // header on that server.

    var url = '//cdn.mozilla.net/pdfjs/tracemonkey.pdf';

    // The workerSrc property shall be specified.
    PDFJS.workerSrc = '/packages/pascoual_pdfjs/build/pdf.worker.js';

    var pdfDoc = null,
        pageNum = 1,
        pageRendering = false,
        pageNumPending = null,
        scale = 2,
        canvas = document.getElementById('pdfcanvas'),
        ctx = canvas.getContext('2d');

    /**
     * Get page info from document, resize canvas accordingly, and render page.
     * @param num Page number.
     */
    function renderPage(num) {
        pageRendering = true;
        // Using promise to fetch the page
        pdfDoc.getPage(num).then(function(page) {
            var viewport = page.getViewport(scale);
            canvas.height = viewport.height;
            canvas.width = viewport.width;

            // Render PDF page into canvas context
            var renderContext = {
                canvasContext: ctx,
                viewport: viewport
            };
            var renderTask = page.render(renderContext);

            // Wait for rendering to finish
            renderTask.promise.then(function() {
                pageRendering = false;
                if (pageNumPending !== null) {
                    // New page rendering is pending
                    renderPage(pageNumPending);
                    pageNumPending = null;
                }
            });
        });

        // Update page counters
        document.getElementById('page_num').textContent = pageNum;
    }

    /**
     * If another page rendering in progress, waits until the rendering is
     * finised. Otherwise, executes rendering immediately.
     */
    function queueRenderPage(num) {
        if (pageRendering) {
            pageNumPending = num;
        } else {
            renderPage(num);
        }
    }

    /**
     * Displays previous page.
     */
    function onPrevPage() {
        if (pageNum <= 1) {
            return;
        }
        pageNum--;
        queueRenderPage(pageNum);
    }
    document.getElementById('prev').addEventListener('click', onPrevPage);

    /**
     * Displays next page.
     */
    function onNextPage() {
        if (pageNum >= pdfDoc.numPages) {
            return;
        }
        pageNum++;
        queueRenderPage(pageNum);
    }
    document.getElementById('next').addEventListener('click', onNextPage);

    /**
     * Asynchronously downloads PDF.
     */
    PDFJS.getDocument(url).then(function(pdfDoc_) {
        pdfDoc = pdfDoc_;
        document.getElementById('page_count').textContent = pdfDoc.numPages;

        // Initial/first page rendering
        renderPage(pageNum);
    });
});
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
