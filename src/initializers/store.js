import { createStore, combineReducers, compose } from 'redux';
import persistState from 'redux-localstorage';

function tokenReducer(state = '', action) {
  switch (action.type) {
    case 'SET_TOKEN':
      return action.token;
    case 'CLEAR_TOKEN':
      return '';
    default:
      return state;
  }
}

function userReducer(state = null, action) {
  switch (action.type) {
    case 'LOGGED_IN':
      return action.user;
    case 'SIGN_OUT':
      return null;
    default:
      return state;
  }
}

function albumsReducer(state = [], action) {
  switch (action.type) {
    case 'SET_ALBUMS':
      return action.albums;
    case 'CLEAR_ALBUMS':
      return null;
    default:
      return state;
  }
}

/**
 * A traves de estos valores se va a acceder a los valores
 */
let rootReducer = combineReducers({
  token: tokenReducer,
  user: userReducer,
  albums: albumsReducer
});
/**
 * persistState: gurada todos los valores, devemos poner solo lo necesario
 */
let mainEnhancer = compose(persistState('token'));

export default createStore(rootReducer, {}, mainEnhancer);
