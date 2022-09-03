// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Item from './components/item';
import useList from "./hooks/useList";

const initialList = [
  { name: 'tomato', calorie: 20 },
  { name: 'rice', calorie: 30 },
  { name: 'candy', calorie: 100 }
];

function App() {
  const { list, removeItem, saveItem } = useList(initialList);
  const [editable, setEditable] = useState(false);

  function removeItemHandle(e) {
    removeItem(e.target.name);
  };

  function makeEditableHandle() {
    setEditable(true);
  };

  function keyPressHandle(e, i) {
    if (e.key === "Enter") {
      setEditable(!editable);
      console.log(saveItem(i, e.target.value))

    }
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <h2>Grocery List</h2>
        {
          list.map((v, k) => {
            <Item
              item={v}
              key={`${k}${v.name}${v.calorie}`}
            
            />
            {console.log('item end')}
          }
            // {<Item
            //   item={v}
            //   key={`${k}${v.name}${v.calorie}`}
            //   onClick={removeItemHandle}
            //   editable={editable}
            //   onDoubleClick={makeEditableHandle}
            //   onKeyPress={keyPressHandle}
            //   index={k}
            // />}
          )
        }
      </header>

    </div>
  );
}

export default App;