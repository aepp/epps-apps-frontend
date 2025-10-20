import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  MailOutline as MailIcon,
  PhoneOutlined as PhoneIcon
} from "@material-ui/icons";
import { Grid, Typography, useTheme } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStackOverflow, faGithubAlt } from "@fortawesome/free-brands-svg-icons";
import styles from "./styles";

const useStyles = makeStyles(styles);

export default function Abstract() {
  const classes = useStyles();
  const theme = useTheme();

  const svgIconProps = {
    width: 20,
    height: 20,
    className: classes.contactIcon,
    style: {
      fill: theme.designScheme.contactItem.icon.fill
    }
  };
  return (
    <div className={classes.root}>
      <Grid item container spacing={2}>
        <Grid item xs={12} className={classes.avatarContainer}>
          <div className={classes.avatar}/>
        </Grid>
        <Grid item xs={12} className={classes.nameAndJob}>
          <Typography variant={"h4"} className={classes.name}>
            {"Aleksandr Epp"}
          </Typography>
          <div className={classes.about}>
            <Typography>Software Developer (Fullstack, UX)</Typography>
          </div>
        </Grid>
        <Grid item xs={12} lg={7} className={classes.contactContainer}>
          <div className={classes.contactIconContainer}>
            <MailIcon {...svgIconProps} />
          </div>
          <Typography className={classes.contactLabelContainer}>
            <a
              href={"mailto:info@epps-apps.com"}
              className={classes.contactLabel}
            >
              {"info@epps-apps.com"}
            </a>
          </Typography>
        </Grid>
        <Grid item xs={12} lg={5} className={classes.contactContainer}>
          <div className={classes.contactIconContainer}>
            <FontAwesomeIcon
              icon={faGithubAlt}
              {...svgIconProps}
              color={theme.designScheme.contactItem.icon.fill}
            />
          </div>
          <Typography className={classes.contactLabelContainer}>
            <a
              target={"_blank"}
              href={"https://github.com/aepp"}
              className={classes.contactLabel}
            >
              {"aepp"}
            </a>
          </Typography>
        </Grid>
        <Grid item xs={12} lg={7} className={classes.contactContainer}>
          <div className={classes.contactIconContainer}>
            <PhoneIcon {...svgIconProps} />
          </div>
          <Typography className={classes.contactLabelContainer}>
            <a href={"tel:+491727026981"} className={classes.contactLabel}>
              {"+49 172 702 698 1"}
            </a>
          </Typography>
        </Grid>
        <Grid item xs={12} lg={5} className={classes.contactContainer}>
          <div className={classes.contactIconContainer}>
            <FontAwesomeIcon
              icon={faStackOverflow}
              {...svgIconProps}
              color={theme.designScheme.contactItem.icon.fill}
            />
          </div>
          <Typography className={classes.contactLabelContainer}>
            <a
              target={"_blank"}
              href={"https://stackoverflow.com/users/3382598/aleksandr-epp"}
              className={classes.contactLabel}
            >
              {"aleksandr-epp"}
            </a>
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}
