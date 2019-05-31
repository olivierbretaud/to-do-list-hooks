import React from 'react';
import './style/css/App.css';

import { TodoContextProvider } from "./contexts/TodoContext"
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import Footer from "./components/Footer";

function App() {
  return (
      <TodoContextProvider>
        <div className="App">
            <header className="App-header">
            <h1>To do hooks</h1>
            <AddTodo />
            <TodoList />
            <Footer />
            </header>
        </div>
      </TodoContextProvider>
  );
}

export default App;
