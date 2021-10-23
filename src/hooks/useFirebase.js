import initializeAthentication from "../Firebase/firebase-init"
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";


initializeAthentication()

const googleProvider = new GoogleAuthProvider();

const useFirebase = () => {


  const [user, setUser] = useState(null);

  const auth = getAuth();

  // sign in wiht google
  const signInUsingGoogle = () => {
    return signInWithPopup(auth, googleProvider);

  }

  //create user with email and pass
  const registerUserWithEmailAndPassword = (email, password) => {
    console.log('from hook', email, password)
    return createUserWithEmailAndPassword(auth, email, password)

  }

  //sign in with email and pass
  const signInUserWithEmailAndPassword = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)

  }

  // sign out
  const logOut = () => {
    signOut(auth)
      .then(() => {
        setUser(null)
      })
  }

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)
      }
    });
  }, [])

  return {
    user,
    registerUserWithEmailAndPassword,
    signInUserWithEmailAndPassword,
    signInUsingGoogle,
    logOut

  }

};

export default useFirebase;