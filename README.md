# setup

*   install dependencies
    *   `npm install axios dotenv`
*   make sure the api address and key are stored in `.env` in your project's root directory
*   make sure `mcp_api.js` is stored in your project directory
*   import the functions

        import {
          get_characters,
          get_chars_by_affil,
          get_affiliations,
        } from "./mcp_api.js";

see test.js for an exmple of calling the api and working with the response
