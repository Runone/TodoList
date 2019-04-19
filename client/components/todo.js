import React, { Component } from 'react';

const TodoList = props => (
  <ul>
      {
          props.items.map(item => <li key={item.toString()}>{item}</li>)
      }
  </ul>

);

export default TodoList