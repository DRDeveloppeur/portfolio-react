import { child, getDatabase, ref, remove } from "firebase/database";
import { deleteProject, loading } from "../Action/actions";
import app from './firebase-init.service';

const dbRef = ref(getDatabase(app));

const deleteProjectRequest = async (id) => await remove(child(dbRef, "projects/"+id));

const deleteProjectDB = (id) => {
    const deleteProjectThunk = async (dispatch, getState) => {
        dispatch(loading(true));
        await deleteProjectRequest(id);
        dispatch(deleteProject(id));
        dispatch(loading(false));
    }
    return deleteProjectThunk;
}
export default deleteProjectDB;