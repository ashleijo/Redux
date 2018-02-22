import React from 'react';
import Item from './Item';

export default (props) => {
  const todos = props.todos.map((todo, i) => <Item todo={todo} key={i} index={i} />);
  return (
    <ul>
      { todos }
    </ul>
  );
};
