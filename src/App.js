import './App.css';
import Header from './Components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import projectsData from './services/projects-data.json';

const App = () => {
	const projects = projectsData;
	const darkTheme = createTheme({
		palette: {
		  mode: 'dark',
		},
	  });

	return (
		<div className="main">
			<ThemeProvider theme={darkTheme}>
				<Header />
				<Routes>
					<Route index path="/" element={<Home projects={projects} />} />
					{/* <Route path="/" element={<Home />} /> */}
				</Routes>
			</ThemeProvider>
		</div>
	);
}

export default App;
