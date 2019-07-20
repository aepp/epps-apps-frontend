import React from "react";
import {Route, Switch} from 'react-router-dom';
import {
  Theme,
  Drawer,
  Hidden
} from "@material-ui/core";
import {makeStyles, useTheme} from '@material-ui/core/styles';
import styles from "./styles";
import CVPage from "../../../pages/cv";
import IndexPage from "../../../pages/index";
import CVDrawer from "./components/CVDrawer";
import routes from "../../../variables/routes";
import AppBar from "./components/AppBar";
import DefaultDrawer from "./components/DefaultDrawer";
import {RootState} from "../../../reducers";
import {ThunkDispatch} from "redux-thunk";
import {closeDrawer} from "../../../actions/app";
import {connect} from "react-redux";

const useStyles = makeStyles(styles);

const _DefaultLayout: React.FunctionComponent<StateProps & DispatchProps> = props => {
  const classes = useStyles();
  const theme: Theme = useTheme();

  const drawer = (
    <div className={classes.drawer}>
      <div className={classes.toolbar}/>
      <Switch>
        <Route key={routes.cv} path={routes.cv} component={CVDrawer} exact/>
      </Switch>
      <DefaultDrawer/>
    </div>
  );

  return (
    <div className={classes.root}>
      <AppBar/>
      <nav className={classes.drawer} aria-label="Page navigation">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={props.isDrawerOpen}
            onClose={props.closeDrawer}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}>
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open>
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar}/>
        <Switch>
          <Route key={routes.index} path={routes.index} component={IndexPage} exact/>
          <Route key={routes.cv} path={routes.cv} component={CVPage} exact/>
        </Switch>
      </main>
    </div>
  );
};


interface StateProps {
  isDrawerOpen: boolean,
}

const mapStateToProps = (state: RootState): StateProps => {
  return {
    isDrawerOpen: state.app.isDrawerOpen
  }
};

interface DispatchProps {
  closeDrawer: () => void;
}

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>): DispatchProps => ({
  closeDrawer: () => dispatch(closeDrawer())
});

export const DefaultLayout = connect(mapStateToProps, mapDispatchToProps)(_DefaultLayout);
export default DefaultLayout;
