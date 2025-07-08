import { all } from "./all_world_currencies";
import { allCodes } from "./allCodes";
import { sortedByRegion } from "./world_currencies_by_region";
import { usdExchange } from "./usd_exchange_rates";
import { withCentralBank } from "./world_currencies_with_central_banks";
import { invertedQuotes } from "./inverted_usd_quotes";

const db = {
  all,
  allCodes,
  invertedQuotes,
  sortedByRegion,
  usdExchange,
  withCentralBank,
};
export default db;
