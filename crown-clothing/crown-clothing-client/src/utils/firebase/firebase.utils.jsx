// import {initializeApp} from 'firebase/app'; // to setup a firebase instance.



// import {
//     getFirestore,
//     doc,
//     collection,
//     writeBatch,
//     query,
//     getDocs
// } from 'firebase/firestore';

// // Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyDVMJ-mOm91FTvcPGxA8AUkOapIcG2EpnY",
//     authDomain: "crown-clothing-db-567da.firebaseapp.com",
//     projectId: "crown-clothing-db-567da",
//     storageBucket: "crown-clothing-db-567da.appspot.com",
//     messagingSenderId: "695858890871",
//     appId: "1:695858890871:web:6f950d985a0fc13e51de72"
// };
  
// // Initialize Firebase
// initializeApp(firebaseConfig);


// //setting up the firestore db
// export const db = getFirestore();

// export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
//     const collectionRef = collection(db, collectionKey);
//     const batch = writeBatch(db);

//     objectsToAdd.forEach(element => {
//         const docRef = doc(collectionRef,element.title.toLowerCase());
//         batch.set(docRef,element);
//     });

//     await batch.commit()
//     console.log('done');

// }

// export const getCategoriesAndDocuments = async () => {
//     const collectionRef = collection(db,'categories');

//     const q = query(collectionRef);
//     const querySnapShot = await getDocs(q);
//     const categoryMap = querySnapShot.docs.reduce((acc,docSnapShot)=>{
//         const {title, items} = docSnapShot.data();
//         acc[title] = items;
//         return acc;

//     },{});
//     return categoryMap;

// }



