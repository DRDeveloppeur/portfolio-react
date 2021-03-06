import { child, getDatabase, ref, set } from "firebase/database";
import { addNewProject, loading } from "../Action/actions";
import app from './firebase-init.service';

const dbRef = ref(getDatabase(app));

const addProjectRequest = async (project, id) => await set(child(dbRef, "projects/"+id), project);
const updateImagesRequest = async (id, index, name, result) => await set(child(dbRef, "projects/"+id+"/images/"+index+"/file/"+name), result);



const addProjectDB = (project, id) => {
    const addProjectThunk = async (dispatch, getState) => {
        dispatch(loading(true));
        await addProjectRequest(project, id);
        project.images.forEach((image, index) => {
            for(var name in image.file) {
                if (typeof(image.file[name]) === "string" || typeof(image.file[name]) === "number") {
                    updateImagesRequest(id, index, name, image.file[name])
                }
            }
        });
        dispatch(addNewProject(project));
        dispatch(loading(false));
    }
    return addProjectThunk;
}
export default addProjectDB;