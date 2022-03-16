import { Box, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import "./style.css";

const InputText = ({lastValue = false, name, label, required = false}) => {
    const [value, setValue] = useState('');
    const handleChange = (e) => {
        setValue(e.target.value);
    };
    
    useEffect(() => {
        setValue('');
        lastValue && setValue(lastValue);
    }, [lastValue])

    return (
        <Box component="div" sx={{ '& .MuiTextField-root': { m: 1, width: '80%' }, }} noValidate autoComplete="off">
            <TextField id="standard-multiline-static" name={name} required={required} label={label} multiline rows={4} variant="standard" value={value} onChange={(e) => handleChange(e)} />
        </Box>
    );
}

export default InputText;