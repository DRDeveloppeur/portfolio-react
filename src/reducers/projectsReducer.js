import ActionsType from "../Action/action.enum";

let stateInit = {
    projects: [],
    images: "",
    loading: false
}

const projectsReducer = (state = stateInit, action = {}) => {
    let newProjects = [];

    switch (action.type) {
        case ActionsType.ADD_NEW_PROJECT:
            newProjects = [...state.projects, action.project];
            newProjects = newProjects.filter((n) => (n !== undefined && n !== false) );
            return {...state, projects: newProjects};

        case ActionsType.GET_PROJECTS:
            if (action.projects) {
                newProjects = action.projects;
                // console.log(newProjects);
                if (newProjects.length > 1) newProjects = newProjects.filter(function(n){ return (n !== undefined && n !== false) });
                // console.log(newProjects);
                return {...state, projects: newProjects};
            }
            return {...state};

        case ActionsType.UPDATE_PROJECTS:
            newProjects = state.projects.map(project => project.id === action.id ? action.project : project).filter(n => n !== undefined)
            return {...state, projects: newProjects};

        case ActionsType.DELETE_PROJECTS:
            newProjects = state.projects.filter(project => action.id !== project.id).filter(n => n !== undefined && n !== false);
            return {...state, projects: newProjects};
            
        // case ActionsType.DELETE_TODO:
        //     projects = state.projects.filter((toDo) => toDo.id !== id);
        //     return {...state, projects: projects};
        // case ActionsType.UPDATE_TODO:
        //     projects = state.projects.map((toDo) => {
        //         return toDo.id === id ? {...toDo, title} : toDo;
        //     });
        //     return {...state, projects : projects};
        // case ActionsType.CONFIRM_UPDATE_TODO:
        //     projects = state.projects.map((toDo) => {
        //         return toDo.id === id ? {...toDo, isEditing : false} : toDo;
        //     });
        //     return {...state, projects : projects};
        // case ActionsType.CANCEL_UPDATE_TODO:
        //     projects = state.projects.map((toDo) => {
        //         return toDo.id === id ? {...toDo, isEditing : false, title} : toDo;
        //     });
        //     return {...state, projects : projects};
        // case ActionsType.EDIT_MODE_TODO:
        //     projects = state.projects.map((toDo) => {
        //         return toDo.id === id ? {...toDo, isEditing : true} : toDo;
        //     });
        //     return {...state, projects : projects};
        // case ActionsType.CHECKED_TODO:
        //     projects = state.projects.map((toDo) => {
        //         return toDo.id === id ? {...toDo, checked : !toDo.checked} : toDo;
        //     })
        //     return {...state, projects: projects};
        // case ActionsType.LOAD_TODO:
        //     projects = action.payload.map((toDo) => {
        //         return {...toDo};
        //     })
        //     return {...state, projects: projects};
        case ActionsType.LOADING:
            return {...state, loading: action.payload}
        default:
            return state;
    }
}

export default projectsReducer;