import { getDatabase, ref, set } from "firebase/database";
import app from './firebase-init.service';

const addUserDB = (userId, name, email, imageUrl) => {
    const db = getDatabase(app);

    set(ref(db, 'users/' + userId), {
        username: name,
        email: email,
        profile_picture : imageUrl
    });
}

export default addUserDB;
// import { loading, loadTodo } from "../Action/actions";
// import postRequest from "./post-request.service";

// const getProjectsData = async (data = { user_id: "" }) => await postRequest('/todo/read', data);
// const getProjects = (data) => {
//     const getProjectsThunk = async (dispatch, getState) => {
//         dispatch(loading(true));
//         let response = await getProjectsData(data);
//         dispatch(loadTodo(response.todos));
//         dispatch(loading(false));
//     }

//     return getProjectsThunk;
// }
// export default getProjects;