import styled from "@emotion/styled";
import { FormEvent, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { userActions } from "../../../../redux/user";
import { useNavigate } from "react-router-dom";

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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await axios
      .post("http://localhost:5000/api/user/login", {
        email: email,
        password: password,
      })
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        dispatch(userActions.setUserData(res.data));
        navigate('/home')
      })
      .catch((err) => {
        console.log("YES2");
        console.log(err);
      });
    console.log("YES3");
  };

  return (
    <StyledLoginFrom onSubmit={onSubmit}>
      <div className="input-wrapper">
        <span className="input-title">E-mail</span>
        <input
          onChange={(e) => setEmail(e.target.value)}
          className="input-field"
          placeholder="email@example.com"
          value={email}
        />
      </div>
      <div className="input-wrapper">
        <span className="input-title">Пароль</span>
        <input
          onChange={(e) => setPassword(e.target.value)}
          className="input-field"
          placeholder="Пароль"
          value={password}
        />
      </div>

      <input type="submit" value="Увійти" className="submit-btn" />
    </StyledLoginFrom>
  );
};

export default LoginForm;
