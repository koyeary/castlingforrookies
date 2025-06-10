import React, { useEffect, useState } from "react";
import { getLatest } from "../../api/forex/route";
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
}

const ForExLatest: React.FC = () => {
  const [data, setData] = useState<Latest>({
    base: "",
    timestamp: 0,
    rates: {},
  });

  //const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const latestData = await getLatest();
        setData(latestData);
      } catch (err) {
        console.error(err);
        //setError(err);
      }
    };

    fetchData();
  }, []);
  /* 
  if (error) {
    return <div>{error}</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  } */

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
            Object.entries(data.rates).map(([key, value]) => (
              <TableRow key={key}>
                <TableCell>{key}</TableCell>
                <TableCell>{value}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </Card>
  );
};

export default ForExLatest;
