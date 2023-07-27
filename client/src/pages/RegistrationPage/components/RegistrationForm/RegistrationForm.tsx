import { useNavigate } from "react-router-dom";
import {
  useForm,
  Controller,
  FieldValues,
  SubmitHandler,
} from "react-hook-form";
import axios from "axios";
import styled from "@emotion/styled";

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

    .error-message {
      display: block;
      color: red;
      font-size: 12px;
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
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors },
    getValues,
    reset,
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      surname: "",
      email: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (formData) => {
    await axios
      .post("http://localhost:5000/api/user/registration", formData)
      .then(() => {
        reset();
        navigate("/login");
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };


  return (
    <StyledRegistrationFrom onSubmit={handleSubmit(onSubmit)}>
      <div className="input-wrapper">
        <span className="input-title">Ім'я</span>
        <Controller
          name="name"
          control={control}
          rules={{
            required: "ім'я є обов'язковим",
            minLength: {
              value: 3,
              message: "мінімальна довжина ім'я повинна бути 3 літери",
            },
            maxLength: {
              value: 20,
              message: "максимальна довжина ім'я може бути 20 літер",
            },
          }}
          render={({ field }) => (
            <input {...field} className="input-field" placeholder="Ім'я" />
          )}
        />
        {errors.name && (
          <span className="error-message">{errors.name.message as string}</span>
        )}
      </div>
      <div className="input-wrapper">
        <span className="input-title">Прізвище</span>
        <Controller
          name="surname"
          control={control}
          rules={{
            required: "прізвище є обов'язковим",
            minLength: {
              value: 3,
              message: "мінімальна довжина прізвища повинна бути 3 літери",
            },
            maxLength: {
              value: 20,
              message: "максимальна довжина прізвища може бути 20 літер",
            },
          }}
          render={({ field }) => (
            <input {...field} className="input-field" placeholder="Прізвище" />
          )}
        />
        {errors.surname && (
          <span className="error-message">
            {errors.surname.message as string}
          </span>
        )}
      </div>
      <div className="input-wrapper">
        <span className="input-title">Email</span>
        <Controller
          name="email"
          control={control}
          rules={{
            required: "email є обов'язковим",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "неправильний шаблон для email",
            },
          }}
          render={({ field }) => (
            <input
              {...field}
              className="input-field"
              placeholder="email@example.com"
            />
          )}
        />
        {errors.email && (
          <span className="error-message">
            {errors.email.message as string}
          </span>
        )}
      </div>
      <div className="input-wrapper">
        <span className="input-title">Номер телефону</span>
        <Controller
          name="phoneNumber"
          control={control}
          rules={{
            required: "номер телефону є обов'язковим",
            pattern: {
              value: /^(\+380|380|\b0)9\d{8}$/,
              message: "неправильний формат номера телефону",
            },
          }}
          render={({ field }) => (
            <input
              {...field}
              className="input-field"
              placeholder="Номер телефону"
            />
          )}
        />
        {errors.phoneNumber && (
          <span className="error-message">
            {errors.phoneNumber.message as string}
          </span>
        )}
      </div>
      <div className="input-wrapper">
        <span className="input-title">Пароль</span>
        <Controller
          name="password"
          control={control}
          rules={{
            required: "пароль є обов'язковим",
            minLength: {
              value: 8,
              message: "пароль повинен мати мінімум 8 символів",
            },
          }}
          render={({ field }) => (
            <input
              {...field}
              className="input-field"
              placeholder="Введіть пароль"
            />
          )}
        />
        {errors.password && (
          <span className="error-message">
            {errors.password.message as string}
          </span>
        )}
      </div>
      <div className="input-wrapper">
        <span className="input-title">Підтвердження паролю</span>
        <Controller
          name="confirmPassword"
          control={control}
          rules={{
            required: "Please confirm your password",
            validate: (value) => {
              if (value !== getValues("password")) {
                return "Passwords do not match";
              }
            },
          }}
          render={({ field }) => (
            <input
              {...field}
              className="input-field"
              placeholder="Підтвердіть пароль"
            />
          )}
        />
        {errors.confirmPassword && (
          <span className="error-message">
            {errors.confirmPassword.message as string}
          </span>
        )}
      </div>
      <input type="submit" value="Зареєструватися" className="submit-btn" />
    </StyledRegistrationFrom>
  );
};

export default RegistrationForm;
