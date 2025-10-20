import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {AnyAction} from 'redux';
import html2canvas from 'html2canvas';
import JSPDF from 'jspdf';
import {cvContainerId} from '../../../variables/constants';
import {GetState} from '../../../index';
import {
  DesignSchemeIdType,
  designSchemes,
  DesignSchemeType
} from '../../../theme';

export const BEGIN_CV_DOWNLOAD = 'BEGIN_CV_DOWNLOAD';
export type BEGIN_CV_DOWNLOAD = typeof BEGIN_CV_DOWNLOAD;
export const FINISH_CV_DOWNLOAD = 'FINISH_CV_DOWNLOAD';
export type FINISH_CV_DOWNLOAD = typeof FINISH_CV_DOWNLOAD;

export type CVAction = {
  type: BEGIN_CV_DOWNLOAD | FINISH_CV_DOWNLOAD;
  payload?: {
    designSchemeId?: DesignSchemeIdType;
    isDownloading?: boolean;
  };
};

export const downloadCV = (): ThunkAction<any, any, any, any> => async (
  dispatch: ThunkDispatch<any, any, any>,
  getState: GetState
): Promise<AnyAction> => {
  dispatch({type: BEGIN_CV_DOWNLOAD});
  window.scrollTo(0, 0);
  console.log(getState());
  const designScheme = designSchemes[
    getState().main.app.designSchemeId as DesignSchemeIdType
  ] as DesignSchemeType;
  const cvContainer = document.querySelector(
    `#${cvContainerId}`
  ) as HTMLElement;
  await html2canvas(cvContainer, {
    useCORS: true,
    imageTimeout: 0,
    allowTaint: true
  }) // , {scale: 3}
    .then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new JSPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const contentHeight =
        (cvContainer.offsetHeight * pdfWidth) / cvContainer.offsetWidth;
      const pdfHeight = pdf.internal.pageSize.getHeight();

      // console.log('content height', contentHeight);
      // console.log('pdf height', pdf.internal.pageSize.getHeight());

      pdf.setFillColor(designScheme.background.default as string);
      pdf.rect(0, 0, pdfWidth, pdfHeight + 2, 'F');
      // pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, contentHeight, '', 'FAST');
      pdf.addImage(
        imgData,
        'PNG',
        0,
        (pdfHeight - contentHeight) / 2,
        pdfWidth,
        contentHeight,
        '',
        'FAST'
      );
      pdf.save('cv.pdf', {returnPromise: true});
    });
  return dispatch({type: FINISH_CV_DOWNLOAD});
};
