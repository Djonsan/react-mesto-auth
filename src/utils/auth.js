export const baseUrl = "https://auth.nomoreparties.co";

function checkResponse (res) {
  if(res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка ${res.status}`);
}

export const register = (email, password) => {
  return fetch(`${baseUrl}/signup`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email,
      password,
    })
  })
  .then((res) => {
    console.log(res);
    return checkResponse(res);
  })
};

export const login = (email, password) => {
  return fetch(`${baseUrl}/signin`, {
    method: 'POST', 
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  })
  .then((res) => {
    return checkResponse(res);
  })
};

export const checkToken = (token) => {
  return fetch(`${baseUrl}/users/me`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
  })
  .then((res) => {
    return checkResponse(res);
  })
};
