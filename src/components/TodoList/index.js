import React from 'react';
import { useSelector } from 'react-redux';
import { ListItem } from '../../components';

export const TodoList = () => {
  const tasks = useSelector(state => state.todo.tasks);
  return (
    <>
      <h2>todo list</h2>
      {tasks.map((task, index) => (
        <li key={index}>
          <ListItem task={task} taskIndex={index} />
        </li>
      ))}
    </>
  );
};
