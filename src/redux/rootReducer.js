import {LOGIN, LOGOUT} from "./types";

const initialState = {
  isAuth: false,
  user: {}
}

export default function (state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return {...state, isAuth: true, user: {name: action.payload}}
    case LOGOUT:
      return {...state, isAuth: false, user: {}}
    default:
      return state
  }
}
