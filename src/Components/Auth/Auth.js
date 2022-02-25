import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useDispatch } from "react-redux";
import Login from "../../services/login-request.service";
import "./style.css";

const Auth = () => {
    const provider = new GoogleAuthProvider();
    const gAuth = getAuth();
    const dispatch = useDispatch();

    const loginWithGoogle = () => {
        signInWithPopup(gAuth, provider).then(result => dispatch(Login(result.user)) );
    }

    return (
        <div className="auth">
            <div className="auth-btn" onClick={loginWithGoogle}>
                <span><FontAwesomeIcon icon="fab fa-google" /></span>
            </div>
        </div>
    );
}

export default Auth;