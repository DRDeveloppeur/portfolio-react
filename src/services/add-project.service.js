import { child, get, getDatabase, ref, set } from "firebase/database";
import { addNewProject, loading } from "../Action/actions";
import app from './firebase-init.service';

const dbRef = ref(getDatabase(app));

const addProjectRequest = async (project, id) => await set(child(dbRef, "projects/"+id), project);

const addProjectDB = (project, id) => {
    const addProjectThunk = async (dispatch, getState) => {
        dispatch(loading(true));
        await addProjectRequest(project, id);
        dispatch(addNewProject(project));
        dispatch(loading(false));
    }
    return addProjectThunk;
}
export default addProjectDB;