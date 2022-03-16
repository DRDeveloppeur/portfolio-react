import { child, getDatabase, ref, set, update } from "firebase/database";
import { loading, updateProject } from "../Action/actions";
import app from './firebase-init.service';

const dbRef = ref(getDatabase(app));

const updateProjectRequest = async (project, id) => await update(child(dbRef, "projects/"+id), project);
const updateImagesRequest = async (id, index, name, result) => await set(child(dbRef, "projects/"+id+"/images/"+index+"/file/"+name), result);

const updateProjectDB = (project, id) => {
    const updateProjectThunk = async (dispatch, getState) => {
        dispatch(loading(true));
        await updateProjectRequest(project, id);
        project.images.forEach((image, index) => {
            for(var name in image.file) {
                if (typeof(image.file[name]) === "string" || typeof(image.file[name]) === "number") {
                    updateImagesRequest(id, index, name, image.file[name])
                }
            }
        });
        dispatch(updateProject(project, id));
        dispatch(loading(false));
    }
    return updateProjectThunk;
}
export default updateProjectDB;