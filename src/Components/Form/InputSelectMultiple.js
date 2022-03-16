import { FormControl, MenuItem, Select } from "@mui/material";
import { useTheme } from "@mui/system";
import { useEffect, useState } from "react";
import "./style.css";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
        },
    },
};

function getStyles(name, personName, theme) {
    return {
      fontWeight:
        personName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
}

const InputSelectMultiple = ({lastValue = false, names = [], name, label, required = false}) => {
    const [value, setValue] = useState([]);
    const theme = useTheme();
    
    const handleChange = (event) => {
        const { target: { value: val } } = event;
        setValue(typeof val === 'string' ? val.split(', ') : val);
    };
    
    useEffect(() => {
        setValue([]);
        lastValue && setValue(typeof lastValue === 'string' ? lastValue.split(',') : lastValue);
    }, [lastValue])

    return (
        <FormControl sx={{ maxWidth: 250, m: 1, mt: 3 }} style={{width: "100%"}} variant="standard">
            <Select multiple displayEmpty value={value} name={name} onChange={(e) => handleChange(e)} required={required} renderValue={(selected) => {if  (selected.length === 0) {return <em>Vide</em>;}return (selected.join(', '));}} MenuProps={MenuProps} label={label}>
                <MenuItem disabled value=""><em>{label}</em></MenuItem>

                {names.map((name, key) => (
                    <MenuItem key={key} value={name} style={getStyles(name, value, theme)}>
                        {name}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
}

export default InputSelectMultiple;