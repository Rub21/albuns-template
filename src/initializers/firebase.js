import firebase from 'firebase';
import { firebaseConfig } from '../config';
const config = firebaseConfig;
firebase.initializeApp(config);
export default firebase;
