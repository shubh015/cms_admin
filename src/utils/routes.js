import Dashboard from "../components/Dashboard";
import FormData from "../components/FormData";
import PreviewForm from "../components/PreviewForm";
import SearchPage from "../components/SearchPage";

export const routes = [
  {
    path: "",
    name: "Dashboard",
    element: Dashboard,
  },
  {
    path: "applicants",
    element: FormData,
    name: "Applicants",
    type: "applicants",
  },
  {
    path: "previewForm",
    element: PreviewForm,
  },
  {
    path: "/search",
    name: "Search",
    element: SearchPage,
  },
  {
    path: "shortlisted",
    element: FormData,
    name: "Shortlisted",
    type: "shortlisted",
  },
  {
    path: "admin",
    name: "Admin",
    element: () => <div>Admin</div>,
  },

  {
    path: "interviewed",
    element: FormData,
    name: "Interviewed",
  },

  {
    path: "*",
    element: () => <div>404</div>,
  },
];
