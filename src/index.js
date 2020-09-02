import React from 'react';
import { render } from 'react-dom';
import {createStore} from 'redux';
import Root from './containers/Root';
import rootReducer from './reducers/rootReducer.js'
const initialState = {};

const store = createStore(rootReducer, initialState);

render(<Root store={store}/>, document.getElementById('root'));