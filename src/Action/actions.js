import ActionsType from "./action.enum";

export const auth = (data) => ({type: ActionsType.AUTH, user: data});
export const loading = (data) => ({type: ActionsType.LOADING, payload: data});

// export const add = (data) => ({type: ActionsType.ADD_TODO, toDo: data});
// export const addLog = (data) => ({type: ActionsType.ADD_LOG, log: data});
// export const remove = (id, title) => ({type: ActionsType.DELETE_TODO, id, title});
// export const update = (id, title) => ({type: ActionsType.UPDATE_TODO, id, title});
// export const checked = (id) => ({type: ActionsType.CHECKED_TODO, id});
// export const editing = (id) => ({type: ActionsType.EDIT_MODE_TODO, id});
// export const confirmUpdate = (id) => ({type: ActionsType.CONFIRM_UPDATE_TODO, id});
// export const cancelUpdate = (id, oldTitle) => ({type: ActionsType.CANCEL_UPDATE_TODO, id, title: oldTitle});
// export const loadTodo = (data) => ({type: ActionsType.LOAD_TODO, payload: data});