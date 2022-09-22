import { initializeApp, getApps, FirebaseApp } from 'firebase/app';
import {
    getFirestore,
    connectFirestoreEmulator,
    Firestore,
} from 'firebase/firestore';
import { getAuth, connectAuthEmulator, Auth } from 'firebase/auth';
import { firebaseConfig } from './config';

type FirebaseConnections = {
    firebaseApp: FirebaseApp;
    auth: Auth;
    firestore: Firestore;
};

export const initialize = () => {
    const firebaseApp = initializeApp(firebaseConfig);
    const auth = getAuth(firebaseApp);
    const firestore = getFirestore(firebaseApp);

    return { firebaseApp, auth, firestore };
};

export const connectToEmulators = ({
    firebaseApp,
    auth,
    firestore,
}: FirebaseConnections) => {
    if (location.hostname === 'localhost') {
        connectAuthEmulator(auth, 'http://localhost:9099', {
            disableWarnings: false,
        });
        connectFirestoreEmulator(firestore, 'localhost', 8080);
    }
    return { firebaseApp, auth, firestore };
};

export const getFirebase = () => {
    const [existingApp] = getApps();
    if (existingApp) return initialize();
    return connectToEmulators(initialize());
};