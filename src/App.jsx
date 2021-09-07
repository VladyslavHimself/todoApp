import React from 'react';


// items
import classes from './App.module.scss';

// components
import Todo from "./components/Todo/Todo";

function App() {
    return (
    <div className={classes.app}>
        <Todo />
    </div>
  );
}

export default App;
