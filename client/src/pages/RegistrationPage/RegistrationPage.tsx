import styled from "@emotion/styled";
import RegistrationForm from "./components/RegistrationForm/RegistrationForm";
import AlreadyHaveAnAccount from "./components/AlreadyHaveAnAccount/AlreadyHaveAnAccount";

const StyledRegistrationPage = styled("div", {
  label: "StyledRegistrationPage",
  target: "styled-registration-page",
})`
  padding: 84px 0px 98px;

  .title {
    text-align: center;
    font-family: Manrope;
    font-size: 24px;
  }
`;

const RegistrationPage = () => {
  return (
    <StyledRegistrationPage>
      <div className="title">Реєстрація</div>
      <RegistrationForm />
      <AlreadyHaveAnAccount />
    </StyledRegistrationPage>
  );
};

export default RegistrationPage;
