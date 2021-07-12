import React from 'react';
import { useDispatch } from 'react-redux';
import { Form, Field } from 'react-final-form';
import styles from './styles.module.scss';
import { createTodoAddTask } from '../../Redux/actions/todo';

export const TodoForm = () => {
  const dispatch = useDispatch();
  const addTask = taskName => dispatch(createTodoAddTask(taskName));

  const onSubmit = ({ taskName }, form) => {
    addTask(taskName) && form.reset();
  };

  return (
    <Form
      onSubmit={onSubmit}
      initialValues={{ taskName: '' }}
      render={({ handleSubmit, form, submitting, pristine, values }) => (
        <>
          <h2>new task</h2>
          <form className={styles.todoForm} onSubmit={handleSubmit}>
            <div className={styles.inputs} onBlur={handleSubmit}>
              <Field
                name="taskName"
                component="input"
                type="text"
                placeholder="set a new task"
              />
            </div>
            <div className={styles.buttons}>
              <button
                className={styles.btnPrimary}
                type="submit"
                disabled={submitting || pristine}
              >
                Add task
              </button>
              <button
                className={styles.btnDefault}
                type="button"
                onClick={form.reset}
                disabled={submitting || pristine}
              >
                Clear
              </button>
            </div>
          </form>
        </>
      )}
    />
  );
};
