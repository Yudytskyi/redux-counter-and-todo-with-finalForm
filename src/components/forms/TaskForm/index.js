import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { Input } from '../formControl';
// import { createTodoAddTask } from '../../../Redux/actions/todo/index';
import styles from './styles.module.sass';

const Form = ({ handleSubmit, pristine, reset, submitting }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.inputTask}>
        <label>New task</label>
        <div>
          <Field
            placeholder="input new task"
            name="newTask"
            component={Input}
          />
        </div>
        <div>
          <button type="submit" disabled={pristine || submitting}>
            Add task
          </button>
        </div>
      </div>
    </form>
  );
};

const TaskForm = reduxForm({ form: 'taskForm' })(Form);

export default TaskForm;
