import React, { Component } from 'react';
import "../../app.css";

const TodoList = props => (
  <ul>
      {
        props.items.map((item, index) => <li key={item.id} id={item.id}> <input type="checkbox"/> <label>{item.input}</label><button onClick={() => props.removeTodo(index)}>Delete</button></li>)
      }
  </ul>

);

export default TodoList