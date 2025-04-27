// ⊗jsrtPmHkUED
// 1

import { useEffect, useState } from "react";
import styles from './App.module.css';

function App() {

  const [userName, setUserName] = useState('');
  const [arrNames, setArrNames] = useState(() => {
    const arr = localStorage.getItem('arrNames');
    return arr ? JSON.parse(arr) : [];
  });

  function addUserNameInNames() {
    if (userName.length < 1) return;
    setArrNames([...arrNames, userName.trim()]);
    setUserName('');
  }

  useEffect(() => {
    localStorage.setItem('userName', userName);
  }, [userName]);

  useEffect(() => {
    localStorage.setItem('arrNames', JSON.stringify(arrNames))
  }, [arrNames]);

  let list = arrNames.map((elem, index) => {
    return <li key={index} id={index}>{elem}</li>
  });

  return (
    <div className={styles.container}>
      <h1>Тайтл</h1>
      <input value={userName} onChange={event => setUserName(event.target.value)} />
      <button onClick={() => addUserNameInNames()}>Добавить</button>
      <button onClick={() => { localStorage.clear(); setArrNames([]) }}>Очистить</button>
      <ul>
        {list}
      </ul>
    </div>
  );

}

export default App;
