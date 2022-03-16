import { useDispatch, useSelector } from "react-redux";
import * as React from 'react';
import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { visuallyHidden } from '@mui/utils';
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControlLabel, Slide, Switch } from "@mui/material";
import InputImage from "../Form/InputImage";
import InputText from "../Form/InputText";
import InputSelectMultiple from "../Form/InputSelectMultiple";
import Input from "../Form/Input";
import InputSelect from "../Form/InputSelect";
import InputDate from "../Form/InputDate";
import addProjectDB from "../../services/add-project.service";
import updateProjectDB from "../../services/update-project.service";
import deleteProjectDB from "../../services/delete-project.service";

const ListProjects = () => {
    const dispatch = useDispatch();
    const { projects, images } = useSelector(state => {
        return {
            projects: state.projectsReducer.projects,
            images: state.imagesUploadedReducer.images,
        }
    })
    const skills = ["JS", "JQuery", "PHP", "SQL", "HTML", "CSS", "LESS", "SCSS", "Symfony", "AngularJs", "VueJs", "React"];
    const [openAdd, setOpenAdd] = React.useState(false);
    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('name');
    const [selected, setSelected] = React.useState([]);
    const [updating, setUpdating] = React.useState(false);
    const [projectUpdating, setProjectUpdating] = React.useState({});
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleClickOpenAdd = () => {
        setOpenAdd(true);
    };
    const handleCloseAdd = () => {
        setOpenAdd(false);
        setUpdating(false);
        setProjectUpdating({});
    };
    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };
    const handleClick = (id) => {
        const selectedIndex = selected.indexOf(id);
        let newSelected = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, id);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1),
            );
        }
        setSelected(newSelected);
    };
    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
            const newSelecteds = projects.map((n) => n.id);
            setSelected(newSelecteds);
            return;
        }
        setSelected([]);
    };
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };
    const handleChangeIsActive = (project, id) => {
        project.isActive = !project.isActive;
        dispatch(updateProjectDB(project, id));
    };
    const deleteProjects = (items) => {
        projects.map((project, index) => {
            items.map(item => {item === project.id && dispatch(deleteProjectDB(item))})
            // items.map(item => {item === project.id && console.log(item)})
        })
        setSelected([]);
    };
    const submitFormAddProduct = (e) => {
        e.preventDefault();
        const form = new FormData(e.target);

        let newProjects = projects.filter((n) => (n !== undefined && n !== false) );
        const id = (newProjects.length > 0) ? newProjects[newProjects.length-1].id+1 : 0;
        const newProject = {
            "id": id,
            "name": form.get("name"),
            "client": form.get("client"),
            "category": form.get("category"),
            "skills": form.get("skills"),
            "description": form.get("description"),
            "date": form.get("date"),
            "github": form.get("github"),
            "site": form.get("site"),
            "images": images,
            "isActive": true
        }
        dispatch(addProjectDB(newProject, id));
        handleCloseAdd();
    };
    const updateProjectMode = (project) => {
        setOpenAdd(true);
        setUpdating(true);
        setProjectUpdating(project)
        // const form = new FormData(e.target);

        // form.get("name").set(project.name);
        // form.get("client").set(project.client);
        // form.get("category").set(project.category);
        // form.get("skills").set(project.skills);
        // form.get("description").set(project.description);
        // form.get("date").set(project.date);
        // form.get("github").set(project.github);
        // form.get("site").set(project.site);
        // images = project.images;
    }
    const validUpdateProject = (e, project) => {
        e.preventDefault();
        const form = new FormData(e.target);
        
        const newProject = {
            "id": project.id,
            "name": form.get("name"),
            "client": form.get("client"),
            "category": form.get("category"),
            "skills": form.get("skills"),
            "description": form.get("description"),
            "date": project.date,
            "github": form.get("github"),
            "site": form.get("site"),
            "images": images,
            "isActive": project.isActive
        }
        dispatch(updateProjectDB(newProject, project.id));
        setUpdating(false);
        setProjectUpdating({});
        setOpenAdd(false);
    }

    const showProjects = () => {
        let newProjects = projects.filter(function(n){ return (n !== undefined && n !== false) });
        const id = (newProjects.length > 0) ? newProjects[newProjects.length-1].id+1 : 0;
        console.log(newProjects, projects, id);
    }

    const isSelected = (name) => selected.indexOf(name) !== -1;

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - projects.length) : 0;

    return ( 
        <Box sx={ { width: '100%' } }>
            <Paper sx={ { width: '100%', mb: 2 } }>
                <EnhancedTableToolbar numSelected={ selected.length } selected={selected} deleteProjects={deleteProjects} />
                <TableContainer>
                    <Table sx={ { minWidth: 750 } } aria-labelledby="tableTitle" size={'medium'}>
                        <EnhancedTableHead numSelected={ selected.length } order={ order } orderBy={ orderBy } onSelectAllClick={ handleSelectAllClick } onRequestSort={ handleRequestSort } rowCount={ projects.length } /> 
                        <TableBody> 
                            {
                                stableSort(projects, getComparator(order, orderBy)).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((project, index) => {
                                    if (project) {
                                        const isItemSelected = isSelected(project.id);
                                        const labelId = `enhanced-table-checkbox-${project.id}`;
    
                                        return ( 
                                            <TableRow hover role="checkbox" aria-checked={ isItemSelected } tabIndex={-1} key={project.id} selected={ isItemSelected }>
                                                <TableCell padding="checkbox">
                                                    <Checkbox color="primary" onClick={() => handleClick(project.id)} checked={ isItemSelected } inputProps={ { 'aria-labelledby': labelId, } } />
                                                </TableCell> 
    
                                                <TableCell component="th" id={labelId} scope="row" padding="none"> 
                                                    { project.id } - { project.name } - { index }
                                                </TableCell>
    
                                                <TableCell align="right" >
                                                    { project.category }
                                                </TableCell>
    
                                                <TableCell align="right" >
                                                    { project.client }
                                                </TableCell>
    
                                                <TableCell align="right" >
                                                    { project.github ? (<a href={project.github} title={project.github} target="_blank" rel="noopener noreferrer">Lien github</a>) : "Pas de github" }
                                                </TableCell>
    
                                                <TableCell align="right" >
                                                    { project.site ? (<a href={project.site} title={project.site} target="_blank" rel="noopener noreferrer">Lien du site</a>) : "Pas de lien" }
                                                </TableCell>
    
                                                <TableCell align="right" >
                                                    { project.skills }
                                                </TableCell>
    
                                                <TableCell align="right" >
                                                    <FormControlLabel  control={<Switch checked={project.isActive} onChange={() => handleChangeIsActive(project, project.id)} />} label=""/>
                                                </TableCell>
    
                                                <TableCell align="right" >
                                                    <Button onClick={() => updateProjectMode(project)}>
                                                        <FontAwesomeIcon icon="far fa-edit" fontSize={20} />
                                                    </Button>
                                                </TableCell>
                                            </TableRow>
                                        );
                                    }
                                })
                            }
                            {
                                emptyRows > 0 && ( 
                                    <TableRow style={ { height: (53) * emptyRows, } }>
                                        <TableCell colSpan={ 6 } />
                                    </TableRow>
                                )
                            } 
                        </TableBody>
                    </Table>
                </TableContainer> 
                <TablePagination rowsPerPageOptions={[5, 10, 25]} component="div" count={projects.length} rowsPerPage={rowsPerPage} page={page} onPageChange={handleChangePage} onRowsPerPageChange={handleChangeRowsPerPage} />
            </Paper>

            <Button onClick={handleClickOpenAdd}>
                <FontAwesomeIcon icon="fas fa-plus" style={{marginRight: "15px"}} />
                Ajouter un projet
            </Button>

            <Dialog open={openAdd} TransitionComponent={TransitionAdd} keepMounted maxWidth="xl" onClose={handleCloseAdd}
                PaperProps={{
                    style: {
                        backgroundColor: "#212428",
                        color: "#fff"
                    },
                }} aria-describedby="alert-dialog-slide-description" >
                <DialogTitle fontSize={22} style={{margin: "auto",display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                    Ajouter un projet
                </DialogTitle>

                <DialogContent color="white">
                    <form onSubmit={updating ? (e) => validUpdateProject(e, projectUpdating) : (e) => submitFormAddProduct(e)} style={{margin: "10px 0"}}>
                        <div className="grid-spaceBetween">
                            <div className="col-3_md-6" data-push-left="off-9_md-0" style={{paddingBottom: "30px"}}>
                                { !updating && <InputDate name="date" label="Date" lastValue={updating && projectUpdating.date} /> }
                            </div>
                            <div className="col-3_md-6_sm-12">
                                <Input label="Nom du projet" required={true} name="name" lastValue={updating && projectUpdating.name} />
                            </div>
                            <div className="col-3_md-6_sm-12" data-push-right="off-3_md-0">
                                <Input label="Nom du client" name="client" required={true} lastValue={updating && projectUpdating.client} />
                            </div>
                            <div className="col-3_md-6_sm-12">
                                <InputSelect label="Catégorie" name="category" lastValue={updating && projectUpdating.category} />
                            </div>
                            <div className="col-3_md-6_sm-12">
                                <Input label="Lien vers le github" name="github" lastValue={updating && projectUpdating.github} />
                            </div>
                            <div className="col-3_md-6_sm-12" data-push-right="off-3_md-0">
                                <Input label="Lien vers le site" name="site" lastValue={updating && projectUpdating.site} />
                            </div>
                            <div className="col-3_md-6_sm-12">
                                <InputSelectMultiple label="Téchnologie utilisé" name="skills" names={skills} lastValue={updating && projectUpdating.skills} />
                            </div>
                            <div className="col-6_sm-12">
                                <InputImage required={true} name="images" lastValue={updating && projectUpdating.images} />
                            </div>
                            <div className="col-6_sm-12">
                                <InputText label="Déscription" name="description" lastValue={updating && projectUpdating.description} />
                            </div>
                        </div>

                        <div className="grid-cener">
                            <Button variant="outlined" type="submit" color="primary" style={{margin: "auto"}}>
                                { updating ? "Mettre à jour" : "Ajouter" }
                            </Button>
                        </div>
                    </form>
                </DialogContent>
                
                <DialogActions>
                    <Button variant="outlined" onClick={handleCloseAdd} color="error">Close</Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
}

export default ListProjects;

function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

function getComparator(order, orderBy) {
    return order === 'desc' ?
        (a, b) => descendingComparator(a, b, orderBy) :
        (a, b) => -descendingComparator(a, b, orderBy);
}

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly

function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) {
            return order;
        }
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}

const headCells = [{
        index: 'name',
        numeric: false,
        disablePadding: true,
        label: 'Nom',
    },
    {
        index: 'category',
        numeric: true,
        disablePadding: false,
        label: 'Categories',
    },
    {
        index: 'client',
        numeric: true,
        disablePadding: false,
        label: 'Client',
    },
    {
        index: 'github',
        numeric: true,
        disablePadding: false,
        label: 'Lien github',
    },
    {
        index: 'site',
        numeric: true,
        disablePadding: false,
        label: 'Lien du site',
    },
    {
        index: 'skills',
        numeric: true,
        disablePadding: false,
        label: 'Coder en',
    },
    {
        index: 'isActive',
        numeric: true,
        disablePadding: false,
        label: 'Activé',
    },
    {
        index: 'modify',
        numeric: true,
        disablePadding: false,
        label: 'Modifier',
    },
];
const TransitionAdd = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

function EnhancedTableHead(props) {
    const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
    const createSortHandler = (property) => (event) => {
        onRequestSort(event, property);
    };

    return ( 
    <TableHead>
        <TableRow>
            <TableCell padding="checkbox">
                <Checkbox color="primary" indeterminate={ numSelected > 0 && numSelected < rowCount } checked={ rowCount > 0 && numSelected === rowCount } onChange={ onSelectAllClick } inputProps={ { 'aria-label': 'select all', } } /> 
            </TableCell> 
            {
                headCells.map((headCell) => ( 
                    <TableCell key={ headCell.index } align={ headCell.numeric ? 'right' : 'left' } padding={ headCell.disablePadding ? 'none' : 'normal' } sortDirection={ orderBy === headCell.index ? order : false }>
                        <TableSortLabel active={ orderBy === headCell.index } direction={ orderBy === headCell.index ? order : 'asc' } onClick={ createSortHandler(headCell.index) }>
                            { headCell.label }
                            { orderBy === headCell.index ? (
                                <Box component="span" sx={ visuallyHidden }>
                                    { order === 'desc' ? 'sorted descending' : 'sorted ascending' }
                                </Box>
                                ) : null
                            }
                        </TableSortLabel> 
                    </TableCell>
                ))
            }
        </TableRow> 
    </TableHead>
    );
}

EnhancedTableHead.propTypes = {
    numSelected: PropTypes.number.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    onSelectAllClick: PropTypes.func.isRequired,
    order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired,
};

const EnhancedTableToolbar = ({ numSelected, selected, deleteProjects }) => {
    return ( 
        <Toolbar sx={ { pl: { sm: 2 }, pr: { xs: 1, sm: 1 }, ...(numSelected > 0 && { bgcolor: (theme) => alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity), }), } }>
        {
            numSelected > 0 ? ( 
                <Typography sx={ { flex: '1 1 100%' } } color="inherit" variant="subtitle1" component="div">
                    { numSelected } { numSelected > 1 ? "projets sélectionnés" : "projet sélectionné" }
                </Typography>
            ) : ( 
                <Typography sx={ { flex: '1 1 100%' } } variant="h6" id="tableTitle" component="div">
                    Projets 
                </Typography>
            )
        }

        {
            numSelected > 0 ? ( 
                <Tooltip title="Delete">
                    <IconButton onClick={() => deleteProjects(selected)}>
                        <FontAwesomeIcon icon="fas fa-trash-alt" />
                    </IconButton>
                </Tooltip>
            ) : ( 
                <Tooltip title="Filter list">
                    <IconButton>
                        <FontAwesomeIcon icon="fas fa-filter" />
                    </IconButton>
                </Tooltip>
            )
        }
        </Toolbar>
    );
};

EnhancedTableToolbar.propTypes = {
    numSelected: PropTypes.number.isRequired,
};