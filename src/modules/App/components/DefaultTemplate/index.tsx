import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {AnyAction} from 'redux';
import {Theme, Drawer, Hidden} from '@material-ui/core';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import routes from '../../../../variables/routes';
import {action} from '../../../../index';
import CVPage from '../../../CV';
import IndexPage from '../../../Home';
import CVDrawer from '../../../CV/components/LeftDrawer';
import {CLOSE_DRAWER} from '../../actions/leftDrawer';
import {isLeftDrawerOpen} from '../../reducers';
import DefaultDrawer from '../DefaultDrawer';
import AppBar from '../AppBar';
import styles from './styles';

// @ts-ignore
const useStyles = makeStyles(styles);

export const DefaultLayout: React.FunctionComponent = () => {
  const classes = useStyles();
  const theme: Theme = useTheme();
  const isDrawerOpen = useSelector(isLeftDrawerOpen);

  const DrawerContent = () => (
    <div className={classes.drawer}>
      <div className={classes.toolbar} />
      <Routes>
        <Route key={routes.cv} path={routes.cv} element={<CVDrawer />} />
      </Routes>
      <DefaultDrawer />
    </div>
  );

  return (
    <div className={classes.root}>
      <AppBar />
      <nav className={classes.drawer} aria-label='Page navigation'>
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        {/* @ts-ignore */}
        <Hidden smUp implementation='css'>
          <Drawer
            variant='temporary'
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={isDrawerOpen}
            onClose={(): AnyAction => action(CLOSE_DRAWER)}
            classes={{
              paper: classes.drawerPaper
            }}
            ModalProps={{
              keepMounted: true // Better open performance on mobile.
            }}
          >
            <DrawerContent />
          </Drawer>
        </Hidden>
        {/* @ts-ignore */}
        <Hidden xsDown implementation='css'>
          <Drawer
            classes={{
              paper: classes.drawerPaper
            }}
            variant='permanent'
            open
          >
            <DrawerContent />
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Routes>
          <Route
            index
            // key={routes.index}
            // path={routes.index}
            element={<IndexPage />}
          />
          <Route key={routes.cv} path={routes.cv} element={<CVPage />} />
        </Routes>
      </main>
    </div>
  );
};

export default DefaultLayout;
