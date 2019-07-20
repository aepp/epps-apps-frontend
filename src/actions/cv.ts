import html2canvas from "html2canvas";
import JSPDF from "jspdf";
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {cvContainerId} from "../variables/constants";
import {DesignSchemeIdType, designSchemes, DesignSchemeType} from "../design";
import {RootState} from "../reducers";
import {Action} from "redux";

export const CHANGE_DESIGN = 'CHANGE_DESIGN';
export type CHANGE_DESIGN = typeof CHANGE_DESIGN;
export const BEGIN_CV_DOWNLOAD = 'BEGIN_CV_DOWNLOAD';
export type BEGIN_CV_DOWNLOAD = typeof BEGIN_CV_DOWNLOAD;
export const FINISH_CV_DOWNLOAD = 'FINISH_CV_DOWNLOAD';
export type FINISH_CV_DOWNLOAD = typeof FINISH_CV_DOWNLOAD;

export type CVAction = {
  type: BEGIN_CV_DOWNLOAD | FINISH_CV_DOWNLOAD | CHANGE_DESIGN,
  payload?: any
}

export const downloadCV = (): ThunkAction<void, RootState, null, Action<string>> =>
  (dispatch: ThunkDispatch<{}, {}, any>, getState) => {
    dispatch({type: BEGIN_CV_DOWNLOAD});
    window.scrollTo(0, 0);
    const designScheme = designSchemes[getState().cv.designSchemeId] as DesignSchemeType;
    const cvContainer = document.querySelector(`#${cvContainerId}`) as HTMLElement;
    html2canvas(cvContainer, {
      useCORS: true,
      imageTimeout: 0,
      allowTaint: true
    }) // , {scale: 3}
      .then(canvas => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new JSPDF('p', 'mm', 'a4');
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (cvContainer.offsetHeight * pdfWidth) / cvContainer.offsetWidth;
        pdf.setFillColor(designScheme.background.default as string);
        pdf.rect(0, 0, pdfWidth, pdf.internal.pageSize.getHeight(), 'F');
        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight, '', 'FAST');
        pdf.save('cv.pdf', {returnPromise: true})
          .then(() => dispatch({type: FINISH_CV_DOWNLOAD}));
      });
  };

export const changeDesign = (designSchemeId: DesignSchemeIdType) => ({type: CHANGE_DESIGN, payload: {designSchemeId}});
