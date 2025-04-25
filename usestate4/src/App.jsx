import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [firstName , setFirstname]= useState('emirhan');
  const [names , setNames]= useState(['emirhan','yunus','sefa','emoji'])
  return(
    <div>
      {firstName}
      <br />
      {names}
      <button onClick={()=>{setFirstname('Yunus')}}>İsmi Değiştir</button>
    </div>
  )
}

export default App
