import React, { createContext, useEffect, useState } from "react";
import { auth } from "./firebase.config";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

export const AuthContext = createContext(null);
const Authprovider = ({ children }) => {
  const [user, setUser] = useState(null);
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
  const authValue = { creatUser, login, user, google, LogOut };
  return (
    <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
  );
};

export default Authprovider;
