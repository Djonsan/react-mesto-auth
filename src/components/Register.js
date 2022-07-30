import React, { useState } from "react";
import { Link } from 'react-router-dom';

export default function Register({ onRegister }) {

  const initialData = {
    email: '',
    password: '',
  }

  const [profileData, setProfileData] = useState(initialData);

  const handleChange = (e) => {
    const { name, value } = e.target
    setProfileData(profileData => ({
      ...profileData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    onRegister(profileData)
  }

  return (
    <form className="register-form" name="register-form" onSubmit={handleSubmit}>
      <h1 className="register-form__title">Регистрация</h1>
      <input autoComplete="on" className="register-form__email-input" placeholder="Email" id="email" name="email" type="email" value={profileData.email} onChange={handleChange} minLength="2" maxLength="40" required />
      <input autoComplete="on" className="register-form__password-input" placeholder="Пароль" id="password" name="password" type="password" value={profileData.password} onChange={handleChange} minLength="2" maxLength="40" required />
      <button type="submit" className="register-form__button">Зарегистрироваться</button>
      <Link to="/sign-in" className="register-form__link">Уже зарегистрированы? Войти</Link>
    </form>
  )
}
