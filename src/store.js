import { createStore } from 'redux';
import { Reducers } from './redux/index';

export const Store = createStore(Reducers);