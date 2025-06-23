import React, { useEffect, useState } from "react";
import { getLatest } from "@/app/api/forex/route";
import Card from "@mui/material/Card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";

interface Latest {
  base: string;
  timestamp: number;
  rates: object;
  success: boolean;
}

const Currencies: React.FC = () => {
  const [data, setData] = useState<Latest>({
    base: "",
    timestamp: 0,
    rates: {},
    success: false,
  });

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

  useEffect(() => {
    getLatest("USD", currencies)
      .then((latestData) => {
        setData(latestData);
        console.log("Latest data fetched:", latestData);
        if (latestData.success === false) {
          console.error("Error fetching latest data:");
          setData({
            base: "USD",
            timestamp: 0,
            rates: {},
            success: true,
          });
        }
      })
      .catch((err) => {
        console.error("Error fetching latest data:", err);
      });
  }, []);

  return (
    <Card
      sx={{
        borderRadius: 4,
        padding: 2,
        overflow: "auto",
        width: "fit-content",
        maxHeight: "100%",
        height: "fit-content",
      }}
    >
      <h3>Latest</h3>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Symbol</TableCell>
            <TableCell>Rate</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data &&
            Object.entries(data.rates).map(([symbol, rate]) => (
              <TableRow key={symbol}>
                <TableCell>{symbol}</TableCell>
                <TableCell>{rate}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </Card>
  );
};

export default Currencies;
