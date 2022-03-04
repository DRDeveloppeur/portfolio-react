import { useState } from "react";
import TextField from '@mui/material/TextField';
import "./style.css";
import { Stack } from "@mui/material";
import frLocale from 'date-fns/locale/fr';
import { LocalizationProvider, MobileDatePicker } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";

const InputDate = ({name, label, required = false}) => {
    const [value, setValue] = useState(new Date());

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns} locale={frLocale}>
            <Stack spacing={1}>
                <MobileDatePicker
                    label={label}
                    name={name}
                    inputFormat="dd/MM/yyyy"
                    value={value}
                    onChange={newValue => setValue(newValue)}
                    renderInput={(params) => <TextField name={name} {...params} />}
                />
            </Stack>
       </LocalizationProvider>
    );
}

export default InputDate;