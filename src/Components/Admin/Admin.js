import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Slide } from "@mui/material";
import { forwardRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../../Action/actions";
import Login from "../../services/login-request.service";
import "./style.css";

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="right" ref={ref} {...props} />;
});

const Admin = ({projects}) => {
    const dispatch = useDispatch();
    const { user } = useSelector(state => {
        return {
            user: state.authReducer.user,
        }
    })

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const logout = () => {
        localStorage.clear();
        window.location.href = "/";
    }

    return (
        <div className="auth">
            <div className="auth-btn" onClick={handleClickOpen}>
                <span>
                    <FontAwesomeIcon icon="fas fa-user-cog" />
                </span>
            </div>

            <div className="container">
                <Dialog
                    open={open}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={handleClose}
                    PaperProps={{
                        style: {
                          backgroundColor: "#212428",
                          color: "#fff"
                        },
                    }}
                    aria-describedby="alert-dialog-slide-description"
                >
                    <DialogTitle fontSize={22} style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                        Projets 
                        <Button style={{padding: '5px', width: "fit-content"}} onClick={logout} variant='text' color='error' title="Déconnexion">
                            <FontAwesomeIcon icon="fas fa-power-off" />
                        </Button>
                    </DialogTitle>

                    <DialogContent>
                        <DialogContentText fontSize={15} color="red" align="center" id="alert-dialog-slide-description">
                            Attention, la connexion ne sert qu'à l'administrateur et au proprietaire du site !

                            <Button style={{marginTop: "30px"}} onClick={logout} variant="contained" color="success">
                                <FontAwesomeIcon icon="fab fa-google-plus-g" style={{paddingRight: "15px"}} />
                                Connexion
                            </Button>
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button variant="outlined" onClick={handleClose} color="error">Close</Button>
                    </DialogActions>
                </Dialog>
            </div>
        </div>
    );
}

export default Admin;