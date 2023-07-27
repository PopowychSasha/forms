import { useRoutes } from "react-router-dom";
import RegistrationPage from "../../pages/RegistrationPage/RegistrationPage";
import LoginPage from "../../pages/LoginPage/LoginPage";
import HomePage from "../../pages/HomePage/HomePage";
import { useSelector } from "react-redux";

const App = () => {
  const { token } = useSelector(
    (store: { userReducer: { token: string } }) => store.userReducer
  );

  const publicRoute = [
    { path: "/registration", element: <RegistrationPage /> },
    { path: "/login", element: <LoginPage /> },
  ];
  const privateRoute = [
    ...publicRoute,
    { path: "/home", element: <HomePage /> },
  ];

  const routes = useRoutes(token ? privateRoute : publicRoute);

  return routes;
};

export default App;
