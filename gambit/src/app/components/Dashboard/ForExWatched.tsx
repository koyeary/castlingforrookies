"use client";
import React, { useCallback, useEffect, useState } from "react";
import ForExLatest from "./ForExLatest";
import { findMultipleCurrencies } from "@/app/api/forex/route";
import {
  Card,
  Table,
  TableHead,
  TableCell,
  TableBody,
  TableRow,
} from "@mui/material";
import CandleSticks from "./Candlesticks";

interface Rate {
  base: string;
  quote: string;
  open: number;
  high: number;
  low: number;
  close: number;
  timestamp: number;
}

const ForExWatched: React.FC = () => {
  const [rates, setRates] = useState<Rate[]>([]);

  const getLatestRates = useCallback(async () => {
    const latest = await findMultipleCurrencies();
    setRates(latest);
  }, []);

  useEffect(() => {
    getLatestRates();
  }, [getLatestRates]);

  /*   const data = rates.map((r) => {
    return {
      x: r.quote,
      y: [r.open, r.high, r.low, r.close],
    };
  }); */

  /* 
    return (
      <div /* style={{ color: "#FFF" }} >
        <Chart
          options={options}
          series={series}
          type="candlestick"
          height={350}
        />
      </div>
    ); */

  const columns = ["Currency", "Open", "High", "Low", "Close"];
  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "row",
        width: "100%",
      }}
    >
      {/*     <ForExLatest /> */}
      <CandleSticks rates={rates} />
      {/*  <Card
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
                  <TableCell>{Math.round(r.open * 100) / 100}</TableCell>
                  <TableCell>{Math.round(r.high * 100) / 100}</TableCell>
                  <TableCell>{Math.round(r.low * 100) / 100}</TableCell>
                  <TableCell>{Math.round(r.close * 100) / 100}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Card> */}
    </div>
  );
};

export default ForExWatched;
