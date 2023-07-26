import styled from "@emotion/styled";
import { useEffect } from "react";
import {
  useForm,
  Controller,
  FieldValues,
  SubmitHandler,
} from "react-hook-form";

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
  const {
    control,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<FieldValues>();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };

  const password = getValues("password");
  /* const onSubmit = async () => {
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
  }; */
  useEffect(() => {
    /* onSubmit(); */
  }, []);
  return (
    <StyledRegistrationFrom onSubmit={handleSubmit(onSubmit)}>
      <div className="input-wrapper">
        <span className="input-title">Ім'я</span>
        <Controller
          name="name"
          control={control}
          rules={{
            required: "Name is required",
            maxLength: {
              value: 50,
              message: "Name should not exceed 50 characters",
            },
          }}
          render={({ field }) => (
            <input {...field} className="input-field" placeholder="Ім'я" />
          )}
        />
        {errors.name && (
          <span className="error-message">{errors.name.message as string}</span>
        )}
        {/* <input className="input-field" placeholder="Ім'я" /> */}
      </div>
      <div className="input-wrapper">
        <span className="input-title">Прізвище</span>
        <Controller
          name="surname"
          control={control}
          rules={{
            required: "Surname is required",
            maxLength: {
              value: 50,
              message: "Surname should not exceed 50 characters",
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
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address",
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
            required: "Phone number is required",
            pattern: {
              value: /^\+[0-9]{1,3}-?[0-9]{6,14}$/,
              message: "Invalid phone number format",
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
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters long",
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
        {errors.password && <span className="error-message">{errors.password.message as string}</span>}
      </div>
      <div className="input-wrapper">
        <span className="input-title">Підтвердження паролю</span>
        <Controller
          name="confirmPassword"
          control={control}
          rules={{
            required: "Please confirm your password",
            validate: (value) => value === password || "Passwords do not match",
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
          <span className="error-message">{errors.confirmPassword.message as string}</span>
        )}
      </div>
      <input type="submit" value="Зареєструватися" className="submit-btn" />
    </StyledRegistrationFrom>
  );
};

export default RegistrationForm;
