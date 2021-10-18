import firebaseInitialzetion from '../Firebase/firebase.init';
import {getAuth, signInWithPopup,GoogleAuthProvider,onAuthStateChanged,signOut,GithubAuthProvider ,FacebookAuthProvider,createUserWithEmailAndPassword,signInWithEmailAndPassword} from "firebase/auth";
import { useState } from 'react';

// __________import part end____________
firebaseInitialzetion()

const useFirebase = () => {
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
     const [users,setUsers] = useState({})  
     const [error,setError] = useState('')
     const [email,setEmail] = useState('')
     const [password,setPassword] = useState('')

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

                          //___________Github Sign in part____________

             const gitHubProvider = new GithubAuthProvider();
             
         const handelGithub = () => {
          signInWithPopup(auth, gitHubProvider)
          .then((result) => {
            const user = result?.user;
            setUsers(user);
          }).catch((error) => {
            setError(error.message)
           
          });
         }        
         
             //___________FACEBOOK Sign in part____________
          
       const fbProvider = new FacebookAuthProvider();
       const handalerFacebookSignIn = () => {
        signInWithPopup(auth, fbProvider)
        .then((result) => {
          const user = result.user;
          setUsers(user)
        })

        .catch((error) => {
          setError(error.message)
          setError(error.code)

        });
      
       }    

        //_________Create Email and  password part_______________

        const emailChange = (e) => {
              setEmail(e.target.value);
        }
        const passwordChange = (e) => {
            //  e.target.value.length < 6 ?
            //  setError(error.message)
            //  :
             setPassword( e.target.value)
        }
        const generatEamilPasswords = (e) => {
            e.preventDefault()
             createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
              const users = result.user;
              setUsers(users)
            })
            .catch((error) => {
              setError(error.message)
            });
        }


        //__________-**Log in Email and  password part**-_______________

          const logInWithEmailAndPassword = () => {
            signInWithEmailAndPassword(auth, email, password)
              .then((result) => {
                const users = result.user;
                console.log(users);
              })
              .catch((error) => {
                setError(error.message)
              });
          }

                      // sign Out
              // const haldelCreatePassAndEmailLogOut = () => {
              //   signOut(auth).then(() => {
              //     setUsers({})
              //   }).catch((error) => {
              //     setError(error.message)
              //   });
              // }

    return {
        users,error,email,password,
        handalerGoogleSignIn,
        handelSignOut,handelGithub, handalerFacebookSignIn,
        emailChange,passwordChange,generatEamilPasswords,logInWithEmailAndPassword
    }
};

export default useFirebase;