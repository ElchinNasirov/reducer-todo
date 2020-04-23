import React, { useReducer, useState } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import "./components/Todo.css";
import TodoList from './components/TodoList';
import { reducer, initialState } from "./reducers/reducer";

function App() {
  const [newTodo, setNewTodo] = useState("");
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChanges = e => {
    setNewTodo(e.target.value)
  }

  const addTodo = e => {
    e.preventDefault();

    dispatch({
      type: "ADD_TODO", payload: newTodo
    })
  };

  const toggleItem = item => {
    dispatch({
      type: "TOGGLE_COMPLETED", payload: item
    })
  }

  const clearCompleted = event => {
    event.preventDefault();

    dispatch({
      type: "CLEAR"
    })
  }

  return (
    <div className="App">
      <TodoForm
        addTodo={addTodo}
        clearCompleted={clearCompleted}
        handleChanges={handleChanges}
      />
      <TodoList
        info={state}
        toggleItem={toggleItem}
      />
    </div>
  );
}
export default App;