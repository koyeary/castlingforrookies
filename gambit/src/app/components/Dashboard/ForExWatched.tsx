"use client";
import React, { useEffect } from "react";
import {
  /* getFlags, getAllSymbols, */
  findMultipleCurrencies,
  /*   findCurrenciesBySymbol,
  getAllRates, */
} from "@/app/api/forex/route";
import ForExLatest from "./ForExLatest";
//import Image from "next/image";
import {
  // Button,
  //ButtonGroup,
  /*   FormControl,
  InputLabel,
  MenuItem, */
  Card,
  Table,
  TableHead,
  TableCell,
  TableBody,
  TableRow,
  //TextField,
  // TableSortLabel,
  //Select,
} from "@mui/material";
//import { LineChart } from "@mui/x-charts/LineChart";
import Candlesticks from "./Candlesticks";

const ForExWatched: React.FC = () => {
  const columns = ["Currency", "Open", "High", "Low", "Close"];
  /*   interface Flag {
    name: string;
    code?: string;
    url: string;
    symbol?: string;
    rate?: number;
    timestamp?: string;
  } */

  /*   interface Symbol {
    symbol: string;
    country: string;
  }
 */
  /*   interface Currency {
    quote: string;
    base: string;
    open: number;
    high: number;
    low: number;
    close: number;
  } */

  /*   interface Rate {
    symbol: string;
    rate: number;
  } */
  //const [flags, setFlags] = React.useState<Flag[]>([]);
  /*   const [symbols, setSymbols] = React.useState<Symbol[]>([]);
  const [myRates, setMyRates] = React.useState<Currency[]>([]); */
  interface Rates {
    quote: string;
    base: string;
    open: number;
    high: number;
    low: number;
    close: number;
  }

  const [rates, setRates] = React.useState<Rates[]>([]);
  /*   useEffect(() => {
    const fetchFlags = async () => {
      const transformed = await getFlags();
      const formattedFlags: Flag[] = transformed.map((item) => ({
        name: item?.name || "Unknown",
        symbol: item?.symbol,
        url: item?.url,
        rate: item?.rate ? parseFloat(item.rate) : undefined,
        timestamp: item?.timestamp,
      }));
      setFlags(formattedFlags);
    };
    fetchFlags();
  }, []); */

  useEffect(() => {
    //fetchSymbols();
    // fetchUserRates(["USD", "EUR"]);
    fetchRates();
  }, []);

  const fetchRates = async () => {
    const latestRates = await findMultipleCurrencies();
    setRates(latestRates);
  };

  /*   const fetchUserRates = async (userRates: string[]) => {
    const rates = await findCurrenciesBySymbol(userRates);
    const formattedRates: Currency[] = rates.map((r) => ({
      symbol: r?.symbol,
      rate: r?.rate,
    }));
    setMyRates(formattedRates);
  }; */

  /*  const fetchSymbols = async () => {
    const symbols = await getAllSymbols();
    const formattedSymbols: Symbol[] = symbols.map((s) => ({
      symbol: s?.symbol,
      country: s?.country,
    }));
    setSymbols(formattedSymbols);
  }; */

  const margin = { right: 24 };
  const xLabels = ["Open", "High", "Low", "Close"];

  /*   const SimpleLineChart = () => {
    console.log(rates);

    const formattedData = rates.map((rate) => ({
      data: [rate.open, rate.high, rate.low, rate.close],
      label: rate.quote,
    }));
    return (
      <LineChart
        height={300}
        series={formattedData}
        xAxis={[{ scaleType: "point", data: xLabels }]}
        yAxis={[{ width: 50 }]}
        margin={margin}
      />
    );
  }; */

  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "row",
        width: "100%",
      }}
    >
      <ForExLatest />
      <Candlesticks rates={rates} />
      {/*  <SimpleLineChart /> */}
      <Card
        raised
        style={{ width: "fit-content", height: 400, maxHeight: "fit-content" }}
        sx={{
          borderRadius: 4,
          padding: 2,
          overflow: "auto",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Table
            aria-label="Currencies and ForEx Positions"
            size="small"
            stickyHeader
          >
            <TableHead>
              {/* <TableRow>
              <TableCell>My Positions</TableCell>
              <TableCell>
                <TextField
                  sx={{ minWidth: 300, m: 1 }}
                  id="outlined-basic"
                  label="Search by Country or Currency"
                  variant="outlined"
                />
              </TableCell>
              <TableCell>
                <FormControl sx={{ m: 1, minWidth: 240 }}>
                  <InputLabel id="sort-items">Sort items</InputLabel>
                  <Select
                    labelId="Sort items"
                    id="select-sort"
                    value={10}
                    label="Sort items"
                    onChange={() => {}}
                  >
                    <MenuItem value={10}>A-Z</MenuItem>
                    <MenuItem value={20}>Z-A</MenuItem>
                    <MenuItem value={30}>low-high</MenuItem>
                    <MenuItem value={30}>high-low</MenuItem>
                  </Select>
                </FormControl>
              </TableCell>
            </TableRow> */}
              <TableRow>
                {columns.map((c) => (
                  <TableCell key={c}>{c}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rates.map((r) => (
                <TableRow key={r.quote}>
                  <TableCell>{r.quote}</TableCell>
                  <TableCell>{r.open}</TableCell>
                  <TableCell>{r.high}</TableCell>
                  <TableCell>{r.low}</TableCell>
                  <TableCell>{r.close}</TableCell>
                </TableRow>
              ))}
              {/*}  {symbols.map((curr, index) => (
              <TableRow key={index}>
                <TableCell>
                  <Image
                    style={{ marginRight: 10 }}
                    width={24}
                    height={18}
                    src={c.url}
                    alt={`${c.name} flag`}
                  />
                </TableCell>
                <TableCell style={{ color: "#FFF" }}>{curr.symbol}</TableCell>
                <TableCell>
                  {myRates.find((rate) => rate.symbol === curr.symbol)?.rate ||
                    "N/A"}
                </TableCell>
                <TableCell style={{ color: "#FFF" }}>{c.rate}</TableCell>
                <TableCell style={{ color: "#FFF" }}>{c.timestamp}</TableCell>
              </TableRow>
            ))} */}
            </TableBody>
          </Table>{" "}
        </div>
      </Card>
    </div>
  );
};

export default ForExWatched;
