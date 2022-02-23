import { useEffect } from "react";
import { useSelector } from "react-redux";
import Admin from "../Admin/Admin";
import Auth from "../Auth/Auth";
import Projet from "../Projet/Projet";
import PresentMe from "./PresentMe";
import "./style.css";

const Home = ({projects}) => {
    const { user } = useSelector(state => {
        return {
            user: state.authReducer.user,
        }
    })

    return (
        <div className="home">
            <PresentMe id="presentMe"/>
            <div className="container">
                <hr id="experiace" />
            </div>
            {
                localStorage.user ? <Admin /> : <Auth />
            }
            <Projet projects={projects} />
        </div>
    );
}

export default Home;