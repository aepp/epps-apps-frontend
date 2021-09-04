import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {ThunkDispatch} from 'redux-thunk';
import {connect} from 'react-redux';
import {Theme, Drawer, Hidden} from '@material-ui/core';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import {RootState} from '../../../../rootReducer';
import routes from '../../../../variables/routes';
import CVPage from '../../../CV';
import IndexPage from '../../../Home';
import CVDrawer from '../../../CV/components/LeftDrawer';
import {AppAction} from '../../actions/app';
import {closeDrawer} from '../../thunks';
import DefaultDrawer from '../DefaultDrawer';
import AppBar from '../AppBar';
import styles from './styles';

const useStyles = makeStyles(styles);

const _DefaultLayout: React.FunctionComponent<StateProps &
  DispatchProps> = props => {
  const classes = useStyles();
  const theme: Theme = useTheme();

  const drawer = (
    <div className={classes.drawer}>
      <div className={classes.toolbar} />
      <Switch>
        <Route key={routes.cv} path={routes.cv} component={CVDrawer} exact />
      </Switch>
      <DefaultDrawer />
    </div>
  );

  return (
    <div className={classes.root}>
      <AppBar />
      <nav className={classes.drawer} aria-label='Page navigation'>
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation='css'>
          <Drawer
            variant='temporary'
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={props.isLeftDrawerOpen}
            onClose={props.closeDrawer}
            classes={{
              paper: classes.drawerPaper
            }}
            ModalProps={{
              keepMounted: true // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation='css'>
          <Drawer
            classes={{
              paper: classes.drawerPaper
            }}
            variant='permanent'
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Switch>
          <Route
            key={routes.index}
            path={routes.index}
            component={IndexPage}
            exact
          />
          <Route key={routes.cv} path={routes.cv} component={CVPage} exact />
        </Switch>
      </main>
    </div>
  );
};

interface StateProps {
  isLeftDrawerOpen: boolean;
}

const mapStateToProps = (state: RootState): StateProps => {
  console.log(state);
  return {
    isLeftDrawerOpen: state.main.app.isLeftDrawerOpen
  };
};

interface DispatchProps {
  closeDrawer: () => void;
}

const mapDispatchToProps = (
  dispatch: ThunkDispatch<{}, {}, any>
): DispatchProps => ({
  closeDrawer: (): AppAction => dispatch(closeDrawer())
});

export const DefaultLayout = connect(
  mapStateToProps,
  mapDispatchToProps
)(_DefaultLayout);
export default DefaultLayout;
