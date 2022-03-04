import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Avatar, Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Paper, Slide, SvgIcon } from "@mui/material";
import { forwardRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Input from "../Form/Input";
import InputDate from "../Form/InputDate";
import InputImage from "../Form/InputImage";
import InputSelect from "../Form/InputSelect";
import InputSelectMultiple from "../Form/InputSelectMultiple";
import InputText from "../Form/InputText";
import "./style.css";

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="right" ref={ref} {...props} />;
});
const TransitionAdd = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const Admin = ({projects}) => {
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    const [openAdd, setOpenAdd] = useState(false);
    const { images } = useSelector(state => {
        return {
            images: state.imagesUploadedReducer.images,
        }
    })
    const skills = ["PHP", "SQL", "HTML", "CSS"]
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClickOpenAdd = () => {
        setOpenAdd(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const handleCloseAdd = () => {
        setOpenAdd(false);
    };
    const logout = () => {
        localStorage.clear();
        window.location.href = "/";
    }
    const submitFormAddProduct = (e) => {
        e.preventDefault();
        const form = new FormData(e.target);

        const newProject = {
            "date": form.get("date"),
            "name": form.get("name"),
            "skillsSelected": form.get("skills"),
            "client": form.get("client"),
            "category": form.get("category"),
            "github": form.get("github"),
            "site": form.get("site"),
            "images": images,
            "description": form.get("description")
        }

        console.log(newProject);
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
                        Bonjour { JSON.parse(localStorage.user).displayName }
                        <Button style={{padding: '5px', width: "fit-content"}} onClick={logout} variant='text' color='error' title="Déconnexion">
                            <FontAwesomeIcon icon="fas fa-power-off" />
                        </Button>
                    </DialogTitle>

                    <DialogContent>
                        <DialogContentText fontSize={15} color="red" align="center" id="alert-dialog-slide-description">

                            <Button variant="outlined" onClick={handleClickOpenAdd} color="primary">
                                <FontAwesomeIcon icon="fas fa-plus" style={{marginRight: "15px"}} />
                                Ajouter un projet    
                            </Button>                                
                        </DialogContentText>
                    </DialogContent>
                    
                    <DialogActions>
                        <Button variant="outlined" onClick={handleClose} color="error">Close</Button>
                    </DialogActions>
                </Dialog>

                <Dialog
                    open={openAdd}
                    TransitionComponent={TransitionAdd}
                    keepMounted
                    maxWidth="xl"
                    onClose={handleCloseAdd}
                    PaperProps={{
                        style: {
                          backgroundColor: "#212428",
                          color: "#fff"
                        },
                    }}
                    aria-describedby="alert-dialog-slide-description"
                >
                    <DialogTitle fontSize={22} style={{margin: "auto",display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                        Ajouter un projet
                    </DialogTitle>

                    <DialogContent color="white">
                        <form onSubmit={(e) => {submitFormAddProduct(e)}} style={{margin: "10px 0"}}>
                            <div className="grid-spaceBetween">
                                <div className="col-3_md-6" data-push-left="off-9_md-0" style={{paddingBottom: "30px"}}>
                                    <InputDate name="date" label="Date" />
                                </div>
                                <div className="col-3_md-6_sm-12">
                                    <Input label="Nom du projet" required={true} name="name" />
                                </div>
                                <div className="col-3_md-6_sm-12" data-push-right="off-3_md-0">
                                    <Input label="Nom du client" name="client" required={true} />
                                </div>
                                <div className="col-3_md-6_sm-12">
                                    <InputSelect label="Catégorie" name="category" />
                                </div>

                                <div className="col-3_md-6_sm-12">
                                    <Input label="Lien vers le github" name="github" />
                                </div>
                                <div className="col-3_md-6_sm-12" data-push-right="off-3_md-0">
                                    <Input label="Lien vers le site" name="site" />
                                </div>
                                <div className="col-3_md-6_sm-12">
                                    <InputSelectMultiple label="Téchnologie utilisé" name="skills" names={skills} />
                                </div>
                                <div className="col-6_sm-12">
                                    <InputImage required={true} name="images" />
                                </div>
                                <div className="col-6_sm-12">
                                    <InputText label="Déscription" name="description" />
                                </div>
                            </div>

                            <Button variant="outlined" type="submit" color="primary">
                                Ajouter
                            </Button>
                        </form>


                    </DialogContent>
                    
                    <DialogActions>
                        <Button variant="outlined" onClick={handleCloseAdd} color="error">Close</Button>
                    </DialogActions>
                </Dialog>
            </div>
        </div>
    );
}

export default Admin;