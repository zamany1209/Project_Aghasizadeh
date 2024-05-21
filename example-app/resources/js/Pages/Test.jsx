import { useState, createContext, useContext } from "react";
import Component5 from "@/Components/UI/Component5";
import UserContext from '@/Context/UserContext';
import data from '../../data/Data.json'

export default function Component1() {
  const [user, setUser] = useState(data);
  return (
    <UserContext.Provider value={user}>
      <h1>{`Hello ${user.Admin_component.components_panel[0].name}!`}</h1>
      <Component2 />
    </UserContext.Provider>
  );
}

function Component2() {
  return (
    <>
      <h1>Component 2</h1>
      <Component3 />
    </>
  );
}

function Component3() {
  return (
    <>
      <h1>Component 3</h1>
      <Component4 />
    </>
  );
}

function Component4() {
  return (
    <>
      <h1>Component 4</h1>
      <Component5 />
    </>
  );
}


