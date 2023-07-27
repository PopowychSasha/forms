import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "@emotion/styled";
import { userActions } from "../../redux/user";

const StyledHomePage = styled("div", {
  label: "StyledHomePage",
  target: "styled-home-page",
})`
  padding: 84px 0px 98px;

  .title {
    text-align: center;
    font-family: Manrope;
    font-size: 24px;
  }

  .user-info-list {
    max-width: max-content;
    margin: auto;
    margin-top: 75px;

    .user-info-list-item {
      font-size: 20px;
    }
  }

  .user-info-list > :not(:last-child) {
    margin-bottom: 20px;
  }

  .logout-btn {
    display: block;
    margin: auto;
    margin-top: 50px;

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
const HomePage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { name, surname, email, phoneNumber, token } = useSelector(
    (store: {
      userReducer: {
        name: string;
        surname: string;
        email: string;
        phoneNumber: string;
        token: string;
      };
    }) => store.userReducer
  );

  const logoutHandler = () => {
    localStorage.removeItem("token");
    dispatch(userActions.cleanUpUserData());
    navigate("/login");
  };

  const fetchUserInfo = async () => {
    await axios
      .get("http://localhost:5000/api/user", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        dispatch(userActions.setUserData(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchUserInfo();
  }, []);
  
  return (
    <StyledHomePage>
      <div className="title">Інформація про користвувача</div>
      <ul className="user-info-list">
        <li className="user-info-list-item">Ім'я - {name}</li>
        <li className="user-info-list-item">Прізвище - {surname}</li>
        <li className="user-info-list-item">Email - {email}</li>
        <li className="user-info-list-item">Номер телефону - {phoneNumber}</li>
      </ul>
      <button className="logout-btn" onClick={logoutHandler}>
        Вийти
      </button>
    </StyledHomePage>
  );
};

export default HomePage;
