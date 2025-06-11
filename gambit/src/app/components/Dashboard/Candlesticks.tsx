import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

interface Data {
  base: string;
  quote: string;
  open: number;
  high: number;
  close: number;
  low: number;
}

interface CandlesticksProps {
  rates: Data[];
}

export default function Candlesticks({ rates }: CandlesticksProps) {
  const [layout, setLayout] = React.useState<"horizontal" | "vertical">(
    "vertical"
  );
  const [series, setSeries] = React.useState<object[]>([]);
  const [dataset, setDataset] = React.useState<
    { open: number; high: number; low: number; close: number; quote: string }[]
  >([]);
  /* 
const dataset = [
  [3, -7, 'First'],
  [0, -5, 'Second'],
  [10, 0, 'Third'],
  [9, 6, 'Fourth'],
].map(([high, low, order]) => ({
  high,
  low,
  order,
})); */

  const formatSeries = () => {
    const arr = Object.values(rates).map((r) => [
      ...series,
      { dataKey: r.quote, label: r.quote, layout, stack: "stack" },
    ]);
    setSeries(arr);

    console.log(rates);
  };

  const formatDataSet = () => {
    setDataset(Object.values(rates));
    console.log(Object.values(rates));
  };

  React.useEffect(() => {
    formatSeries();
    formatDataSet();
  }, []);

  return (
    <Stack direction="column" spacing={1} sx={{ width: "100%", maxWidth: 600 }}>
      <Stack direction="row" spacing={4}>
        <TextField
          select
          sx={{ minWidth: 150 }}
          label="layout"
          value={layout}
          onChange={(event) =>
            setLayout(event.target.value as "horizontal" | "vertical")
          }
        >
          <MenuItem value="horizontal">Horizontal</MenuItem>
          <MenuItem value="vertical">Vertical</MenuItem>
        </TextField>
      </Stack>
      <BarChart
        series={series}
        dataset={dataset}
        /*         {...(layout === "vertical"
          ? chartSettingsV(dataset)
          : chartSettingsH(dataset))} */
      />
    </Stack>
  );
}

/* const chartSettingsH: Partial<BarChartProps> = ({
  dataset,
  height: 300,
  yAxis: [{ scaleType: 'band', dataKey: 'order' }],
  slotProps: {
    legend: {
      direction: 'horizontal',
      position: { vertical: 'bottom', horizontal: 'center' },
    },
  },
}); */
/* const chartSettingsV: Partial<BarChartProps> = ({
  ...chartSettingsH(dataset),
  xAxis: [{ dataKey: "order" }],
  yAxis: undefined,
}); */
