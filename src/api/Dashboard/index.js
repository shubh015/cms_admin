import axios from "axios";
const baseUrl = process.env.REACT_APP_URL;
axios.defaults.baseURL = baseUrl;

export const getDashboardData = async (token) => {
  try {
    const allApplicantsList = axios.get(`/admin/all-applicants`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const allApplicantsShortListedList = axios.get(
      `/admin/all-shortlisted-applicants`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const res = await Promise.all([
      allApplicantsList,
      allApplicantsShortListedList,
    ]);

    return res;
  } catch (error) {
    return error;
  }
};

export const candidateShortlist = async (id, token) => {
  try {
    const res = await axios.patch(
      `/admin/applicant-shortlist/${id}`,
      {},
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    );

    return res;
  } catch (error) {
    return error;
  }
};
