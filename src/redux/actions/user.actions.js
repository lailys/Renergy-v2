import {
  userConstants
} from '../constants/user.constants';
import {
  userService
} from '../services/user.service';
import {
  alertActions
} from '../actions/alert.actions';
import {
  history
} from '../helpers/history';

import jwt_decode from "jwt-decode";

export const userActions = {
  login,
  logout,
  register,
  activate,
  refreshToken,
  getMarket,
  //   getAll,
  //   delete: _delete
};



function register(user) {
  return dispatch => {
    dispatch(request(user));

    return userService.register(user)
      .then(
        user => {
          if (user.status === 201) {
            dispatch(success());
            dispatch(alertActions.success('Registration successful, Check your email for activation'));
          }
          if (user.status === 400) {
            dispatch(failure(user.toString()));
            // dispatch(alertActions.error(user.toString()));

          }
        },
        error => {
          dispatch(failure(error.toString()));
          //   dispatch(alertActions.error(error.toString()));
        }
      );
  };

  function request(user) {
    return {
      type: userConstants.REGISTER_REQUEST,
      user
    }
  }

  function success(user) {
    return {
      type: userConstants.REGISTER_SUCCESS,
      user
    }
  }

  function failure(error) {
    return {
      type: userConstants.REGISTER_FAILURE,
      error
    }
  }
}

function activate(info) {
  return dispatch => {
    dispatch(request(info));
    return userService.activate(info)
      .then(
        user => {
          if (user.status >= 200 && user.status < 300) {
            dispatch(success());
            dispatch(alertActions.success('successful activation'));
          }
          if (user.status === 400) {
            dispatch(failure(user.toString()));
            dispatch(alertActions.error(user.toString()));

          }
        },
        error => {
          dispatch(failure(error.toString()));
          dispatch(alertActions.error(error.toString()));
        }
      );

    function request(info) {
      return {
        type: userConstants.ACTIVATE_REQUEST,
        info
      }
    }

    function success(info) {
      return {
        type: userConstants.ACTIVATE_SUCCESS,
        info
      }
    }

    function failure(error) {
      return {
        type: userConstants.ACTIVATE_FAILURE,
        error
      }
    }
  }
}

function login(user) {
  return dispatch => {
    dispatch(request({
      user: user.username
    }));

    userService.login(user)
      .then(
        user => {
          const currUser = jwt_decode(user.data.access)
          localStorage.setItem("authTokens", JSON.stringify(user.data));
          localStorage.setItem("user", currUser);
          localStorage.setItem("isAdmin", user.data.is_superuser);
          dispatch(success(user, currUser, user.data.is_superuser));
        },
        error => {
          dispatch(failure(error.toString()));
          dispatch(alertActions.error(error.toString()));
        }
      );
  };

  function request(user) {

    return {
      type: userConstants.LOGIN_REQUEST,
      user,
    }
  }

  function success(user, curr, isAdmin) {
    console.log(user, curr, isAdmin, "user, curr, isAdmin")
    return {
      type: userConstants.LOGIN_SUCCESS,
      user,
      curr,
      isAdmin
    }
  }

  function failure(error) {
    return {
      type: userConstants.LOGIN_FAILURE,
      error
    }
  }
}

function logout() {
  userService.logout();
  return {
    type: userConstants.LOGOUT
  };
}

function refreshToken(access) {
  return dispatch => {
    dispatch(request({
      access
    }));

    userService.refreshToken()
      .then(
        user => {
          const updatedAuthToken = JSON.parse(localStorage.getItem("authTokens"));
          updatedAuthToken.access = access;
          localStorage.setItem("authTokens", JSON.stringify(updatedAuthToken));
          localStorage.setItem("user", jwt_decode(access));
          dispatch(success(access));
        },
        error => {
          dispatch(failure(error.toString()));
          dispatch(alertActions.error(error.toString()));
        }
      );
  };

  function request(access) {
    return {
      type: userConstants.REFRESH_TOKEN__REQUEST,
      access
    }
  }

  function success(access) {
    return {
      type: userConstants.REFRESH_TOKEN__SUCCESS,
      access
    }
  }

  function failure(error) {
    return {
      type: userConstants.REFRESH_TOKEN__FAILURE,
      error
    }
  }
}

function getMarket() {
  return dispatch => {
    dispatch(request());
    userService.getMarket()
      .then(
        tokens => dispatch(success(tokens)),
        error => dispatch(failure(error.toString()))
      );
  };

  function request() {
    return {
      type: userConstants.TOKEN_LIST_REQUEST
    }
  }

  function success(tokens) {
    return {
      type: userConstants.TOKEN_LIST_SUCCESS,
      tokens
    }
  }

  function failure(error) {
    return {
      type: userConstants.TOKEN_LIST_FAILURE,
      tokens: [],
      error
    }
  }
}

// // prefixed function name with underscore because delete is a reserved word in javascript
// function _delete(id) {
//   return dispatch => {
//     dispatch(request(id));

//     userService.delete(id)
//       .then(
//         user => dispatch(success(id)),
//         error => dispatch(failure(id, error.toString()))
//       );
//   };

//   function request(id) {
//     return {
//       type: userConstants.DELETE_REQUEST,
//       id
//     }
//   }

//   function success(id) {
//     return {
//       type: userConstants.DELETE_SUCCESS,
//       id
//     }
//   }

//   function failure(id, error) {
//     return {
//       type: userConstants.DELETE_FAILURE,
//       id,
//       error
//     }
//   }
// }
