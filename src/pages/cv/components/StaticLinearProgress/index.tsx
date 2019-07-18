import React from "react";
import {makeStyles, Theme, Typography} from "@material-ui/core";
import {lighten} from "@material-ui/core/styles";
import {Color} from "csstype";
import styles from "./styles";
import {useTheme} from "@material-ui/styles";

const useStyles = makeStyles(styles);

interface ClassesTypes {
  root?: string;
  progress?: string;
}

type ProgressColorTypes = 'primary' | 'secondary' | Color;

interface Props {
  value: number;
  label?: string;
  max: number;
  height?: number;
  color?: ProgressColorTypes;
  backgroundColor?: ProgressColorTypes;
  className?: string;
  classes?: ClassesTypes
}

export const StaticLinearProgress: React.FunctionComponent<Props> & { defaultProps: Partial<Props> } = props => {
  const ownClasses = useStyles();
  const theme: Theme = useTheme();

  const {max, value, backgroundColor, color, height, className, classes, label} = props;
  const percentageValue = value / max * 100;

  const defaultColor = theme.palette.primary.main;
  const progressColor = color === 'secondary' || color === 'primary' ? theme.palette[color].main : color;
  const defaultHeight = theme.spacing(.5);

  const heightStyle = label ? {height: height || 20} : {height: height || defaultHeight};
  const labelColorStyle = percentageValue < 50 ? {color: theme.palette.grey[700]} : {};
  return (
    <div
      className={`${ownClasses.root} ${className ? className : ''} ${classes && classes.root ? classes.root : ''}`}
      style={{
        backgroundColor: backgroundColor || lighten(progressColor || defaultColor, .7),
        ...heightStyle
      }}>
      {label && (
        <div className={ownClasses.labelContainer}>
          <Typography className={ownClasses.label} style={{...labelColorStyle}}>{label}</Typography>
        </div>
      )}
      <div
        className={`${ownClasses.progress} ${classes && classes.progress ? classes.progress : ''}`}
        style={{
          width: `${percentageValue}%`,
          backgroundColor: progressColor || defaultColor,
          ...heightStyle
        }}/>
    </div>
  );
};

StaticLinearProgress.defaultProps = {
  max: 100
};
export default StaticLinearProgress;
