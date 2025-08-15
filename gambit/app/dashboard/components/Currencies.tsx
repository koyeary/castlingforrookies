import React, { useEffect, useRef, useState } from "react";
//import { getLatest } from "@/app/lib/forex/utils";
import Card from "@mui/material/Card";
import Draggable from "react-draggable";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import data from "@/app/lib/forex/allWorldCurrencies.json"; // Assuming you have a local JSON file with currency data
import { Tooltip } from "@mui/material";
//import Filters from "./Filters";
/* 
interface Latest {
  base: string;
  currencies: object;
} */

const Currencies: React.FC = () => {
  //const [data, setData] = useState<Latest>({ base: "", currencies: {} });
  const nodeRef = useRef<HTMLDivElement>(null);
  /* 
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
    ]; */

  /*     const fetchData = async () => {
      const latest = await getLatest("USD", currencies);
      setData({ base: "USD", currencies: latest });
      console.log("Latest data fetched:", { base: "USD", currencies: latest });
    };

    fetchData();
  }, []); */

  /*   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, base: e.target.value });

    console.log(data);
  }; */

  return (
    <Draggable
      nodeRef={nodeRef}
      defaultPosition={{ x: 25, y: 25 }}
      grid={[25, 25]}
      scale={1}
    >
      <Card
        ref={nodeRef}
        sx={{
          borderRadius: 4,
          //padding: 2,
          overflow: "auto",
          width: 300,
          height: "80vh",
          cursor: "grab",
          "&:active": { cursor: "grabbing" },
        }}
      >
        <Table size="small" stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell variant="head">Symbol</TableCell>
              <TableCell variant="head">Rate</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Object.entries(data).map(([key, value]) => (
              <TableRow key={key}>
                <Tooltip title={value} placement="right">
                  <TableCell>{key.toUpperCase()}</TableCell>
                </Tooltip>
                <TableCell>money</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </Draggable>
  );
};

export default Currencies;
