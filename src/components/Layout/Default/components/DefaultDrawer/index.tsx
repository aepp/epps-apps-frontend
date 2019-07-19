import React, {ChangeEvent} from "react";
import {connect} from 'react-redux';
import {ThunkDispatch} from "redux-thunk";
import {
  Radio,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel
} from "@material-ui/core";
import {makeStyles} from '@material-ui/core/styles';
import styles from "./styles";
import {changeDesign} from "../../../../../actions/cv";
import {RootState} from "../../../../../reducers";
import {DESIGN_SCHEME_ID_DEFAULT, DESIGN_SCHEME_ID_RETRO, DesignSchemeIdType} from "../../../../../design";

const useStyles = makeStyles(styles);

const _DefaultDrawer: React.FunctionComponent<StateProps & DispatchProps> = props => {
  const classes = useStyles();

  return (
    <>
      <FormControl component={'fieldset'} className={classes.changeDesignFormControl}>
        <FormLabel component={'legend'} className={classes.changeDesignFormControlLabel}>
          {'Select Theme'}
        </FormLabel>
        <RadioGroup
          aria-label="Theme"
          name="design-theme"
          className={classes.changeDesignRadioGroup}
          value={props.designSchemeId}
          onChange={(e: ChangeEvent<{}>, value: string) => props.changeDesign(value as DesignSchemeIdType)}>
          <FormControlLabel
            value={DESIGN_SCHEME_ID_DEFAULT}
            control={<Radio color={"primary"}/>}
            label={DESIGN_SCHEME_ID_DEFAULT}/>
          <FormControlLabel
            value={DESIGN_SCHEME_ID_RETRO}
            control={<Radio color={"primary"}/>}
            label={DESIGN_SCHEME_ID_RETRO}/>
        </RadioGroup>
      </FormControl>
    </>
  );
};

interface StateProps {
  designSchemeId: DesignSchemeIdType,
}

const mapStateToProps = (states: RootState): StateProps => {
  return {
    designSchemeId: states.cv.designSchemeId
  }
};

interface DispatchProps {
  changeDesign: (designSchemeId: DesignSchemeIdType) => void;
}

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>): DispatchProps => ({
  changeDesign: designSchemeId => dispatch(changeDesign(designSchemeId))
});

export const DefaultDrawer = connect(mapStateToProps, mapDispatchToProps)(_DefaultDrawer);
export default DefaultDrawer;
