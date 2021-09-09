import React from 'react';
import {AnyAction} from 'redux';
import {useSelector} from 'react-redux';
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
import {action} from '../../../../index';
import {DESIGN_SCHEME_ID_RETRO} from '../../../../theme/retro';
import {
  getCurrentDesignSchemeId,
  getUser,
  isAppInitialized
} from '../../reducers';
import {LOGIN, LOGOUT} from '../../actions/auth';
import {TOGGLE_DRAWER} from '../../actions/leftDrawer';
import styles from './styles';

const useStyles = makeStyles(styles);

const AppBar: React.FunctionComponent = () => {
  const classes = useStyles();

  const user = useSelector(getUser);
  const currentDesignSchemeId = useSelector(getCurrentDesignSchemeId);
  const isAppReady = useSelector(isAppInitialized);

  const isAuthenticated = Boolean(user);

  return (
    <MuiAppBar position='fixed' className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <div className={classes.titleContainer}>
          <IconButton
            color='inherit'
            aria-label='Open drawer'
            edge='start'
            onClick={(): AnyAction => action(TOGGLE_DRAWER)}
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
        {isAppReady && (
          <div className={classes.rightPart}>
            {!isAuthenticated && (
              <Button
                onClick={(): AnyAction => action(LOGIN)}
                color={
                  currentDesignSchemeId === DESIGN_SCHEME_ID_RETRO
                    ? 'primary'
                    : 'secondary'
                }
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
                color={
                  currentDesignSchemeId === DESIGN_SCHEME_ID_RETRO
                    ? 'primary'
                    : 'inherit'
                }
                variant={'outlined'}
              >
                Logout
              </Button>
            )}
          </div>
        )}
      </Toolbar>
    </MuiAppBar>
  );
};

export default AppBar;
