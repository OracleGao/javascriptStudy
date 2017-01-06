import { ADD_TODO, TOGGLE_TODO } from './actions'
import { CONTEXT_REQUEST, CONTEXT_REQUEST_FAILED } from './asyncActions'
import { combineReducers } from 'redux'
import fetch from 'node-fetch'

/*
export function todoApp(state = {}, action) {
  switch (action.type) {
    case ADD_TODO:
      return Object.assign({}, state, action);
    case TOGGLE_TODO:
      return Object.assign({}, state, {
        toggle: action.text
      });
    default:
      return state;
  }
}
*/

function addTodo(state = {}, action) {
  if (action.type === ADD_TODO) {
    return Object.assign({}, state, {add: action.text})
  }
  return state
}

function toggleTodo(state = {}, action) {
  if (action.type == TOGGLE_TODO) {
    return Object.assign({}, state, {toggle: action.text})
  }
  return state
}

function onGet(state = {}, action) {
  if (action.type == CONTEXT_REQUEST ) {
    let object = Object.assign({}, state, {data: action.data})
    delete object.err
    return object
  }
  if (action.type == CONTEXT_REQUEST_FAILED) {
    return Object.assign({}, state, {err: action.err});
  }
  return state
}

export default combineReducers({addTodo, toggleTodo, onGet})

