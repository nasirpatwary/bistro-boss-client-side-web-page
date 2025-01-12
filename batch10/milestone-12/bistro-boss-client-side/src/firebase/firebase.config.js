import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
const firebaseConfig = {
apiKey: import.meta.env.VITE_SCRETE_apiKey,
authDomain: import.meta.env.VITE_SCRETE_authDomain,
projectId: import.meta.env.VITE_SCRETE_projectId,
storageBucket: import.meta.env.VITE_SCRETE_storageBucket,
messagingSenderId: import.meta.env.VITE_SCRETE_messagingSenderId,
appId: import.meta.env.VITE_SCRETE_appId
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);