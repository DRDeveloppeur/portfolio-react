let stateInit = {
    logs: []
}

const logReducer = (state = stateInit, action = {}) => {
    let logs = [];
    switch (action.type) {
        case "ADD_LOG":
            logs = [...state.logs, action.log];
            return {...state, logs: logs};
        default:
            return state;
    }
}

export default logReducer;