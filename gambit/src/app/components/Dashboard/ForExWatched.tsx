"use client";
import React from "react";
import ForExLatest from "./ForExLatest";
import { BarChart } from "@mui/x-charts/BarChart";
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
//import Candlesticks from "./Candlesticks";

interface Rate {
  base: string;
  quote: string;
  open: number;
  high: number;
  low: number;
  close: number;
}

interface ForExWatchedProps {
  rates: Rate[];
}

const ForExWatched: React.FC<ForExWatchedProps> = ({ rates }) => {
  const [layout, setLayout] = React.useState<"horizontal" | "vertical">(
    "vertical"
  );

  const dataset = [
    [rates[0].open, rates[0].high, rates[0].low, rates[0].close, "First"],
    [rates[1].open, rates[1].high, rates[1].low, rates[1].close, "Second"],

    [rates[2].open, rates[2].high, rates[2].low, rates[2].close, "Third"],

    [rates[2].open, rates[2].high, rates[2].low, rates[2].close, "Fourth"],
  ].map(([open, high, low, close, order]) => ({
    open,
    high,
    low,
    close,
    order,
  }));

  const chartSettingsH: Partial<BarChartProps> = {
    dataset,
    height: 300,
    yAxis: [{ scaleType: "band", dataKey: "order" }],
    slotProps: {
      legend: {
        direction: "horizontal",
        position: { vertical: "bottom", horizontal: "center" },
      },
    },
  };

  const chartSettingsV: Partial<BarChartProps> = {
    ...chartSettingsH,
    xAxis: [{ dataKey: "order" }],
    yAxis: undefined,
  };

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
      <ForExLatest />
      {/* <Candlesticks rates={rates} /> */}
      <BarChart
        series={[
          { dataKey: "open", label: "Open", layout, stack: "stack" },
          { dataKey: "high", label: "High", layout, stack: "stack" },
          { dataKey: "low", label: "Low", layout, stack: "stack" },
          { dataKey: "close", label: "Close", layout, stack: "stack" },
        ]}
        {...(layout === "vertical" ? chartSettingsV : chartSettingsH)}
      />
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
            </TableBody>
          </Table>
        </div>
      </Card>
    </div>
  );
};

export default ForExWatched;
