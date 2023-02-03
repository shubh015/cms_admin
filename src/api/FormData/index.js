import axios from "axios";
const baseUrl = process.env.REACT_APP_URL;
axios.defaults.baseURL = baseUrl;

export const getApplications = async (token, type) => {
  try {
    let res;

    if (type === "applicants") {
      res = axios.get(`/admin/all-applicants-list`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } else {
      res = axios.get(`/admin/all-shortlisted-applicants-list`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    }

    return res;
  } catch (error) {
    return error;
  }
};
