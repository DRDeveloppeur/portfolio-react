import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useState } from "react";
import "./style.css";

const InputSelect = ({name, label, required = false}) => {
    const [value, setValue] = useState('');
    const handleChange = (e) => {
        setValue(e.target.value);
    };

    return (
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120, maxWidth: 250 }} style={{width: "100%"}}>
            <InputLabel id="demo-simple-select-standard-label">{label}</InputLabel>

            <Select value={value} required={required} name={name} onChange={(e) => handleChange(e)}>
                <MenuItem value="">
                    <em>Aucune</em>
                </MenuItem>
                <MenuItem value="Site vitrine">Site vitrine</MenuItem>
                <MenuItem value="Site e-comerce">Site e-comerce</MenuItem>
                <MenuItem value="Portfolio">Portfolio</MenuItem>
            </Select>
      </FormControl>
    );
}

export default InputSelect;