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

    console.log(data);
    const symbols = data.symbols;

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
      `https://api.forexrateapi.com/v1/yesterday?api_key=9e9138e8666d6b96edf70c91fb6a33ee&base=${baseCurr}&currencies=${currencies}`
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

/* export const findMultipleCurrencies = async () => {
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

  const formattedData = resolvedRates.map((rate) => ({
    quote: rate.quote,
    base: rate.base,
    open: rate.rate.open,
    high: rate.rate.high,
    low: rate.rate.low,
    close: rate.rate.close,
    timestamp: rate.timestamp,
  }));

  console.log(formattedData);
  return formattedData;
}; */

const allSymbols = db.withCentralBank;
const rates = db.usdExchange.rates;
const invertedQuotes = db.invertedQuotes.quotes;
const compileRatesAndRegions = async () => {
  console.log(invertedQuotes);

  const compiledData = await Promise.all(
    allSymbols.map((symbol) => {
      const invertedEntry = Object.entries(invertedQuotes).find(
        ([currency]) => currency === symbol.code
      );
      const inverted = invertedEntry
        ? { rate: invertedEntry[1], inv_rate: 1 / invertedEntry[1] }
        : { rate: 0, inv_rate: 0 };

      return {
        ...symbol,
        rate: inverted.rate,
        inv_rate: inverted.inv_rate,
      };
    })
  );

  return compiledData;
};

export const formatMapData = async () => {
  //const rates = await compileRatesAndRegions();
  const getRates = await getLatest("USD", currencies);
  console.log(getRates);

  const data: [string, string | number][] = [];

  data.push(["Country", "Value"]);

  return data;
};
