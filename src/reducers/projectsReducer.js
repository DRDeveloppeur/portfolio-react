import ActionsType from "../Action/action.enum";

let stateInit = {
    projects: [],
    images: "",
    loading: false
}

const projectsReducer = (state = stateInit, action = {}) => {
    const {id, title} = action;
    let projects = [];

    switch (action.type) {
        case ActionsType.ADD_NEW_PROJECT:
            projects = [...state.projects, action.payload];
            // return {...state.projects, projects: projects};
            return {...state, projects: projects};
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