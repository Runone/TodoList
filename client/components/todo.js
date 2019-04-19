import React, { Component } from 'react';

const TodoList = props => (
  <ul>
      {
          props.items.map((item, index) => <li onClick={() => props.removeTodo(index)} key={item.toString()}>{item}</li>)
      }
  </ul>

);

export default TodoList