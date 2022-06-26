// import config from 'config';
import {
  authHeader
} from '../helpers/auth-header';

import axios from "axios";

export const userService = {
  //   login,
  logout,
  register,
  activate,
  //   getAll,
  //   getById,
  //   update,
  //   delete: _delete
};

function handleError(err) {
  console.log(err, "--------")
  let error = [];
  if (err.response) {
    // Request made and server responded
    console.log(err.response.data);
    console.log(err.response.status);
    console.log(err.response.headers);
    error = [err.response.status];
    for (let i in err.response.data) {
      error.push(err.response.data[i][0])
    }
  } else if (err.request) {
    // The request was made but no response was received
    console.log(err.request);
    error = ["Unknown error has been occured"]
  } else {
    // Something happened in setting up the request that triggered an Error
    console.log('Error', err.message);
    error = [err.message];
  }
  console.log(error, "<=======")


  return Promise.reject(error.join(' '));
}

function logout() {
  // remove user from local storage to log user out
  localStorage.removeItem('user');
}

function activate(user) {}

function register(user) {
  console.log(user)
  var config = {
    method: "post",
    url: "http://127.0.0.1:3000/auth/users/",
    data: user,
    headers: {},
  };


  return axios(config).then(response => {
    console.log(response, "-----------?????????")
    return response
  }).catch(handleError);
}

// function login(username, password) {
//   //   const requestOptions = {
//   //     method: 'POST',
//   //     headers: {
//   //       'Content-Type': 'application/json'
//   //     },
//   //     body: JSON.stringify({
//   //       username,
//   //       password
//   //     })
//   //   };

//   //   return fetch(`${config.apiUrl}/users/authenticate`, requestOptions)
//   //     .then(handleResponse)
//   //     .then(user => {
//   //       // store user details and jwt token in local storage to keep user logged in between page refreshes
//   //       localStorage.setItem('user', JSON.stringify(user));

//   //       return user;
//   //     });
// }



// function getAll() {
//   const requestOptions = {
//     method: 'GET',
//     headers: authHeader()
//   };

//   //   return fetch(`${config.apiUrl}/users`, requestOptions).then(handleResponse);
// }

// function getById(id) {
//   const requestOptions = {
//     method: 'GET',
//     headers: authHeader()
//   };

//   //   return fetch(`${config.apiUrl}/users/${id}`, requestOptions).then(handleResponse);
// }



// function update(user) {
//   const requestOptions = {
//     method: 'PUT',
//     headers: {
//       ...authHeader(),
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(user)
//   };

//   //   return fetch(`${config.apiUrl}/users/${user.id}`, requestOptions).then(handleResponse);;
// }

// // prefixed function name with underscore because delete is a reserved word in javascript
// function _delete(id) {
//   const requestOptions = {
//     method: 'DELETE',
//     headers: authHeader()
//   };

//   //   return fetch(`${config.apiUrl}/users/${id}`, requestOptions).then(handleResponse);
// }
