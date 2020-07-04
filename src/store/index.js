import { createStore } from 'redux';

//Reducers
import rootReducers from './modules/rootReducer';
//Reducers

const store = createStore(rootReducers);

export default store;