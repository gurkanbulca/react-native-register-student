import {UPDATE_REQUEST_SUCCESS, UPDATE_REQUEST} from '../actions/types';

const INITIAL_STATE = {
  isLoading: false,
};

export default (state = INITIAL_STATE, action) => {
  console.log('test reducer: '+action.type);
  switch (action.type) {
    case UPDATE_REQUEST:
      return {isLoading: true};
    case UPDATE_REQUEST_SUCCESS:
      return INITIAL_STATE;
    default:
      return state;
  }
};
