import styled from "@emotion/styled";
import { useEffect } from "react";
import axios from "axios";

const StyledRegistrationFrom = styled("form", {
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

const RegistrationForm = () => {
  const onSubmit = async () => {
    await axios
      .post("http://localhost:5000/api/user/registration", {
        name: "Petr",
        surname: "Popovych",
        email: "sashapopovych1@gmail.com",
        phoneNumber: "+380969943318",
        password: "11111",
        confirmPassword: "11111",
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    onSubmit();
  }, []);
  return (
    <StyledRegistrationFrom>
      <div className="input-wrapper">
        <span className="input-title">Ім'я</span>
        <input className="input-field" placeholder="Ім'я" />
      </div>
      <div className="input-wrapper">
        <span className="input-title">Прізвище</span>
        <input className="input-field" placeholder="Прізвище" />
      </div>
      <div className="input-wrapper">
        <span className="input-title">Email</span>
        <input className="input-field" placeholder="email@example.com" />
      </div>
      <div className="input-wrapper">
        <span className="input-title">Номер телефону</span>
        <input className="input-field" placeholder="Номер телефону" />
      </div>
      <div className="input-wrapper">
        <span className="input-title">Пароль</span>
        <input className="input-field" placeholder="Введіть пароль" />
      </div>
      <div className="input-wrapper">
        <span className="input-title">Підтвердження паролю</span>
        <input className="input-field" placeholder="Підтвердіть пароль" />
      </div>
      <input type="submit" value="Зареєструватися" className="submit-btn" />
    </StyledRegistrationFrom>
  );
};

export default RegistrationForm;
