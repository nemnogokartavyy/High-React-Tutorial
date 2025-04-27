// ⊗jsrtPmHkCUp
// 1

import { useEffect, useState } from "react";
import styles from './App.module.css';
import { MyContext } from "./components/MyContext";
import Parent from "./components/Parent";

function App() {

  const [age, setAge] = useState(50);

  return (
    <MyContext.Provider value={age}>
      <Parent />
      <button onClick={() => setAge(age / 2)}>Click</button>
    </MyContext.Provider>
  )

}

export default App;
