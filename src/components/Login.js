import React, { useState } from "react";

export default function Login({ onLogin }) {
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

    if (!profileData.password || !profileData.email) {
      return;
    }

    onLogin(profileData)
  }

  return (
    <form className="login-form" name="login-form" onSubmit={handleSubmit}>
      <h1 className="login-form__title">Вход</h1>
      <input autoComplete="on" className="login-form__email-input" placeholder="Email" id="email" name="email" type="email" value={profileData.email} onChange={handleChange} minLength="2" maxLength="40" required />
      <input autoComplete="on" className="login-form__password-input" placeholder="Пароль" id="password" name="password" type="password" value={profileData.password} onChange={handleChange} minLength="2" maxLength="40" required />
      <button className="login-form__button" type="submit">Войти</button>
    </form>
  )
}