import { useRef, useState } from 'react';
import './App.css';
import { Main } from './component/main/Main';
import { Navbar } from './component/navbar/Navbar';

function App() {
  const [bool, setBool] = useState(true);
  const navref = useRef();
  function handle() {
    if (bool) {
      navref.current.style.display = "block";
      setBool(false);
    }
    else {
      navref.current.style.display = "none";
      setBool(true);
    }
  }
  return (
    <div className="app">
      <Navbar navref={navref} onclick = {handle}/>
      <Main onclick={handle} />
    </div>
  );
}

export default App;
