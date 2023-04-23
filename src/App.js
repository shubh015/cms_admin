import "./App.css";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useRoutes,
} from "react-router-dom";
import FormData from "./components/FormData";
import PreviewForm from "./components/PreviewForm";
import { useSelector } from "react-redux";
import SearchPage from "./components/SearchPage";
import LowerHeader from "./components/LowerHeader";
import { routes } from "./utils/routes";

function App() {
  const token = useSelector((state) => state.auth.token);
  const user = useSelector((state) => state.auth.user);

  const app_route = useRoutes(routes);
  if (!token) return <Navigate to="/auth" />;

  return (
    <div className="dashboard_wrp min-h-screen flex font-[Poppins] bg-[#edf0ff]">
      <Sidebar />
      <div className="flex-1 h-full ml-60">
        <Header />
        <LowerHeader heading={app_route.props.match.route.name} />
        <Routes>
          {routes.map((route, index) => {
            if (route.path === "admin" && user.role !== "admin") return null;

            if (route.type)
              return (
                <Route
                  key={index}
                  path={route.path}
                  element={<route.element type={route.type} />}
                />
              );

            return (
              <Route
                key={index}
                path={route.path}
                element={<route.element />}
              />
            );
          })}
        </Routes>
      </div>
    </div>
  );
}

export default App;
