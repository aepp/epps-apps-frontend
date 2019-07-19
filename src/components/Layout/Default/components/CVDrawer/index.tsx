import React from "react";
import {connect} from 'react-redux';
import {ThunkDispatch} from "redux-thunk";
import {Button} from "@material-ui/core";
import {CloudDownloadOutlined as DownloadIcon} from "@material-ui/icons";
import {downloadCV} from "../../../../../actions/cv";
import {RootState} from "../../../../../reducers";

const _CVDrawer: React.FunctionComponent<StateProps & DispatchProps> = props => {
  return (
    <>
      <Button
        variant={"contained"}
        onClick={props.downloadCV}
        disabled={props.isDownloading}
        color={"primary"}
        fullWidth>
        <DownloadIcon/>&nbsp;{'Download CV'}
      </Button>
    </>
  );

};

interface StateProps {
  isDownloading: boolean,
}

const mapStateToProps = (states: RootState): StateProps => {
  return {
    isDownloading: states.cv.isDownloading,
  }
};

interface DispatchProps {
  downloadCV: () => void;
}

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>): DispatchProps => ({
  downloadCV: () => dispatch(downloadCV()),
});

export const CVDrawer = connect(mapStateToProps, mapDispatchToProps)(_CVDrawer);
export default CVDrawer;
