import { useState, createContext, useContext } from "react";
import UserContext from '@/Context/UserContext';
export default function Component5() {
    const {user,setUser} = useContext(UserContext);
    // setUser("rg")
    return (
      <>
        <h1>Component 5</h1>
        <h2>{`Hello ${user} again!`}</h2>
      </>
    );
  }