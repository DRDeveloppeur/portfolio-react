import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, ButtonGroup, Dialog, DialogActions, DialogContent, DialogTitle, Slide } from "@mui/material";
import { forwardRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ListProjects from "./ListProjects";
import "./style.css";

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="right" ref={ref} {...props} />;
});
const TransitionListProjects = forwardRef(function Transition(props, ref) {
    return <Slide direction="left" ref={ref} {...props} />;
});

const Admin = () => {
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    const [openListProjects, setOpenListProjects] = useState(false);
    const { images, projects } = useSelector(state => {
        return {
            images: state.imagesUploadedReducer.images,
            projects: state.projectsReducer.projects,
        }
    })
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClickOpenListProjects = () => {
        setOpenListProjects(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const handleCloseListProjects = () => {
        setOpenListProjects(false);
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
                <Dialog open={open} TransitionComponent={Transition} keepMounted onClose={handleClose}
                    PaperProps={{
                        style: {
                          backgroundColor: "#212428",
                          color: "#fff"
                        },
                    }} aria-describedby="alert-dialog-slide-description" >
                    <DialogTitle fontSize={22} style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                        Bonjour { JSON.parse(localStorage.user).displayName }

                        <Button style={{padding: '5px', width: "fit-content"}} onClick={logout} variant='text' color='error' title="Déconnexion">
                            <FontAwesomeIcon icon="fas fa-power-off" />
                        </Button>
                    </DialogTitle>

                    <DialogContent>
                        <ButtonGroup variant="outlined" aria-label="outlined primary button group">
                            <Button onClick={handleClickOpenListProjects}>
                                Liste des produits
                            </Button>
                        </ButtonGroup>
                    </DialogContent>
                    
                    <DialogActions>
                        <Button variant="outlined" onClick={handleClose} color="error">Close</Button>
                    </DialogActions>
                </Dialog>

                <Dialog open={openListProjects} fullWidth={true} maxWidth="xl" TransitionComponent={TransitionListProjects} keepMounted onClose={handleCloseListProjects} PaperProps={ { style: { backgroundColor: "#212428", color: "#fff" }, }} aria-describedby="alert-dialog-slide-description" >
                    <DialogTitle fontSize={22} style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                        Projets
                    </DialogTitle>

                    <DialogContent>
                        <ListProjects />
                    </DialogContent>
                    
                    <DialogActions>
                        <Button variant="outlined" onClick={handleCloseListProjects} color="error">Close</Button>
                    </DialogActions>
                </Dialog>
            </div>
        </div>
    );
}

export default Admin;