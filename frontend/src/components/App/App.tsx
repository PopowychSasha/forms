import { useRoutes } from "react-router-dom";
import RegistrationPage from "../../pages/RegistrationPage/RegistrationPage";
import LoginPage from "../../pages/LoginPage/LoginPage";
import HomePage from "../../pages/HomePage/HomePage";

const App = () => {
  const isLoggedIn = true;

  const publicRoute = [
    { path: "/registration", element: <RegistrationPage /> },
    { path: "/login", element: <LoginPage /> },
  ];
  const privateRoute = [
    ...publicRoute,
    { path: "/home", element: <HomePage /> },
  ];

  const routes = useRoutes(isLoggedIn ? privateRoute : publicRoute);

  return routes;
};

export default App;
