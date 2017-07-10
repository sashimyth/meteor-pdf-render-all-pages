import React from 'react'
import { Jumbotron } from 'react-bootstrap'

export default class PdfRead extends React.Component{
    componentDidMount(){
        // If absolute URL from the remote server is provided, configure the CORS
        // header on that server.

        var currentPage = 1;
        var pages = [];

        var url = '//localhost/seleksi.pdf';
        // var url = '//cdn.mozilla.net/pdfjs/tracemonkey.pdf';

        // The workerSrc property shall be specified.
        PDFJS.workerSrc = '/packages/pascoual_pdfjs/build/pdf.worker.js';

        // Asynchronous download of PDF
        var loadingTask = PDFJS.getDocument(url);

        loadingTask.promise.then(function(pdf) {
            console.log('PDF loaded');

            function renderPage(page) {
                console.log('Page loaded ');

                var scale = 1.3;
                var scaledViewport = page.getViewport(scale);

                var canvas = document.createElement('canvas');
                var context = canvas.getContext('2d');
                canvas.height = scaledViewport.height;
                canvas.width = scaledViewport.width;

                var renderContext = {
                    canvasContext: context,
                    viewport: scaledViewport
                };

                page.render(renderContext).then(function () {
                    if(currentPage < pdf.numPages) {
                        pages[currentPage] = canvas;
                        currentPage++;
                        pdf.getPage(currentPage).then(renderPage);
                    } else {
                        for (var i = 1; i < pages.length; i++) {
                            document.getElementById('pdfcanvas').appendChild(pages[i]);
                        }
                    }
                });
            }

            // Render the fetched first page
            pdf.getPage(currentPage).then(renderPage);

        }, function (reason) {
            // PDF loading error
            console.error(reason);
        });
    };
    render(){
        return (
            <Jumbotron className="text-center">
                <h2>PDFv2</h2>
                <p>A starting point for Meteor applications.</p>
                <div id="pdfcanvas" className="pdfcanvas"></div>
            </Jumbotron>
        )
    }
}