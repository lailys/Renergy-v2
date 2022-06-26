import {
  userConstants
} from '../constants/user.constants';

export function registration(state = {}, action) {
  switch (action.type) {
    case userConstants.REGISTER_REQUEST:
      return {
        registering: true
      };
    case userConstants.ACTIVATE_REQUEST:
      return {
        activation: true
      };
    case userConstants.REGISTER_SUCCESS || userConstants.ACTIVATE_SUCCESS:
      return {};
    case userConstants.REGISTER_FAILURE || userConstants.ACTIVATE_FAILURE:
      return {};
    default:
      return state
  }
}
