import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';

ReactDOM.render(
	<BrowserRouter>
		<Header />
		<Routes>
			<Route path="/" element={<App />} />
			{/* <Route path="expenses" element={<Expenses />} /> */}
			{/* <Route path="invoices" element={<Invoices />} /> */}
		</Routes>
	</BrowserRouter>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();