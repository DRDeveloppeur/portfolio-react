import { getDatabase, ref, child, get } from "firebase/database";
import app from './firebase-init.service';

const dbRef = ref(getDatabase(app));

const getUserDB = (userId) => {
    get(child(dbRef, `users/${userId}`)).then((snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.val());
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });
}
export default getUserDB;