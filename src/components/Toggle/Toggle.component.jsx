import React, { useState } from 'react';
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const Toggle = ({ changeHandler, isChecked }) => {
  const [checked, setChecked] = useState(isChecked);
  const toggleChecked = () => {
    setChecked((prev) => !prev);
    changeHandler();
  };
  return (
    <FormGroup>
      <FormControlLabel
        role="switch"
        control={<Switch checked={checked} onChange={toggleChecked} />}
        label={checked ? 'Oscuro' : 'Claro'}
      />
    </FormGroup>
  );
};

export default Toggle;
