import React, { useReducer } from 'react';
import TodoList from './components/todo/TodoList';
import { v4 as uuidv4 } from 'uuid';
import './App.css';

// Initialise initialState
const initialState = {
  todos: [
    { id: 1, text: 'finishing writing hooks chapter' },
    { id: 2, text: 'Play with kids' },
    { id: 3, text: 'read bible' },
  ],
};

//Create the centralized store
export const TodosContext = React.createContext();

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    // we make use of TodosContext to make state and dispatch available to child components
    <TodosContext.Provider value={{ state, dispatch }}>
      <TodoList />
    </TodosContext.Provider>
  );
}

// reducer function : reducer will take some state, and based on action, it will figure out, what to with our state

function reducer(state, action) {
  switch (action.type) {
    case 'delete':
      const filteredTodoState = state.todos.filter(
        (todo) => todo.id !== action.payload.id
      );
      return { ...state, todos: filteredTodoState };

    case 'add':
      //add new todo onto array
      const newTodo = { id: uuidv4(), text: action.payload };
      //spread our state and assign todos
      const addedTodos = [...state.todos, newTodo];

      return { ...state, todos: addedTodos }; //Return a new array

    case 'edit':
      //current todo or todo to be edited
      const updatedTodo = { ...action.payload };
      //get the index of the the selected element
      const updatedTodoIndex = state.todos.findIndex(
        (t) => t.id === action.payload.id
      );
      const updatedTodos = [
        //Get the items before the selected element
        ...state.todos.slice(0, updatedTodoIndex),
        //element to be updated
        updatedTodo,
        //get the items after the selected element
        ...state.todos.slice(updatedTodoIndex + 1),
      ];

      return { ...state, todos: updatedTodos }; //Return a new array
    default:
      return initialState;
  }
}

export default App;
