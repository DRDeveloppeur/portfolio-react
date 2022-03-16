import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import getProjectsDB from "../../services/get-projets-request.service";
import Admin from "../Admin/Admin";
import Auth from "../Auth/Auth";
import Projet from "../Projet/Projet";
import PresentMe from "./PresentMe";
import "./style.css";

const Home = () => {
    const dispatch = useDispatch();
    const { projects } = useSelector(state => {
        return {
            projects: state.projectsReducer.projects,
        }
    })

    useEffect(() => {
        dispatch(getProjectsDB());
    }, [])

    return (
        <div className="home">
            <PresentMe id="presentMe"/>
            <div className="container">
                <hr id="experiace" />
            </div>
            {
                localStorage.user ? (JSON.parse(localStorage.user).email === "raul3wa@gmail.com") ? <Admin /> : <Auth /> : <Auth />
            }

            { projects.length > 0 && <Projet projects={projects} />}
        </div>
    );
}

export default Home;