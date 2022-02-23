import ActionsType from "../Action/action.enum";

let stateInit = {
    toDoList: [],
    loading: false
}

const projectsReducer = (state = stateInit, action = {}) => {
    const {id, title} = action;
    let toDoList = [];

    switch (action.type) {
        case ActionsType.ADD_TODO:
            toDoList = [...state.toDoList, action.payload];
            return {...state, toDoList};
        case ActionsType.DELETE_TODO:
            toDoList = state.toDoList.filter((toDo) => toDo.id !== id);
            return {...state, toDoList: toDoList};
        case ActionsType.UPDATE_TODO:
            toDoList = state.toDoList.map((toDo) => {
                return toDo.id === id ? {...toDo, title} : toDo;
            });
            return {...state, toDoList : toDoList};
        case ActionsType.CONFIRM_UPDATE_TODO:
            toDoList = state.toDoList.map((toDo) => {
                return toDo.id === id ? {...toDo, isEditing : false} : toDo;
            });
            return {...state, toDoList : toDoList};
        case ActionsType.CANCEL_UPDATE_TODO:
            toDoList = state.toDoList.map((toDo) => {
                return toDo.id === id ? {...toDo, isEditing : false, title} : toDo;
            });
            return {...state, toDoList : toDoList};
        case ActionsType.EDIT_MODE_TODO:
            toDoList = state.toDoList.map((toDo) => {
                return toDo.id === id ? {...toDo, isEditing : true} : toDo;
            });
            return {...state, toDoList : toDoList};
        case ActionsType.CHECKED_TODO:
            toDoList = state.toDoList.map((toDo) => {
                return toDo.id === id ? {...toDo, checked : !toDo.checked} : toDo;
            })
            return {...state, toDoList: toDoList};
        case ActionsType.LOAD_TODO:
            toDoList = action.payload.map((toDo) => {
                return {...toDo};
            })
            return {...state, toDoList};
        case ActionsType.LOADING:
            return {...state, loading: action.payload}
        default:
            return state;
    }
}

export default projectsReducer;