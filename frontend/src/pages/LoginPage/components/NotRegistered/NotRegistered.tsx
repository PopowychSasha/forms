import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

const StyledNotRegistered = styled("div", {
  label: "StyledNotRegistered",
  target: "styled-not-registered",
})`
  display: flex;
  margin: auto;
  width: 100%;
  max-width: 438px;

  color: #000;
  font-family: Manrope;
  font-size: 14px;
  font-weight: 700;

  .not-registered {
    margin-right: 9.36px;
  }

  .link {
    text-decoration: none;
    color: #c99a00;
  }
`;

const NotRegistered = () => {
  return (
    <StyledNotRegistered>
      <div className="not-registered">Не зареєстровані?</div>
      <NavLink className="link" to="/registration">
        Авторизація
      </NavLink>
    </StyledNotRegistered>
  );
};

export default NotRegistered;
