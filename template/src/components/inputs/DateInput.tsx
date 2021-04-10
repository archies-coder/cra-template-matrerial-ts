import React, { ChangeEvent, FunctionComponent } from 'react';
import { createStyles, Theme } from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { KeyboardDateTimePickerProps, MuiPickersUtilsProvider, KeyboardDateTimePicker, DatePicker, KeyboardDatePickerProps } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import TextInput from "components/inputs/TextInput";
import { ExpandMore } from '@material-ui/icons';
interface OwnProps {
    value: string;
    id?: string;
    label: string;
    onChange: (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>, date: Date | null) => void;
}


const useStyles = makeStyles(() => createStyles({

}))

const DateInput: FunctionComponent<KeyboardDatePickerProps> = (props) => {
    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>

            <DatePicker
                TextFieldComponent={TextInput}
                {...props}
            />
            {/* <ExpandMore /> */}
        </MuiPickersUtilsProvider>
    );
};

export default DateInput;
