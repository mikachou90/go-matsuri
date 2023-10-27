const sheet_id = "1c7veC6qjluMbPebk6yGU1WWnCBSL-APF44JlncgN5yw";
const kanto_sheet = "kanto";
const key = process.env.GOOGLE_API_KEY;
const api_URL =
  "https://sheets.googleapis.com/v4/spreadsheets/" +
  sheet_id +
  "/values/" +
  kanto_sheet +
  "?key=" +
  key;

const formatData = (data) => {
  const rawArray = data.values;
  const keys = rawArray[0];

  const arrayData = rawArray.slice(1);
  const newArray = [];

  arrayData.forEach((row, i) => {
    const newObject = {};
    row.forEach((column, cIndex) => {
      newObject[keys[cIndex]] = column;
    });
    newArray.push(newObject);
  });

  return newArray;
};

// get events data
export const getEvents = async () => {
  try {
    const res = await fetch(api_URL, { next: { revalidate: 3600 } });
    const data = await res.json();

    return formatData(data);
  } catch (error) {
    console.error(error);
    throw error;
  }
};
