import React from 'react';
import { render } from 'react-dom';
import {createStore} from 'redux';
import Root from './containers/Root';
import RootMap from './containers/RootMap';
import {rootReducer} from './reducers/rootReducer.js';

const store = createStore(rootReducer);

render(<Root store={store}/>, document.getElementById('root'));