import React, { useState } from 'react';
import MomentUtils from '@date-io/moment';
import {TimePicker, MuiPickersUtilsProvider} from '@material-ui/pickers';

function BasicTimePicker() {
  const [selectedDate, handleDateChange] = useState(new Date());

  return (
    <MuiPickersUtilsProvider
        utils={MomentUtils}
    >
        <TimePicker
            inputVariant="outlined"
            fullWidth
            label="Time to perform task"
            value={selectedDate}
            onChange={handleDateChange}
        />
    </MuiPickersUtilsProvider>
  );
}

export default BasicTimePicker;
