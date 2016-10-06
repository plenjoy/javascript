import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import App from './src/containers/index';
import configureStore from './src/store/configStore';


// 创建全局的store
const store = configureStore();

// app的挂载点
const rootElement = document.getElementById('app');


ReactDOM.render(
    < Provider store = {store} >
        <App></App>

    < / Provider >,
    rootElement
)


