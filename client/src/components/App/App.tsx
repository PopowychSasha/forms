import { useRoutes } from "react-router-dom";
import { useSelector } from "react-redux";
import RegistrationPage from "../../pages/RegistrationPage/RegistrationPage";
import LoginPage from "../../pages/LoginPage/LoginPage";
import HomePage from "../../pages/HomePage/HomePage";
import { HOME, LOGIN, REGISTRATION } from "./AppPageUrl";

const App = () => {
  const { token } = useSelector(
    (store: { userReducer: { token: string } }) => store.userReducer
  );

  const publicRoute = [
    { path: REGISTRATION, element: <RegistrationPage /> },
    { path: LOGIN, element: <LoginPage /> },
  ];

  const privateRoute = [
    ...publicRoute,
    { path: HOME, element: <HomePage /> },
  ];

  const routes = useRoutes(token ? privateRoute : publicRoute);

  return routes;
};

export default App;
