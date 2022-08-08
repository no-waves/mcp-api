import {
  get_characters,
  get_chars_by_affil,
  get_affiliations,
} from "./mcp_api.js";

let x = await get_characters();

for (let i = 0; i < x.length; i++) {
  console.log(x[i].full_name);
}
