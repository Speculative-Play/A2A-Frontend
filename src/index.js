//Styling
import './index.css';

//Packages
import React from 'react';
import ReactDOM from 'react-dom';
import store from './Server/store'
import { Provider } from 'react-redux'

//Components
import App from './App';
const root = document.getElementById('root');

ReactDOM.render(<React.StrictMode> <Provider store={store}> <App /> </Provider> </React.StrictMode>, root);