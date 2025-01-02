import React, { createContext, useEffect, useState } from "react";
import { auth } from "./firebase.config";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

export const AuthContext = createContext(null);
const Authprovider = ({ children }) => {
  const [user, setUser] = useState(null);
  console.log(user);
  const provider = new GoogleAuthProvider();

  const creatUser = (email, pass) => {
    return createUserWithEmailAndPassword(auth, email, pass);
  };
  const login = (email, pass) => {
    return signInWithEmailAndPassword(auth, email, pass);
  };
  const google = () => {
    return signInWithPopup(auth, provider);
  };
  const LogOut = () => {
    return signOut(auth);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      return unsubscribe();
    };
  }, []);
  const profile = (name, photo) => {
    console.log(name, photo, auth);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };
  const authValue = { creatUser, login, user, google, LogOut, profile };
  return (
    <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
  );
};

export default Authprovider;
