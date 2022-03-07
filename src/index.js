import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { applyMiddleware, createStore } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import middlewareLog from './middleware/middlewareLog';
import thunk from 'redux-thunk';
import reduceurs from './reducers/index.js';
import { Provider } from 'react-redux';

const rootElement = document.getElementById('root');
const middlewares = applyMiddleware(thunk, middlewareLog);
const store = createStore(reduceurs, middlewares)

ReactDOM.render(
	<React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>
    </React.StrictMode>,
	rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();