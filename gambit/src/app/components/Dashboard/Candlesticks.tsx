import React from "react";
import ReactApexChart from "react-apexcharts";
import { Card, CardContent, Typography } from "@mui/material";

import { ApexOptions } from "apexcharts";

interface CandleStickProps {
  rates: Rate[];
}

interface Rate {
  base: string;
  quote: string;
  open: number;
  high: number;
  low: number;
  close: number;
  timestamp: number;
}
const CandleSticks: React.FC<CandleStickProps> = ({ rates }) => {
  const series = [
    {
      data: rates.map((r) => {
        const high = Math.max(r.high, r.low);
        const low = Math.min(r.high, r.low);
        return {
          x: r.quote, // Also more readable than `r.quote`
          y: [r.open, high, low, r.close],
        };
      }),
    },
  ];

  const options: ApexOptions = {
    chart: {
      type: "candlestick",
      height: 350,
    },
    title: {
      text: "Candlestick Chart Example",
      align: "left",
    },
    xaxis: {
      type: "category",
    },
    yaxis: {
      tooltip: {
        enabled: true,
      },
      logarithmic: true,
    },
  };

  return (
    <Card
      sx={{ borderRadius: 4, padding: 2, overflow: "auto", width: "100vw" }}
    >
      <CardContent>
        <Typography variant="h6">24 Hours</Typography>
        <ReactApexChart
          options={options}
          series={series}
          type="candlestick"
          height={350}
        />
      </CardContent>
    </Card>
  );
};

export default CandleSticks;
