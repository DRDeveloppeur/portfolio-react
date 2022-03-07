import Admin from "../Admin/Admin";
import Auth from "../Auth/Auth";
import Projet from "../Projet/Projet";
import PresentMe from "./PresentMe";
import "./style.css";

const Home = () => {
    return (
        <div className="home">
            <PresentMe id="presentMe"/>
            <div className="container">
                <hr id="experiace" />
            </div>
            {
                localStorage.user ? (JSON.parse(localStorage.user).email === "raul3wa@gmail.com") ? <Admin /> : <Auth /> : <Auth />
            }
            <Projet />
        </div>
    );
}

export default Home;