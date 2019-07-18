import React, {ChangeEvent} from "react";
import {connect} from 'react-redux';
import {ThunkDispatch} from "redux-thunk";
import {
  Theme,
  Button,
  Radio,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel
} from "@material-ui/core";
import {CloudDownloadOutlined as DownloadIcon} from "@material-ui/icons";
import {makeStyles, useTheme} from '@material-ui/core/styles';
import styles from "./styles";
import {changeDesign, downloadCV} from "../../../../../actions/cv";
import {RootState} from "../../../../../reducers";
import {DESIGN_SCHEME_ID_DEFAULT, DESIGN_SCHEME_ID_RETRO, DesignSchemeIdType} from "../../../../../design";

const useStyles = makeStyles(styles);

const _CVDrawer: React.FunctionComponent<StateProps & DispatchProps> = props => {
  const classes = useStyles();
  const theme: Theme = useTheme();

  return (
    <>
      <Button
        variant={"contained"}
        onClick={props.downloadCV}
        disabled={props.isDownloading}
        color={"primary"}
        fullWidth>
        <DownloadIcon/>&nbsp;{'Download CV'}
      </Button>
      <FormControl component={'fieldset'} className={classes.changeDesignFormControl}>
        <FormLabel component={'legend'} className={classes.changeDesignFormControlLabel}>{'Select CV Theme'}</FormLabel>
        <RadioGroup
          aria-label="Theme"
          name="design-theme"
          className={classes.changeDesignRadioGroup}
          value={props.designSchemeId}
          onChange={(e: ChangeEvent<{}>, value: string) => props.changeDesign(value as DesignSchemeIdType)}>
          <FormControlLabel value={DESIGN_SCHEME_ID_DEFAULT} control={<Radio color={"primary"}/>} label={DESIGN_SCHEME_ID_DEFAULT}/>
          <FormControlLabel value={DESIGN_SCHEME_ID_RETRO} control={<Radio color={"primary"}/>} label={DESIGN_SCHEME_ID_RETRO}/>
        </RadioGroup>
      </FormControl>
    </>
  );

};

interface StateProps {
  isDownloading: boolean,
  designSchemeId: DesignSchemeIdType,
}

const mapStateToProps = (states: RootState): StateProps => {
  return {
    isDownloading: states.cv.isDownloading,
    designSchemeId: states.cv.designSchemeId
  }
};

interface DispatchProps {
  downloadCV: () => void;
  changeDesign: (designSchemeId: DesignSchemeIdType) => void;
}

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>): DispatchProps => ({
  downloadCV: () => dispatch(downloadCV()),
  changeDesign: designSchemeId => dispatch(changeDesign(designSchemeId))
});

export const CVDrawer = connect(mapStateToProps, mapDispatchToProps)(_CVDrawer);
export default CVDrawer;
