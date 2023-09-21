'use client'
import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/firebase';


const Contextapp = createContext();

const ContextProvider = ({ children }) => {


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const [user, setUser] = useState([])

  const onLogin = async (e) => {
    e.preventDefault(); 

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log(user); 
      setUser(user) 
    } catch (err) {
      const errMessage = err.message;
      console.error(errMessage, err.code); 
      setError(errMessage); 
    } finally {
      setEmail(''); 
      setPassword(''); 
    }
  };


  const onSignup = async (e) => {
    e.preventDefault(); 

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user; 
      console.log(user); 
      setUser(user) 
    } catch (err) {
      const errMessage = err.message;
      console.error(errMessage, err.code); 
      setError(errMessage);
    } finally {
      setEmail(''); 
      setPassword(''); 
    }
  };

  return (
    <Contextapp.Provider value={{ email, password, setEmail, setPassword, error, setError, onLogin,onSignup,  user }}>
      {children}
    </Contextapp.Provider>
  );
};

export { ContextProvider, Contextapp };
