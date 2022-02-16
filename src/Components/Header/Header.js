import { Link } from "react-router-dom";
import "./style.css";

const Header = () => {
    return (
        <header class="main-header">
            <Link class="logo-holder" to="/">
                <img src="./images/header/logo.png" alt="" />
            </Link>
            {/* nav-button-wrap */}
            <div class="nav-button but-hol">
                <span class="nos"></span>
                <span class="ncs"></span>
                <span class="nbs"></span>
                <div class="menu-button-text">Menu</div>
            </div>
            {/* nav-button-wrap end */}
            <div class="header-social">
                <ul>
                    <li>
                        <Link to="/">
                            <i class="fab fa-linkedin"></i>
                        </Link>
                        {/* <a href="https://www.linkedin.com/in/raul-delianu-00b292165/" target="_blank">
                            <i class="fab fa-linkedin"></i>
                        </a> */}
                    </li>

                    <li>
                        <a href="https://github.com/DRDeveloppeur" target="_blank">
                            <i class="fab fa-github"></i>
                        </a>
                    </li>

                    <li>
                        <a href="https://twitter.com/Delianu1" target="_blank">
                            <i class="fab fa-twitter"></i>
                        </a>
                    </li>
                    
                    <li>
                        <a href="https://www.facebook.com/raul.delianu" target="_blank">
                            <i class="fab fa-facebook-f"></i>
                        </a>
                    </li>
                </ul>
            </div>
            {/* showshare */}
            <div class="show-share showshare">
                <i class="fal fa-retweet"></i>
                <span>Share This</span>
            </div>
            {/* showshare end */}
        </header>
    );
}

export default Header;