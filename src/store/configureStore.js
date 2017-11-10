import {createStore} from 'redux';
import rootReducer from './Reducers/rootReducer';

export default function configureStore(initialState) {
  return createStore(rootReducer, initialState);
}