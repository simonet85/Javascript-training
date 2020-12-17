import React, { useEffect, useContext, useState } from 'react';
import axios from 'axios';
import useAPI from './api/useAPI';
import { v4 as uuidv4 } from 'uuid';
import { TodosContext } from './../../App';
import { Table, Form, Button } from 'react-bootstrap';

const TodoList = () => {
  //using the useContext() we receiving state and dispatch from App.js
  const { state, dispatch } = useContext(TodosContext);
  //Using useState()
  const [todoText, setTodoText] = useState('');
  //Edit state
  const [editMode, setEditMode] = useState(false);
  const [editTodo, setEditTodo] = useState(null);

  //button switch between 'Edit' and 'Add'
  const buttonTitle = editMode ? 'Edit' : 'Add';

  //using the endpoint
  const endpoint = 'http://localhost:3000/todos/';
  const savedTodos = useAPI(endpoint);

  //Use useEffect()
  useEffect(() => {
    dispatch({ type: 'get', payload: savedTodos });
  }, [savedTodos]);

  //Handle handleSubmit()
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editMode) {
      await axios.patch(endpoint + editTodo.id, { text: todoText });
      dispatch({ type: 'edit', payload: { ...editTodo, text: todoText } });
      setEditMode(false);
      setEditTodo(null);
    } else {
      const newTodo = { id: uuidv4(), text: todoText };
      const response = await axios.post(endpoint, newTodo);
      dispatch({ type: 'add', payload: newTodo });
    }
    setTodoText('');
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Control
            type='text'
            placeholder='Enter To Do'
            onChange={(event) => setTodoText(event.target.value)}
            value={todoText}
          />
        </Form.Group>
        <Button variant='primary' type='submit'>
          {buttonTitle}
        </Button>
      </Form>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>To do</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {state.todos.map((todo) => (
            <tr key={todo.id}>
              <td>{todo.text}</td>
              <td
                onClick={() => {
                  setTodoText(todo.text);
                  setEditMode(true);
                  setEditTodo(todo);
                }}>
                <Button variant='link'>Edit</Button>
              </td>
              <td
                onClick={async () => {
                  await axios.delete(endpoint + todo.id);
                  dispatch({ type: 'delete', payload: todo }); //payload holds the actual data in the redux action object
                }}>
                <Button variant='link'>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default TodoList;
