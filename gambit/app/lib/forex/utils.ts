import db from "../../../db";
/* interface Flag {
  [key: string]: string; // Adjust this based on the structure of the flag data
} */

/* interface Symbol {
  symbol: string;
  country: string;
} */

interface Latest {
  base: string;
  timestamp: number;
  rates: object;
}

/* interface Currency {
  symbol: string;
  open: number;
  high: number;
  low: number;
  close: number;
} */

/* interface Rate {
  base: string;
  rate: number;
} */

export const getAllSymbols = async (): Promise<object[]> => {
  try {
    const req = await fetch(
      `https://api.forexrateapi.com/v1/symbols?api_key=9e9138e8666d6b96edf70c91fb6a33ee`
    );
    const data = await req.json();

    if (!data || !data.symbols || data.symbols.length === 0) {
      throw new Error("No forex symbols found");
    }

    const symbols = data.symbols;
    console.log(symbols);

    return symbols;
  } catch (err) {
    console.error(err);
    throw new Error("Failed to fetch forex symbols");
  }
};

export const getLatest = async (
  baseCurr: string,
  currencies: string[]
): Promise<Latest> => {
  try {
    const req = await fetch(
      "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json"
    );
    const data = await req.json();

    return data;
  } catch (err) {
    console.error(err);
    throw new Error("Failed to fetch the latest forex data");
  }
};

/* export const getAllRates = async (): Promise<Rate[]> => {
  //THIS IS FIND BY BASE
  try {
    const req = await fetch(
      "https://api.forexrateapi.com/v1/yesterday?api_key=9e9138e8666d6b96edf70c91fb6a33ee&base=USD&currencies=EUR,JPY,INR"
    );
    const data: Record<string, number> = await req.json();
    const transformed = Object.entries(data.rates).map(([key, value]) => ({
        base: data.base,
        quote: data.quote
        rate: data.rate,
    }));

    return transformed;
  } catch (err) {
    console.error(err);
    return []; // Ensure a value is always returned
  }
}; */

//get ohlc for each currency [user]
export const findCurrenciesBySymbol = async (
  symbol: string,
  baseCurr: string
) => {
  try {
    const req = await fetch(
      `https://api.forexrateapi.com/v1/ohlc
?api_key=9e9138e8666d6b96edf70c91fb6a33ee&base=${baseCurr}
&currency=${symbol}
&date=2025-06-08`
    );

    const data = await req.json();
    console.log(data);
    const { base, quote, timestamp, rate } = data;
    const userRate = { base, quote, timestamp, rate };

    return userRate;
  } catch (err) {
    console.error(err);
    return [];
  }
};

//static list until user is able to select currencies
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

export const findMultipleCurrencies = async () => {
  const data = [];

  for (let i = 0; i < currencies.length; i++) {
    const cur = currencies[i];
    const rate = await findCurrenciesBySymbol(cur, "USD");
    data.push(rate);
  }

  const resolvedRates = data as {
    base: string;
    quote: string;
    rate: { open: number; high: number; low: number; close: number };
    timestamp: number;
  }[];

  console.log(resolvedRates[0].rate);
  const formattedData = resolvedRates.map((rate) => ({
    quote: rate.quote,
    base: rate.base,
    open: rate.rate.open,
    high: rate.rate.high,
    low: rate.rate.low,
    close: rate.rate.close,
    timestamp: rate.timestamp,
  }));
  // const
  console.log(formattedData);
  return formattedData;
};

const sortedByRegion: {
  [key: string]: {
    currency: string;
    code: string;
    symbol: string;
    country: string;
    country_code: string;
  }[];
} = db.sortedByRegion;

export const formatMapData = () => {
  const continents = Object.keys(sortedByRegion);
  const data: { id: string; value: number }[] = [];

  continents.forEach((c) =>
    sortedByRegion[c].forEach(({ country_code }) =>
      data.push({
        id: country_code,
        value: parseFloat((Math.random() * 100).toFixed(2)),
      })
    )
  );

  return data;
};
