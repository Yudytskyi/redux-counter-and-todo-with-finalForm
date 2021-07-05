import React from 'react';
import { connect } from 'react-redux';
import { Form, Field } from 'react-final-form';
import styles from './styles.module.scss';
import { createTodoAddTask } from '../../Redux/actions/todo';

const TodoForm = ({ addTask }) => {
  const onSubmit = (values, form) => {
    addTask(values.newTask);
    form.reset();
  };

  return (
    <Form
      onSubmit={onSubmit}
      initialValues={{ newTask: '' }}
      render={({ handleSubmit, form, submitting, pristine, values }) => (
        <>
          <h2>new task</h2>
          <form className={styles.todoForm} onSubmit={handleSubmit}>
            <div className={styles.inputs}>
              <Field
                name="newTask"
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

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => ({
  addTask: taskName => dispatch(createTodoAddTask({ taskName })),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);
