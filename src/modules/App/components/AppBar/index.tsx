import React from 'react';
import {ThunkDispatch} from 'redux-thunk';
import {connect, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import {
  AppBar as MuiAppBar,
  Button,
  IconButton,
  makeStyles,
  Toolbar,
  Typography
} from '@material-ui/core';
import {Menu as MenuIcon} from '@material-ui/icons';
import routes from '../../../../variables/routes';
import {RootState} from '../../../../rootReducer';
import {AppAction} from '../../actions/app';
import {toggleDrawer} from '../../thunks';
import styles from './styles';
import {getUser} from '../../reducers';
import {AnyAction} from 'redux';
import {action} from '../../../../index';
import {LOGIN, LOGOUT} from '../../actions/auth';

const useStyles = makeStyles(styles);

const _AppBar: React.FunctionComponent<StateProps & DispatchProps> = props => {
  const classes = useStyles();

  const user = useSelector(getUser);

  const isAuthenticated = Boolean(user);

  // @ts-ignore
  // @ts-ignore
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
        <div className={classes.rightPart}>
          {!isAuthenticated && (
            <Button
              onClick={(): AnyAction => action(LOGIN)}
              color={'primary'}
              variant={'contained'}
            >
              Twitter Login
            </Button>
          )}
          {isAuthenticated && (
            <Typography className={classes.greeting}>
              Hello,{' '}
              {
                // @ts-ignore
                user?.name
              }
            </Typography>
          )}
          {isAuthenticated && (
            <Button
              onClick={(): AnyAction => action(LOGOUT)}
              color={'primary'}
              variant={'outlined'}
            >
              Logout
            </Button>
          )}
        </div>
      </Toolbar>
    </MuiAppBar>
  );
};

interface StateProps {
  isLeftDrawerOpen: boolean;
}

const mapStateToProps = (state: RootState): StateProps => {
  return {
    isLeftDrawerOpen: state.main.app.isLeftDrawerOpen
  };
};

interface DispatchProps {
  toggleDrawer: () => void;
}

const mapDispatchToProps = (
  dispatch: ThunkDispatch<{}, {}, AppAction>
): DispatchProps => ({
  toggleDrawer: (): AppAction => dispatch(toggleDrawer())
});

export const AppBar = connect(mapStateToProps, mapDispatchToProps)(_AppBar);
export default AppBar;
