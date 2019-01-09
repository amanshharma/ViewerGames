import { 
  INCREMENT, 
  DECREMENT,
  SHOWTOGGLE,
  SETUIDFIELD
} from '../actionTypes';

// Initial State of the application
const INITIAL_STATE = { 
  count: 14,
  joined: false,
  expanded: false,
  activeUser: null,
  usernameField: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1, joined: true, activeUser: state.usernameField};
    case DECREMENT:
      return { ...state, count: state.count - 1, joined: false, activeUser: null, usernameField: '' };
    case SHOWTOGGLE:
      return { ...state, expanded: !state.expanded };
    case SETUIDFIELD:
      return { ...state, usernameField: action.payload };
    default:
      return state;
  }
}