import styled from "@emotion/styled";

const StyledLoginFrom = styled("form", {
  label: "StyledRegistrationFrom",
  target: "styled-registration-from",
})`
  margin: auto;
  margin-top: 36px;
  max-width: max-content;

  > * {
    margin-bottom: 20px;
  }

  .input-wrapper {
    .input-title {
      display: block;
      font-family: Manrope;
      font-size: 14px;
    }

    .input-field {
      width: 438px;
      height: 48px;
      padding: 13.25px 14px 14.75px 14px;
      margin-top: 8px;

      color: #757575;
      font-family: Montserrat;
      font-size: 16px;

      border-radius: 4px;
      border: 1px solid #dedede;
      outline: none;
    }
  }

  .submit-btn {
    width: 438px;
    height: 48px;
    border-radius: 4px;
    background: #ffc700;
    cursor: pointer;

    color: #424242;
    text-align: center;
    font-family: Montserrat;
    font-size: 13.333px;
    font-weight: 400;
  }
`;

const LoginForm = () => {
  return (
    <StyledLoginFrom>
      <div className="input-wrapper">
        <span className="input-title">E-mail</span>
        <input className="input-field" placeholder="email@example.com" />
      </div>
      <div className="input-wrapper">
        <span className="input-title">Пароль</span>
        <input className="input-field" placeholder="Пароль" />
      </div>

      <input type="submit" value="Увійти" className="submit-btn" />
    </StyledLoginFrom>
  );
};

export default LoginForm;
