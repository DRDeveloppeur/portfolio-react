import { Link } from "react-router-dom";
import "./style.css";

const Header = () => {
    return (
        <header className="main-header">
            <div className="container">
                <div className="grid-2-spaceBetween-noGutter">
                    <div className="col-2_md-6">
                        <div className="logo">
                        <Link className="logo-holder" to="/">
                            <img src="./images/header/logo.png" alt="" />
                        </Link>
                        </div>
                    </div>

                    <div className="col-10_md-6">
                        <nav>
                            <Link className="hover-border-colors" to="/">
                                Portfolio
                            </Link>

                            <Link className="hover-border-colors" to="/">
                                Portfolio
                            </Link>
                            
                            <Link className="hover-border-colors" to="/">
                                Portfolio
                            </Link>
                            
                            <Link className="hover-border-colors" to="/">
                                Portfolio
                            </Link>
                        </nav>
                    </div>
                </div>
            </div>
            
            {/* <a href="https://www.linkedin.com/in/raul-delianu-00b292165/" target="_blank">
                <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/DRDeveloppeur" target="_blank">
                <i className="fab fa-github"></i>
            </a>
            <a href="https://twitter.com/Delianu1" target="_blank">
                <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.facebook.com/raul.delianu" target="_blank">
                <i className="fab fa-facebook-f"></i>
            </a> */}
        </header>
    );
}

export default Header;