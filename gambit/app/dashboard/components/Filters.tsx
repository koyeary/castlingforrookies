import React, { useEffect, useState } from "react";
import { getLatest } from "@/app/api/forex/route";
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

const Filters: React.FC = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    const currencies = [
      "EUR",
      "CAD",
      "CHF",
      "GBP",
      "JPY",
      "AUD",
      "NZD",
      "CNY",
      "INR",
      "ZAR",
    ];

    const fetchData = async () => {
      const latest = await getLatest("USD", currencies);
      setData(latest);
      console.log("Latest data fetched:", latest);
    };

    fetchData();
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
        options={Object.keys(data)}
        getOptionLabel={(option) => `${option.toUpperCase()} - ${data[option]}`}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Select Base Currency"
            variant="outlined"
          />
        )}
      />
      <h4>Select Currencies</h4>
      <Autocomplete
        multiple
        disableCloseOnSelect
        options={Object.keys(data)}
        getOptionLabel={(option) => `${option.toUpperCase()} - ${data[option]}`}
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
              {option.toUpperCase()} - {data[option]}
            </li>
          );
        }}
        renderInput={(params) => (
          <TextField {...params} label="Select Currencies" variant="outlined" />
        )}
      />
      {/*       <Table>
        <TableHead>
          <TableRow>
            <TableCell>Symbol</TableCell>
            <TableCell>Rate</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data &&
            Object.entries(data).map(([key, value]) => (
              <TableRow key={key}>
                <TableCell>{key.toUpperCase()}</TableCell>
                <TableCell>{value}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table> */}
    </Card>
  );
};

export default Filters;
