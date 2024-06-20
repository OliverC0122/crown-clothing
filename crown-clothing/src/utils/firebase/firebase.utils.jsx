import {initializeApp} from 'firebase/app'; // to setup a firebase instance.

import { 
    getAuth,
    signInWithRedirect, 
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword, 
} from 'firebase/auth';  


import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDVMJ-mOm91FTvcPGxA8AUkOapIcG2EpnY",
    authDomain: "crown-clothing-db-567da.firebaseapp.com",
    projectId: "crown-clothing-db-567da",
    storageBucket: "crown-clothing-db-567da.appspot.com",
    messagingSenderId: "695858890871",
    appId: "1:695858890871:web:6f950d985a0fc13e51de72"
};
  
// Initialize Firebase
initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth()
export const signInWithGooglePopUp = () => signInWithPopup(auth,provider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth,provider);



//setting up the firestore db
export const db = getFirestore();


export const createUserDocumentFromAuth = async (userAuth, addtionalInfo) => {  
    if (!userAuth) return;

    const userDocRef = doc(db,'users',userAuth.uid);
    console.log(userDocRef);

    const userSnapShot = await getDoc(userDocRef);
    console.log(userSnapShot);
    console.log(userSnapShot.exists());

    if (!userSnapShot.exists()){
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try{
            await setDoc(userDocRef,
                {
                    displayName,
                    email,
                    createdAt,
                    ...addtionalInfo
                }
            )

        }catch(err){
            console.log('error creating the user',err);
        }

    }
    return userDocRef;
}

export const createAuthUserWithEmailAndPassword = async (email,password) => {
    if (!email || !password) return;

    return await createUserWithEmailAndPassword(auth,email,password);
}

export const SignInAuthUserWithEmailAndPassword = async (email,password) => {
    if (!email || !password) return;

    return await signInWithEmailAndPassword(auth,email,password);
}

