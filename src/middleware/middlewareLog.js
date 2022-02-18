const middlewareLog = store => next => action => {
    switch (action.type) {
        case "ADD":
            const logAdd = {
                date: new Date(),
                message: "Tâche '"+action.toDo.title+"' ajouter !"
            }
            store.dispatch({ type: "ADD_LOG", log: logAdd });
            break;
        case "DELETE":
            const logDelete = {
                date: new Date(),
                message: "Tâche '"+action.title+"' supprimer !"
            }
            store.dispatch({ type: "ADD_LOG", log: logDelete });
            break;
        default:
            break;
    }
    return next(action);
}

export default middlewareLog;