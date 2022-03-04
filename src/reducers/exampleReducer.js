import ActionsType from "../Action/action.enum";

let stateInit = {
    user: [],
    permission:false,
    loading: false
}

const addNewProjectReducer = (state = stateInit, action = {}) => {
    let user = [];

    switch (action.type) {
        case ActionsType.AUTH:
            user = [...state.user, action.user];
            return {...state, user};
        default:
            return state;
    }
}

export default addNewProjectReducer;