import {
    collection,
    CollectionReference,
    DocumentData,
} from 'firebase/firestore';
import { getFirebase } from '../firebase';
import Admin from './models/admin.model';

export const createCollection = <T = DocumentData>(collectionName: string) => {
    const { firestore } = getFirebase();

    return collection(firestore, collectionName) as CollectionReference<T>;
}

export const adminCol = createCollection<Admin>("admin");