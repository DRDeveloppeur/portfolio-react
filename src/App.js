import './App.css';
import Header from './Components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';

const App = () => {
	return (
		<div className="main">
			<Header />
			<Routes>
				<Route index path="/" element={<Home />} />
				{/* <Route path="/" element={<Home />} /> */}
			</Routes>
		</div>
	);
}

export default App;
