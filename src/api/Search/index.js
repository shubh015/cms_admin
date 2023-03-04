import axios from "axios";
const baseUrl = process.env.REACT_APP_URL;
axios.defaults.baseURL = baseUrl;

export const getSearchResults = async (token, query, type) => {
  try {
    const search = await axios.post(
      `/admin/search`,
      { query, type },
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    );

    return search;
  } catch (error) {
    console.log(error);
    return error;
  }
};
