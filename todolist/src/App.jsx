import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

export default function App() {
  const[gorev, setGorev]= useState("");
  const[liste, setListe]= useState([]);

  const ekle=() => {
    if(gorev.trim() !==""){
      setListe([...liste, gorev]);
      setGorev("");
    }
  };
  return(
    <div>
      <h2>Yapılacaklar listesi</h2>
      <input type="text" value={gorev} onChange={(e => setGorev(e.target.value))}
      placeholder='Görev yaz' 
      />
      <button onClick={ekle}>Ekle</button>

      <ul>
        {liste.map((item, index)=>(
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}


