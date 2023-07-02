import { createContext, useContext, useState, useEffect } from "react";

import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
    onAuthStateChanged,

} from "firebase/auth";
import {
    getFirestore,
    collection,
    addDoc,
    getDocs,
    getDoc,
    doc,
    query,
    where,
} from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { app } from "../../Firebase/firebase";

const FirebaseContext = createContext(null);



export const useFirebase = () => useContext(FirebaseContext);


const firebaseAuth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

const googleProvider = new GoogleAuthProvider();

export const FirebaseProvider = (props) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        onAuthStateChanged(firebaseAuth, (user) => {
            if (user) {
                setUser(user);

            }
            else setUser(null);
        });
    }, []);

    const signupUserWithEmailAndPassword = (email, password) =>
        createUserWithEmailAndPassword(firebaseAuth, email, password);

    const singinUserWithEmailAndPass = (email, password) =>
        signInWithEmailAndPassword(firebaseAuth, email, password);

    const signinWithGoogle = () => signInWithPopup(firebaseAuth, googleProvider);

    const handleCreateNewListing = async (name, isbn, price, cover) => {
        const imageRef = ref(storage, `uploads/images/${Date.now()}-${cover.name}`);
        const uploadResult = await uploadBytes(imageRef, cover);
        return await addDoc(collection(firestore, "User"), {
            name,
            isbn,
            price,
            imageURL: uploadResult.ref.fullPath,
            userID: user.uid,
            userEmail: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL,
        });
    };
    const listAllUser = () => {
        return getDocs(collection(firestore, "User"));
    };
    const adminlistAllUser = () => {
        return getDocs(collection(firestore, "Halwais"));
    };

    const getUserById = async (id) => {
        const docRef = doc(firestore, "User", id);
        const result = await getDoc(docRef);
        return result;
    };

    const getImageURL = (path) => {
        return getDownloadURL(ref(storage, path));
    };

    const placeOrder = async (bookId, qty) => {
        const collectionRef = collection(firestore, "Orders");
        const result = await addDoc(collectionRef, {
            userID: user.uid,
            userEmail: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL,
            qty: Number(qty),
        });
        return result;
    };

    const fetchMyUser = async (userId) => {
        const collectionRef = collection(firestore, "User");
        const q = query(collectionRef, where("userID", "==", userId));

        const result = await getDocs(q);
        return result;
    };

    const getOrders = async (id) => {
        const collectionRef = collection(firestore, "User", id, "orders");
        const result = await getDocs(collectionRef);
        return result;
    };
    const fetchMyOrders = async (userId) => {
        const collectionRef = collection(firestore, "Orders");
        const q = query(collectionRef, where("userID", "==", userId));

        const result = await getDocs(q);
        return result;
    };
    const listAllOrders = () => {
        return getDocs(collection(firestore, "Orders"));
    };

    const searchUser = async (keyword) => {
        const firestore = getFirestore(app);
        const collectionRef = collection(firestore, 'User');
        const q = query(collectionRef, where('User', '==', keyword));
        const querySnapshot = await getDocs(q);
        return querySnapshot;
    };
    const checkLIstUser = () => {
        return getDocs(collection(firestore, "ItemList"));
    };

    return (
        <FirebaseContext.Provider
            value={{
                signinWithGoogle,
                signupUserWithEmailAndPassword,
                singinUserWithEmailAndPass,
                handleCreateNewListing,
                listAllUser,
                getImageURL,
                getUserById,
                placeOrder,
                fetchMyUser,
                listAllOrders,
                getOrders,
                fetchMyOrders,
                searchUser,
                adminlistAllUser,
                checkLIstUser,
                user
            }}
        >
            {props.children}
        </FirebaseContext.Provider>
    );
};