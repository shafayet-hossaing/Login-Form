import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebse.config";
const InitializeAuthentication = () => {
    initializeApp(firebaseConfig)
}
export default InitializeAuthentication