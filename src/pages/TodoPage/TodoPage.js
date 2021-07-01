import React from 'react';
import { TaskList, TaskForm } from '../../components';
const TodoPage = props => {
  const { tasks, data, addTask, updateTask, doneTask, removeTask } = props;

  return (
    <article>
      <a href={'/'}>Home</a>
      <h1>Todo list</h1>
      <TaskForm onSubmit={addTask} />
      <TaskList
        updateTask={updateTask}
        doneTask={doneTask}
        removeTask={removeTask}
      />
      <h2></h2>
    </article>
  );
};

export default TodoPage;
