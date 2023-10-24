import axios from "axios";

const sheet_id = "1c7veC6qjluMbPebk6yGU1WWnCBSL-APF44JlncgN5yw";

const kanto_sheet = "kanto";

const key = "AIzaSyDX3hNZ0mn8ntv70Jx5TvefG1OMiuvRyzw";

const api_URL =
  "https://sheets.googleapis.com/v4/spreadsheets/" +
  sheet_id +
  "/values/" +
  kanto_sheet +
  "?key=" +
  key;

// get events data
const eventRequest = axios.create({
  baseURL: api_URL,
});

export const getEvent = async () => {
  try {
    const res = await eventRequest.get(`${api_URL}`);

    return res.data;
  } catch (error) {
    throw error;
  }
};
