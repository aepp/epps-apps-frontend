import React from "react";
import {AppBar as MuiAppBar, IconButton, makeStyles, Toolbar, Typography} from "@material-ui/core";
import {Menu as MenuIcon} from "@material-ui/icons";
import styles from "./styles";

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
        <Typography variant="h6" noWrap className={classes.title}>
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
      </Toolbar>
    </MuiAppBar>
  );
};
export default AppBar;
