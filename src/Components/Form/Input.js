import { FormControl, TextField } from "@mui/material";
import { useState } from "react";
import "./style.css";

const Input = ({type, name, label, required = false}) => {
    const [value, setValue] = useState('');
    const handleChange = (e) => {
        setValue(e.target.value);
    };

    return (
        <FormControl variant="standard" style={{width: "100%", maxWidth: 250, marginTop: 8}}>
            <TextField variant="standard" type={type} label={label} required={required} name={name} fullWidth value={value} onChange={(e) => handleChange(e)} />
        </FormControl>
    );
}

export default Input;