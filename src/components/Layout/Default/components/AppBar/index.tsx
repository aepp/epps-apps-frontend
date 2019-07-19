import React from "react";
import {AppBar as MuiAppBar, IconButton, makeStyles, Toolbar, Typography} from "@material-ui/core";
import {Menu as MenuIcon} from "@material-ui/icons";
import {Link} from "react-router-dom";
import styles from "./styles";
import routes from "../../../../../variables/routes";

const useStyles = makeStyles(styles);

export const AppBar: React.FunctionComponent = () => {
  const classes = useStyles();

  return (
    <MuiAppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="Open drawer"
          edge="start"
          // onClick={handleDrawerToggle}
          className={classes.menuButton}>
          <MenuIcon/>
        </IconButton>
        <Link to={routes.index} className={classes.titleLink}>
          <Typography variant="h6" noWrap className={classes.title} component={'div'}>
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
      </Toolbar>
    </MuiAppBar>
  );
};
export default AppBar;
