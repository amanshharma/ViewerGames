import { 
  INCREMENT, 
  DECREMENT,
  SHOWTOGGLE,
  SETUIDFIELD
} from '../actionTypes';


//Action to increment the joined number
export function increment(userid) {
  return {
    type: INCREMENT,
    payload: userid,
  }
}

//Action to decrement the joined number
export function decrement(userid) {
  return { 
    type: DECREMENT,
    payload: userid,
  }
}

//Action to toggle the expanded content
export function showToggle() {
  return {
    type: SHOWTOGGLE
  }
}

//Action to set the Fortnite id as user types in the input field
export function setUID(uid) {
  return { 
    type: SETUIDFIELD,
    payload: uid,
  }
}