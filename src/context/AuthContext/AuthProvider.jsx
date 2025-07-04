import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../../firebase/firebase.init";
import axios from "axios";

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    const unsubscriber = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        setUser(currentUser);
        setLoading(false);
        if (currentUser?.email) {
          const userData = { email: currentUser.email };
          axios
            .post("http://localhost:5000/jwt", userData, {
              withCredentials: true,
            })
            .then((res) => {
              console.log("token after jwt", res.data);
              const token = res.data.token;
              localStorage.setItem("token", token);
            })
            .catch((error) => {
              console.log(error.message);
            });
        }
        console.log("user ache");
        // ...
      } else {
        // User is signed out
        // ...
        console.log("user nai");
      }
    });
    return () => {
      unsubscriber();
    };
  }, []);

  const logOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        setUser(null);
        console.log("sign out successful");
      })
      .catch((error) => {
        // An error happened.
        console.log(error.message);
      });
  };

  const authInfo = {
    loading,
    user,
    createUser,
    loginUser,
    logOut,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
