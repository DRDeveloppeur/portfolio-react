import { getDatabase } from "firebase/database";
import { useDispatch } from "react-redux";
import { imagesUploaded } from "../Action/actions";
import app from './firebase-init.service';

const addImagesUploaded = (data) => {
    const db = getDatabase(app);

    const dispatch = useDispatch;
    dispatch(imagesUploaded(data));
}

export default addImagesUploaded;
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