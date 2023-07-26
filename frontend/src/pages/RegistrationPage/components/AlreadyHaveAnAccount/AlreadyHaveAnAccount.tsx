import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

const StyledAlreadyHaveAnAccount = styled("div", {
  label: "AlreadyHaveAnAccount",
  target: "already-have-an-account",
})`
  display: flex;
  margin: auto;
  width: 100%;
  max-width: 438px;

  color: #000;
  font-family: Manrope;
  font-size: 14px;
  font-weight: 700;

  .already-have-an-account {
    margin-right: 9.36px;
  }

  .link {
    text-decoration: none;
    color: #C99A00;
  }
`;

const AlreadyHaveAnAccount = () => {
  return (
    <StyledAlreadyHaveAnAccount>
      <div className="already-have-an-account">Вже є акаунт?</div>
      <NavLink className="link" to="/login">
        Вхід
      </NavLink>
    </StyledAlreadyHaveAnAccount>
  );
};

export default AlreadyHaveAnAccount;
