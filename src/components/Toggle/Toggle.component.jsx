import React, { useState } from 'react';
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const Toggle = () => {
    const [checked, setChecked] = useState(false);

    const toggleChecked = () => {
        setChecked((prev) => !prev);
    };

    return(
        <FormGroup>
        <FormControlLabel
          control={<Switch checked={checked} onChange={toggleChecked} />}
          label={checked ? 'Oscuro' : 'Claro'}
        />
      </FormGroup>
    );
}


export default Toggle;