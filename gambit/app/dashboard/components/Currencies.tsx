import React, { useEffect, useMemo, useState } from "react";
import { getLatest } from "@/app/api/forex/route";
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import Filters from "./Filters";

interface Latest {
  base: string;
  timestamp: number;
  rates: object;
  success: boolean;
}

const Currencies: React.FC = () => {
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
    <div style={{ display: "flex", flexDirection: "row", gap: "20px" }}>
      <Filters />
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
    </div>
  );
};

export default Currencies;
