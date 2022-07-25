import {
  userConstants
} from '../constants/user.constants';

export function user(state = {}, action) {
  switch (action.type) {
    case userConstants.TOKEN_LIST_REQUEST:
      return {
        loading: true
      };
    case userConstants.TOKEN_LIST_SUCCESS:
      return {
        items: action.tokens
      };
    case userConstants.TOKEN_LIST_FAILURE:
      return {
        error: action.error
      };
    case userConstants.DASHBOARD_REQUEST:
      return {
        folder: action.folder,
          data: action.data,
      };
    case userConstants.DASHBOARD_SUCCESS:
      return {
        folder: action.folder,
          data: action.data,
      };
    case userConstants.DASHBOARD_FAILURE:
      return {
        folder: action.folder,
          data: [],
          error: action.error
      };
    case userConstants.MARKET_REQUEST:
      return {
        folder: action.folder,
          data: action.data,
      };
    case userConstants.MARKET_SUCCESS:
      return {
        folder: action.folder,
          data: action.data,
      };
    case userConstants.MARKET_FAILURE:
      return {
        folder: action.folder,
          data: [],
          error: action.error
      };
      // case userConstants.DELETE_REQUEST:
      //   // add 'deleting:true' property to user being deleted
      //   return {
      //     ...state,
      //     items: state.items.map(user =>
      //       user.id === action.id ? {
      //         ...user,
      //         deleting: true
      //       } :
      //       user
      //     )
      //   };
      // case userConstants.DELETE_SUCCESS:
      //   // remove deleted user from state
      //   return {
      //     items: state.items.filter(user => user.id !== action.id)
      //   };
      // case userConstants.DELETE_FAILURE:
      //   // remove 'deleting:true' property and add 'deleteError:[error]' property to user 
      //   return {
      //     ...state,
      //     items: state.items.map(user => {
      //       if (user.id === action.id) {
      //         // make copy of user without 'deleting:true' property
      //         const {
      //           deleting,
      //           ...userCopy
      //         } = user;
      //         // return copy of user with 'deleteError:[error]' property
      //         return {
      //           ...userCopy,
      //           deleteError: action.error
      //         };
      //       }

      //       return user;
      //     })
      //   };
    default:
      return state
  }
}
