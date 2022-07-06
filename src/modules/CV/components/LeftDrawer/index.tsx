import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Button, Hidden} from '@material-ui/core';
import {CloudDownloadOutlined as DownloadIcon} from '@material-ui/icons';
import {selectIsDownloadingCv} from '../../../../rootReducer';
import {downloadCV} from '../../actions';

export const CVDrawer: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  const isDownloadingCv = useSelector(selectIsDownloadingCv);
  return (
    <>
      {/*<Box sx={{display: {xs: 'none', md: 'block'}}}>*/}
      {/* @ts-ignore */}
      <Hidden mdDown>
        <Button
          variant={'contained'}
          // @ts-ignore
          onClick={() => dispatch(downloadCV())}
          disabled={isDownloadingCv}
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

export default CVDrawer;
