import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Slide } from "@mui/material";
import { getAuth, getRedirectResult, GoogleAuthProvider, signInWithPopup, signInWithRedirect } from "firebase/auth";
import { forwardRef, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Login from "../../services/login-request.service";
import "./style.css";

const Auth = ({projects}) => {
    const provider = new GoogleAuthProvider();
    const gAuth = getAuth();
    const dispatch = useDispatch();
    const { user } = useSelector(state => {
        return {
            user: state.authReducer.user,
        }
    })

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