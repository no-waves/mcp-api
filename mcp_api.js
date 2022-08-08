import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const API_KEY = process.env.api_key;
const API_ADDRESS = process.env.api_address;
const CONFIG = {
  headers: {
    "x-api-key": API_KEY,
  },
};

const CHAR_ENDPOINT = API_ADDRESS + "characters/";
const AFFIL_ENDPOINT = API_ADDRESS + "affiliations/";
const CHAR_BY_AFFIL_ENDPOINT = API_ADDRESS + "charsbyaffil/";

export async function get_characters() {
  let result = await axios.get(CHAR_ENDPOINT, CONFIG);
  return result.data;
}

export async function get_affiliations() {
  let result = await axios.get(AFFIL_ENDPOINT, CONFIG);
  return result.data;
}

/**
 *
 * @param {string} affiliationid
 */
export async function get_chars_by_affil(affiliationid) {
  let result = await axios.get(
    CHAR_BY_AFFIL_ENDPOINT + `${affiliationid}`,
    CONFIG
  );
  return result.data;
}
