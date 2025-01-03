/* eslint-disable react/prop-types */
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { useState } from "react";
import { createContext } from "react";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();

  //   sign up user using email and password
  const signUp = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //   sign in user using email and password
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //   sign in user using google
  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // logout user
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  //   update user profile
  const updateUserProfile = (name, image) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: image,
    });
  };

  const authInfo = {
    user,
    setUser,
    loading,
    setLoading,
    signUp,
    signIn,
    googleSignIn,
    signOut: logOut,
    updateUserProfile,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
