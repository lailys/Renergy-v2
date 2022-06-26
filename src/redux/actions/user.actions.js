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

export const userActions = {
  login,
  logout,
  register,
  activate,
  //   getAll,
  //   delete: _delete
};

function logout() {
  userService.logout();
  return {
    type: userConstants.LOGOUT
  };
}

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
          dispatch(success(user));
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
      user
    }
  }

  function success(user) {
    return {
      type: userConstants.LOGIN_SUCCESS,
      user
    }
  }

  function failure(error) {
    return {
      type: userConstants.LOGIN_FAILURE,
      error
    }
  }
}



// function getAll() {
//   return dispatch => {
//     dispatch(request());

//     userService.getAll()
//       .then(
//         users => dispatch(success(users)),
//         error => dispatch(failure(error.toString()))
//       );
//   };

//   function request() {
//     return {
//       type: userConstants.GETALL_REQUEST
//     }
//   }

//   function success(users) {
//     return {
//       type: userConstants.GETALL_SUCCESS,
//       users
//     }
//   }

//   function failure(error) {
//     return {
//       type: userConstants.GETALL_FAILURE,
//       error
//     }
//   }
// }

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
