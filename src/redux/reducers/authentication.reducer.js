import {
  userConstants
} from '../constants/user.constants';

let user = localStorage.getItem('user');
let isAdmin = localStorage.getItem('isAdmin');
const initialState = user ? {
  loggedIn: true,
  user,
  isAdmin
} : {};
export function authentication(state = initialState, action) {

  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return {
        loggingIn: true,
          user: action.user
      };
    case userConstants.LOGIN_SUCCESS:
      return {
        loggedIn: true,
          user: action.curr,
          isAdmin: action.isAdmin
      };
    case userConstants.REFRESH_TOKEN__REQUEST:
      return {
        loggedIn: true,
          user: {
            ...user,
            access: action.access
          }
      };
    case userConstants.REFRESH_TOKEN__SUCCESS:
      return {
        loggedIn: true,
          user: {
            ...user,
            access: action.access
          }
      };
      // case userConstants.REFRESH_TOKEN__FAILURE:
      //   return {
      //     loggedIn: true,
      //       user: {
      //         ...user,
      //         access: action.access
      //       }
      //   };
    case userConstants.LOGIN_FAILURE:
      return {};
    case userConstants.LOGOUT:
      return {
        loggedIn: false,
          user: null
      };
    default:
      return state
  }
}
