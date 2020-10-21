import React, { useState } from 'react';
import Hook from '../withHooks/Hook';
import NoHook from '../withoutHooks/NoHook';
import './App.css';

function App() {
  const [showHook, setShowHook] = useState(false);

  return (
    <div className="App">
      <div>
          <button className="buttonHook" onClick={() =>setShowHook(!showHook)}>
            {showHook ? 'Hide' : 'Show'} Hook!
          </button>
      </div>
      <p>Learn React</p>
      {showHook 
      ? 
        <div>
          <p>Todo com Hook</p>
          <Hook text="Botão Hook"/>
        </div>   
      : 
        <div>
          <p>Todo sem Hook</p>
          <NoHook text="Add Todo" />
        </div>
      }          
    </div>
  );
}

export default App;
