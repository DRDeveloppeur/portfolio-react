import { useState } from "react";
import TextField from '@mui/material/TextField';
import "./style.css";
import { Stack } from "@mui/material";
import { DesktopDatePicker, LocalizationProvider, MobileDatePicker } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";

const InputDate = ({name, label, required = false}) => {
    const [value, setValue] = useState(new Date());

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Stack spacing={1}>
                <MobileDatePicker
                    label={label}
                    name={name}
                    inputFormat="MM/dd/yyyy"
                    value={value}
                    onChange={newValue => setValue(newValue)}
                    renderInput={(params) => <TextField name={name} {...params} />}
                />
            </Stack>
       </LocalizationProvider>
    );
}

export default InputDate;