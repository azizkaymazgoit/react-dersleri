import axios from "axios";

const API_URL = "https://hn.algolia.com/api/v1/search";

export const getMakale = async (query) => {
  const istek = await axios.get(API_URL, {
    params: {
      query,
    },
  });
  return istek.data.hits;
};
