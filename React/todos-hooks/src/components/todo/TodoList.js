import React, { useContext, useState } from 'react';
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
  //Handle handleSubmit()
  const handleSubmit = (e) => {
    e.preventDefault();
    if (editMode) {
      dispatch({ type: 'edit', payload: { ...editTodo, text: todoText } });
      setEditMode(false);
      setEditTodo(null);
    } else {
      dispatch({ type: 'add', payload: todoText });
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
                Edit
              </td>
              <td
                onClick={() => {
                  dispatch({ type: 'delete', payload: todo }); //payload holds the actual data in the redux action object
                }}>
                Delete
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default TodoList;
