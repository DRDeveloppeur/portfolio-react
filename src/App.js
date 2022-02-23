import './App.css';
import Header from './Components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import { useEffect, useState } from 'react';
import axios from 'axios';
import projectsData from './services/projects-data.json';

const App = () => {
	const [ip, setIp] = useState('');
	const projects = projectsData;

    const getData = async () => {
        const res = await axios.get('https://geolocation-db.com/json/')
        // console.log(res.data);
        setIp(res.data.IPv4);
    }
      
    useEffect( () => {
        //passing getData method to the lifecycle method
        getData()
    }, [])

	return (
		<div className="main">
			<Header />
			<Routes>
				<Route index path="/" element={<Home projects={projects} />} />
				{/* <Route path="/" element={<Home />} /> */}
			</Routes>
		</div>
	);
}

export default App;
