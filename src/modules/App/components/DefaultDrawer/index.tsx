import React from 'react';
import {AnyAction} from 'redux';
import {useSelector} from 'react-redux';
import {
  Radio,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel
} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import {DesignSchemeIdType} from '../../../../theme';
import {DESIGN_SCHEME_ID_DEFAULT} from '../../../../theme/default';
import {DESIGN_SCHEME_ID_RETRO} from '../../../../theme/retro';
import {action} from '../../../../index';
import {CHANGE_DESIGN} from '../../actions/app';
import {getCurrentDesignSchemeId} from '../../reducers';
import styles from './styles';

const useStyles = makeStyles(styles);

export const DefaultDrawer: React.FunctionComponent = () => {
  const classes = useStyles();

  const designSchemeId = useSelector(getCurrentDesignSchemeId);

  return (
    <>
      <FormControl
        component={'fieldset'}
        className={classes.changeDesignFormControl}
      >
        <FormLabel
          component={'legend'}
          className={classes.changeDesignFormControlLabel}
        >
          {'Select Theme'}
        </FormLabel>
        <RadioGroup
          aria-label='Theme'
          name='design-theme'
          className={classes.changeDesignRadioGroup}
          value={designSchemeId}
          onChange={(e, value): AnyAction =>
            action(CHANGE_DESIGN, {designSchemeId: value as DesignSchemeIdType})
          }
        >
          <FormControlLabel
            value={DESIGN_SCHEME_ID_DEFAULT}
            control={<Radio color={'primary'} />}
            label={DESIGN_SCHEME_ID_DEFAULT}
          />
          <FormControlLabel
            value={DESIGN_SCHEME_ID_RETRO}
            control={<Radio color={'primary'} />}
            label={DESIGN_SCHEME_ID_RETRO}
          />
        </RadioGroup>
      </FormControl>
    </>
  );
};

export default DefaultDrawer;
