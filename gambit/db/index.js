import { all } from "./all_world_currencies";
import { sortedByRegion } from "./world_currencies_by_region";
import { withCentralBank } from "./world_currencies_with_central_banks";

const db = { all, sortedByRegion, withCentralBank };
export default db;
