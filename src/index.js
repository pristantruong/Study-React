import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {createStore} from 'redux';
import myReducer from './reducers/index';
import {Provider} from 'react-redux'; //khai báo provider để kn giữ react và redux
const store = createStore(myReducer); 

ReactDOM.render(
    //dùng provider bao bọc app, khai báo store
    <Provider store={store}>
           <App />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
