import firebaseInitialzetion from '../Firebase/firebase.init';
import {getAuth, signInWithPopup,GoogleAuthProvider,onAuthStateChanged,signOut } from "firebase/auth";
import { useState } from 'react';

// __________import part end____________
firebaseInitialzetion()

const useFirebase = () => {
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
     const [users,setUsers] = useState({})  
     const [error,setError] = useState('')

          //  _____google sign in__________
      
    const handalerGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
        .then((result) => {
            const user = result.user;
            setUsers(user);
    
  }).catch((error) => {
    setError(error.message);
  });

    };
            // ___On Auth state Changted part______

    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUsers(user)
      } else {
        setError('')
      }
    });
              //____________Sign Out part________________//
      const handelSignOut = () => {
        signOut(auth).then(() => {
          setUsers({})
        }).catch((error) => {
          setError(error.message)
        });
      }

    return {
        users,error,
        handalerGoogleSignIn,
        handelSignOut
    }
    
};

export default useFirebase;