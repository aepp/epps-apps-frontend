import React from "react";
import {makeStyles, Theme} from "@material-ui/core";
import {lighten} from "@material-ui/core/styles";
import {Color} from "csstype";
import styles from "./styles";
import {useTheme} from "@material-ui/styles";

const useStyles = makeStyles(styles);

interface ClassesTypes {
  root?: string;
  progress?: string;
}

interface Props {
  value: number;
  max: number;
  height?: number;
  color?: 'primary' | 'secondary' | Color;
  backgroundColor?: Color;
  className?: string;
  classes?: ClassesTypes
}

export const StaticLinearProgress: React.FunctionComponent<Props> & { defaultProps: Partial<Props> } = props => {
  const ownClasses = useStyles();
  const theme: Theme = useTheme();

  const {max, value, backgroundColor, color, height, className, classes} = props;

  const defaultColor = theme.palette.primary.main;
  const progressColor = color === 'secondary' || color === 'primary' ? theme.palette[color].main : color;
  const defaultHeight = theme.spacing(.5);

  return (
    <div
      className={`${ownClasses.root} ${className ? className : ''} ${classes && classes.root ? classes.root : ''}`}
      style={{
        backgroundColor: backgroundColor || lighten(progressColor || defaultColor, .7),
        height: height || defaultHeight
      }}>
      <div
        className={`${ownClasses.progress} ${classes && classes.progress ? classes.progress : ''}`}
        style={{
          width: `${value / max * 100}%`,
          backgroundColor: progressColor || defaultColor,
          height: height || defaultHeight
        }}/>
    </div>
  );
};

StaticLinearProgress.defaultProps = {
  max: 100
};
export default StaticLinearProgress;
