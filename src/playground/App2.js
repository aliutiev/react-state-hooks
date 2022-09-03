// import logo from './logo.svg';
import './App.css';
import React, { useState, useCallback } from 'react';
import Item from '../components/item';

const initialList = [
  { name: 'tomato', calorie: 20 },
  { name: 'rice', calorie: 30 },
  { name: 'candy', calorie: 100 }
];

function App() {

  //object handled separately than the rest
  const [list, setList] = useState(initialList);

  const [editable, setEditable] = useState(false);

  const removeUnhealthyHandle = (e) => {
    // shallow copy
    // const copyList = [... list];

    const filteredList = list.filter(v => v.calorie <= 50);
    setList(filteredList);
  };

  function removeItemHandle(e) {
    // console.dir(e.target.name);
    const removedlist = list.filter(v => v.name != e.target.name);
    setList(removedlist);
  };

  function makeEditableHandle (){
    setEditable(true);
  };
  
  function keyPressHandle (e, i) {
    if(e.key === "Enter"){
      setEditable(!editable);
      const copyList = {...list}
      copyList[i].name = e.target.value;
    }
  }
  return (
    <div className='App'>
      <header className='App-header'>
        <h2>Grocery List</h2>

        {
          list.map((v, k) => <Item
            item={v}
            key={`${k}${v.name}${v.calorie}`}
            onClick={removeItemHandle} 
            editable={editable}
            onDoubleClick={makeEditableHandle}
            onKeyPress={keyPressHandle}
            index={k}
            />)
        }

        <button className='remove-button' onClick={removeUnhealthyHandle}>Remove Unhealthy</button>
      </header>

    </div>
  );
}

export default App;