import React from 'react';
import {connect} from 'react-redux';
import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {Button, Hidden} from '@material-ui/core';
import {CloudDownloadOutlined as DownloadIcon} from '@material-ui/icons';
import {CVAction, downloadCV} from '../../../../../actions/cv';
import {RootState} from '../../../../../reducers';

const _CVDrawer: React.FunctionComponent<StateProps &
  DispatchProps> = props => {
  return (
    <>
      <Hidden mdDown>
        <Button
          variant={'contained'}
          onClick={props.downloadCV}
          disabled={props.isDownloading}
          color={'primary'}
          fullWidth
        >
          <DownloadIcon />
          &nbsp;{'Download CV'}
        </Button>
      </Hidden>
    </>
  );
};

interface StateProps {
  isDownloading: boolean;
}

const mapStateToProps = (state: RootState): StateProps => {
  return {
    isDownloading: state.cv.isDownloading
  };
};

interface DispatchProps {
  downloadCV: () => void;
}

const mapDispatchToProps = (
  dispatch: ThunkDispatch<{}, {}, CVAction>
): DispatchProps => ({
  downloadCV: (): ThunkAction<{}, {}, {}, CVAction> => dispatch(downloadCV())
});

export const CVDrawer = connect(mapStateToProps, mapDispatchToProps)(_CVDrawer);
export default CVDrawer;
