import { getDatabase, ref, child, onValue, get } from "firebase/database";
import { auth, loading } from "../Action/actions";
import app from './firebase-init.service';

const dbRef = ref(getDatabase(app));
const getUserRequest = async () => await get(child(dbRef, "users/")).then(data => data.val());

const getUsersDB = () => {
	const getUserThunk = async (dispatch, getState) => {
        dispatch(loading(true));
        let response = await getUserRequest();
        dispatch(auth(response));
        dispatch(loading(false));
    }
    return getUserThunk;
}
export default getUsersDB;