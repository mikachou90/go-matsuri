const api_URL =
  "https://script.google.com/macros/s/AKfycbz_E5PykIhCV1EIPqDNKiUTxM4y2G6Ba03kKdTXHyETYzWDKxrW7zGatB3eMFHsn-5KOA/exec";

const formatData = (data) => {
  const rawArray = data;
  const keys = rawArray[0];

  const arrayData = Array.isArray(rawArray) ? rawArray.slice(1) : [];
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
export const doGet = async () => {
  try {
    // const res = await fetch(api_URL, { next: { revalidate: 1800 } });
    const res = await fetch(api_URL, { cache: "no-store" });
    const data = await res.json();

    return formatData(data);
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// get event detail
export const doGetDetail = async (id) => {
  try {
    // const res = await fetch(api_URL, { next: { revalidate: 3600 } });
    const res = await fetch(api_URL, { cache: "no-store" });
    const data = await res.json();
    const formatedData = formatData(data);
    return formatedData.find((row) => row.id === id);
  } catch (error) {
    console.error(error);
    throw error;
  }
};
