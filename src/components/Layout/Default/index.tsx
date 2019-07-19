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

const useStyles = makeStyles(styles);

export const DefaultLayout: React.FunctionComponent = () => {
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
            // open={mobileOpen}
            open={false}
            // onClose={handleDrawerToggle}
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

export default DefaultLayout;
