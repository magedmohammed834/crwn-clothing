import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAS7JN0Cw4dAshCzGRrKQGS50YXtIWTq4U",
  authDomain: "crwn-clothing-v2-e4801.firebaseapp.com",
  projectId: "crwn-clothing-v2-e4801",
  storageBucket: "crwn-clothing-v2-e4801.appspot.com",
  messagingSenderId: "803397354748",
  appId: "1:803397354748:web:df3bf2697bbe18067a8379",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);
    const userSnapshot = await getDoc(userDocRef);


    if(!userSnapshot.exists()) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            });
        } catch(error) {
            console.log('Error creating the user', error.message);
        }
    }
    return userDocRef;
}
