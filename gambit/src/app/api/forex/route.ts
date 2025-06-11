/* interface Flag {
  [key: string]: string; // Adjust this based on the structure of the flag data
} */

/* export const getFlags = async (): Promise<Flag[]> => {
  try {
    const req = await fetch("https://flagcdn.com/en/codes.json");

    const data: Record<string, string> = await req.json();
    const transformed = Object.entries(data).map(([key, value]) => ({
      code: key,
      name: value,
      url: `https://flagcdn.com/24x18/${key}.png`,
      source: "proxied-through-nextjs",
    }));

    return transformed;
  } catch (err) {
    console.error(err);
    return []; // Return an empty array in case of an error
  }
}; */

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

export const getLatest = async (): Promise<Latest> => {
  try {
    const req = await fetch(
      "https://api.forexrateapi.com/v1/latest?api_key=9e9138e8666d6b96edf70c91fb6a33ee"
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
export const findCurrenciesBySymbol = async (symbol: string) => {
  try {
    const req = await fetch(
      `https://api.forexrateapi.com/v1/ohlc
?api_key=9e9138e8666d6b96edf70c91fb6a33ee&base=USD
&currency=${symbol}
&date=2025-06-08`
    );

    const data = await req.json();

    const { base, quote, rate } = data;
    const userRate = { base, quote, rate };

    return userRate;
  } catch (err) {
    console.error(err);
    return [];
  }
};

//until user flower is set up
const currencies = ["EUR", "CAD", "CHF"];
export const findMultipleCurrencies = async () => {
  const data = [];

  for (let i = 0; i < currencies.length; i++) {
    const cur = currencies[i];
    const rate = await findCurrenciesBySymbol(cur);
    data.push(rate);
  }

  const resolvedRates = data as {
    base: string;
    quote: string;
    rate: { open: number; high: number; low: number; close: number };
  }[];

  const formattedData = resolvedRates.map((rate) => ({
    quote: rate.quote,
    base: rate.base,
    open: Math.round(rate.rate.open * 100) / 100,
    high: Math.round(rate.rate.high * 100) / 100,
    low: Math.round(rate.rate.low * 100) / 100,
    close: Math.round(rate.rate.close * 100) / 100,
  }));
  // const
  console.log(formattedData);
  return formattedData;
};
/* 

    const multipleCurrencies = await findMultipleCurrencies();
    const resolvedRates = (await Promise.all(multipleCurrencies)) as {
      base: string;
      quote: string;
      rate: { open: number; high: number; low: number; close: number };
    }[];
    const formattedRates = resolvedRates.map((rate) => ({
      quote: rate.quote,
      base: rate.base,
      open: Math.round(rate.rate.open * 100) / 100,
      high: Math.round(rate.rate.high * 100) / 100,
      low: Math.round(rate.rate.low * 100) / 100,
      close: Math.round(rate.rate.close * 100) / 100,
    })); */
