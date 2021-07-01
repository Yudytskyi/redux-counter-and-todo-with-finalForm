import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { Input } from '../forms/formControl';
import styles from './styles.module.sass';

const TaskItem = props => {
  const { index } = props;
  const Form = ({ handleSubmit }) => {
    return (
      <form onSubmit={handleSubmit}>
        <Field
          type="checkbox"
          name="taskItemCheckbox"
          checked={task.isDone}
          onChange={doneTask}
          component={Input}
        />
        <button type="submit" onClick={removeTask}>
          X
        </button>
      </form>
    );
  };

  const TaskItemForm = reduxForm({ form: 'taskItemForm' })(Form);
  const { task, doneTask, removeTask } = props;
  return (
    <li className={styles.taskItem} key={index}>
      <h3>{task.name}</h3>
      <TaskItemForm />
    </li>
  );
};

export default TaskItem;
