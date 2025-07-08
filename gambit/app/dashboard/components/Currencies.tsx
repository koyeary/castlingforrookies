import React, { useEffect, useState } from "react";
import { getLatest } from "@/app/lib/forex/utils";
import Card from "@mui/material/Card";
//import Filters from "./Filters";

interface Latest {
  base: string;
  currencies: object;
}

const Currencies: React.FC = () => {
  const [data, setData] = useState<Latest>({ base: "", currencies: {} });

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
      setData({ base: "USD", currencies: latest });
      console.log("Latest data fetched:", { base: "USD", currencies: latest });
    };

    fetchData();
  }, []);

  /*   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, base: e.target.value });

    console.log(data);
  }; */

  return (
    <div style={{ display: "flex", flexDirection: "row", gap: "20px" }}>
      {/*       {data && (
        <Filters
          currencies={data.currencies}
          base={data.base}
          handleChange={handleChange}
        />
      )} */}
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
