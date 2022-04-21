// Firebase imports

import { getFirestore, collection, doc, getDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const db = getFirestore();
const auth = getAuth();
const user = auth.currentUser;
const docRef = doc(collection(db, "users"));
const docSnap = await getDoc(docRef);
const fetchUser = () => {
  return () => {
    if (docSnap.exists()) {
      dispatch({ type: USER_STATE_CHANGE, currentUser: docSnap.data() });
    } else {
      console.log("Data does not exist");
    }
  };
};

export default fetchUser;
