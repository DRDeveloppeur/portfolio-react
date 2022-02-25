import { Box, FormControl, TextField } from "@mui/material";
import { useState } from "react";
import "./style.css";

const InputText = ({name, label, required = false}) => {
    const [value, setValue] = useState('');
    const handleChange = (e) => {
        setValue(e.target.value);
    };

    return (
        <Box component="form" sx={{ '& .MuiTextField-root': { m: 1, width: '80%' }, }} noValidate autoComplete="off">
            <TextField id="standard-multiline-static" name={name} required={required} label={label} multiline rows={4} variant="standard" value={value} onChange={(e) => handleChange(e)} />
        </Box>
    );
}

export default InputText;