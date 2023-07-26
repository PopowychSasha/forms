import styled from "@emotion/styled";
import LoginForm from "./components/LoginForm/LoginForm";
import NotRegistered from "./components/NotRegistered/NotRegistered";

const StyledLoginPage = styled("div", {
  label: "StyledLoginPage",
  target: "styled-login-page",
})`
  padding: 84px 0px 98px;

  .title {
    text-align: center;
    font-family: Manrope;
    font-size: 24px;
  }
`;

const LoginPage = () => {
  return (
    <StyledLoginPage>
      <div className="title">Вхід</div>
      <LoginForm />
      <NotRegistered />
    </StyledLoginPage>
  );
};

export default LoginPage;
