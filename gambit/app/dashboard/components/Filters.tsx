import React, { useEffect } from "react";
import Card from "@mui/material/Card";
//import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
//import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
//import CheckBoxIcon from "@mui/icons-material/CheckBox";

interface FilterProps {
  currencies: object;
  base: string;
  handleChange: (
    event: React.SyntheticEvent<Element, Event>,
    value: string | null
  ) => void;
}

const Filters: React.FC<FilterProps> = ({ currencies, base, handleChange }) => {
  const options = Object.keys(currencies);
  /*   const filterResults = React.useMemo(
    () => options.filter((v) => v.selected),
    [options]
  ); */

  useEffect(() => {
    console.log(base);
    console.log(currencies);
  }, []);

  return (
    <Card
      sx={{
        borderRadius: 4,
        padding: 2,
        overflow: "auto",
        width: 360,
        maxHeight: "100%",
        height: "fit-content",
      }}
    >
      <h4>Select Base</h4>
      <Autocomplete
        autoHighlight
        options={options}
        value={base}
        onChange={(event, value) => handleChange(event, value)}
        getOptionLabel={(option) => option.toUpperCase()}
        renderInput={(params) => <TextField {...params} variant="outlined" />}
      />
      {/*       <h4>Select Currencies</h4>
      <Autocomplete
        multiple
        disableCloseOnSelect
        options={Object.keys(currencies)}
        getOptionLabel={(option) =>
          `${option.toUpperCase()} - ${currencies[option]}`
        }
        renderOption={(props, option, { selected }) => {
          const { key, ...optionProps } = props;
          return (
            <li {...optionProps} key={key}>
              <Checkbox
                icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                checkedIcon={<CheckBoxIcon fontSize="small" />}
                style={{ marginRight: 8 }}
                checked={selected}
              />
              {option.toUpperCase()} - {currencies[option]}
            </li>
          );
        }}
        renderInput={(params) => (
          <TextField {...params} label="Select Currencies" variant="outlined" />
        )}
      /> */}
    </Card>
  );
};

export default Filters;
