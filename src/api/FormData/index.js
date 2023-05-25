import axios from "axios";
const baseUrl = process.env.REACT_APP_URL;
axios.defaults.baseURL = baseUrl;

export const getApplications = async (token, type, pageNumber, pageSize) => {
  try {
    let res;

    if (type === "applicants") {
      res = axios.get(`/admin/all-applicants-list/${pageNumber}/${pageSize}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } else {
      res = axios.get(
        `/admin/all-shortlisted-applicants-list/${pageNumber}/${pageSize}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    }

    return res;
  } catch (error) {
    return error;
  }
};

export const getAllApplicants = async (token) => {
  try {
    const res = await axios.get("/admin/get-all-data", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return res;
  } catch (error) {
    return error;
  }
};
