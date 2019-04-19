import React, { Component } from 'react';

const TodoList = props => (
  <ul>
      {
          props.items.map((item, index) => <li key={item.toString()}>{item} <button onClick={() => props.removeTodo(index) }>Delete</button></li>)
      }
  </ul>

);

export default TodoList