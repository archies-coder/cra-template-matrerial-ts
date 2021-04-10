import { Checkbox, FormControlLabel } from "@material-ui/core";
import React, { ChangeEvent, FunctionComponent } from "react";

type CheckBoxProps = {
    isChecked: boolean,
    handleChange: (event: ChangeEvent<HTMLInputElement>, checked: boolean) => void,
    title: string
}

export const CheckBox: FunctionComponent<CheckBoxProps> = ({isChecked, handleChange, title}) =>
<FormControlLabel
    // @ts-ignore
        control={<Checkbox checked={isChecked} onChange={handleChange} name={title}/>}
    label={title}
/>