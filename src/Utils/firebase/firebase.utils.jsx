import {initializeApp} from 'firebase/app';

import {getFirestore,doc,getDoc,setDoc} from 'firebase/firestore'

import {getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAe0uBQtlWB0YMIE2rA-zmtrZ76ALs-Bvs",
    authDomain: "pappy-clothing-project.firebaseapp.com",
    projectId: "pappy-clothing-project",
    storageBucket: "pappy-clothing-project.appspot.com",
    messagingSenderId: "909583033516",
    appId: "1:909583033516:web:1aaf8e6bb7567bdef5eb09"
  };
  
  
  const firebaseApp = initializeApp(firebaseConfig);
  
  const provider= new GoogleAuthProvider()
  provider.setCustomParameters({prompt:'select_account'})

  export const auth = getAuth();
  export const signInWithGooglePopup=()=>signInWithPopup(auth,provider)

  export const db= getFirestore();

  export const createUserDocumentFromAuth= async(userAuth)=> {const userDocRef= doc(db,'users',userAuth.uid);
  const userSnapshot= await getDoc(userDocRef);
  console.log(userSnapshot.exists())

  if(!userSnapshot.exists()){const {displayName,email}= userAuth;
  const createdAt=new Date();

  try { await setDoc(userDocRef,{displayName,email,createdAt})}
   catch (error) { console.log('error creating the user',error.message)}
  }
return userDocRef;
}
