import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import {ThemeProvider} from '@material-ui/styles';
import CVPage from './pages/cv';
import theme from './theme';
import * as serviceWorker from './serviceWorker';
import ReactPDF, {Page, Document, PDFViewer} from '@react-pdf/renderer';
import html2canvas from 'html2canvas';


const App = (
  <ThemeProvider theme={theme}>
    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
    <CssBaseline/>
    <CVPage/>
  </ThemeProvider>
);
ReactDOM.render(
  App,
  document.getElementById('root'),
  () => {
    html2canvas(document.body).then(function (canvas) {
      // Export the canvas to its data URI representation
      // let base64image = canvas.toDataURL('image/png');
      document.body.appendChild(canvas);
      // Open the image in a new window
      // window.open(base64image, '_blank');
    });
  }
);

// ReactPDF.render(
//   <Document>
//     <Page size="A4">
//       {App}
//     </Page>
//   </Document>
//   ,
//   `${__dirname}/example.pdf`
// );
// ReactDOM.render(
//   <PDFViewer>
//     <Document>
//       <Page size="A4">
//         {App}
//       </Page>
//     </Document>
//   </PDFViewer>,
//   document.getElementById('root')
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
