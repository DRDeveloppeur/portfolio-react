import { child, get, getDatabase, ref } from "firebase/database";
import { getProjects, loading } from "../Action/actions";
import app from './firebase-init.service';

const dbRef = ref(getDatabase(app));

const getProjectsRequest = async () => await get(child(dbRef, "projects/")).then(data => data.val());

const getProjectsDB = () => {
    const getProjectsThunk = async (dispatch, getState) => {
        dispatch(loading(true));
        let result = await getProjectsRequest();
        result && dispatch(getProjects(result));
        dispatch(loading(false));
    }
    return getProjectsThunk;
}
export default getProjectsDB;