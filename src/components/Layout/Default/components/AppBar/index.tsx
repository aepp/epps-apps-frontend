import React from 'react';
import {
  AppBar as MuiAppBar,
  IconButton,
  makeStyles,
  Toolbar,
  Typography
} from '@material-ui/core';
import {Menu as MenuIcon} from '@material-ui/icons';
import {Link} from 'react-router-dom';
import styles from './styles';
import routes from '../../../../../variables/routes';
import {DesignSchemeIdType} from '../../../../../design';
import {RootState} from '../../../../../reducers';
import {ThunkDispatch} from 'redux-thunk';
import {connect} from 'react-redux';
import {toggleDrawer} from '../../../../../actions/app';

const useStyles = makeStyles(styles);

const _AppBar: React.FunctionComponent<StateProps & DispatchProps> = props => {
  const classes = useStyles();

  return (
    <MuiAppBar position='fixed' className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <div className={classes.titleContainer}>
          <IconButton
            color='inherit'
            aria-label='Open drawer'
            edge='start'
            onClick={props.toggleDrawer}
            className={classes.menuButton}
          >
            <MenuIcon className={classes.menuIcon} />
          </IconButton>
          <Link to={routes.index} className={classes.titleLink}>
            <Typography
              variant='h6'
              noWrap
              className={classes.title}
              component={'div'}
            >
              <div>E</div>
              <div>P</div>
              <div>P</div>
              <div>S</div>
              <div>&nbsp;</div>
              <div>A</div>
              <div>P</div>
              <div>P</div>
              <div>S</div>
            </Typography>
          </Link>
        </div>
        <Typography className={classes.titleAddition}>
          die Seite befindet sich im Aufbau
        </Typography>
      </Toolbar>
    </MuiAppBar>
  );
};

interface StateProps {
  isDrawerOpen: boolean;
}

const mapStateToProps = (state: RootState): StateProps => {
  return {
    isDrawerOpen: state.app.isDrawerOpen
  };
};

interface DispatchProps {
  toggleDrawer: () => void;
}

const mapDispatchToProps = (
  dispatch: ThunkDispatch<{}, {}, any>
): DispatchProps => ({
  toggleDrawer: () => dispatch(toggleDrawer())
});

export const AppBar = connect(mapStateToProps, mapDispatchToProps)(_AppBar);
export default AppBar;
