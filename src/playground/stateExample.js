// import logo from './logo.svg';
import './App.scss';
import React, { useState, useCallback } from 'react';
import NameTag from '../components/nameTag'

const initialNames = [
  { firstName: "john", lastName: "johnson" },
  { firstName: "peter", lastName: "peterson" },
  { firstName: "jill", lastName: "jillson" },
]

function App() {
  // first a getter, second is a setter. Sets the initial value to 21
  const [names, setNames] = useState(initialNames);
  const [currentName, setCurrentName] = useState('')
  const [viewChange, setViewChange] = useState('')

  const handleChange = useCallback(
    (event) => {
      console.log('callback called')
      setCurrentName(event.target.value)
    }
    , []
  );

  const setNameHandle = () => {
    const structure = {
      firstName: currentName,
      lastName: currentName
    }
    setNames(names.concat(structure))
    setCurrentName('')
  }


  return (
    <div className="App">
      <header className="App-header">
        <h1>State Hook</h1>
      </header>
      <div>
        {console.log(names)}
        {names.map((v, i) => <NameTag key={`${i}${v.firstName}${v.lastName}`} firstName={v.firstName} lastName={v.lastName} />)}
        {viewChange}

        {/* 
        <NameTag firstName={names[0].firstName} lastName={names[0].lastName}/>
        <NameTag firstName={names[1].firstName} lastName={names[1].lastName}/>
        <NameTag firstName={names[2].firstName} lastName={names[2].lastName}/>
      */}
        <input name="name" onChange={handleChange} />
        <button onClick={setNameHandle} >click me</button>
        <button onClick={() => {
          setViewChange('fuck man')
        }} >s me</button>
      </div>
    </div>
  );
}

export default App;