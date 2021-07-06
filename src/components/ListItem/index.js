import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Form, Field } from 'react-final-form';
import styles from './styles.module.scss';
import {
  createTodoDoneTask,
  createTodoUpdateTask,
  createTodoRemoveTask,
} from '../../Redux/actions/todo';

const ListItem = ({ task, taskIndex, updateTask, doneTask, removeTask }) => {
  var [isOpen, setIsOpen] = useState(false);
  const { name, isDone } = task;

  useEffect(() => {
    document.getElementById(`input_${taskIndex}`)?.focus();
  });

  const onSubmit = ({ taskName }) => {
    setIsOpen(!isOpen);
    taskName && updateTask(taskIndex, taskName);
  };

  return (
    <Form onSubmit={onSubmit} initialValues={{ taskName: name, isDone }}>
      {({ handleSubmit, form, submitting, pristine, values }) => (
        <>
          <form className={styles.todoForm} onSubmit={handleSubmit}>
            <div className={styles.inputs}>
              <p
                className={styles.todoName}
                disabled={isDone}
                onClick={() => !isDone && setIsOpen(!isOpen)}
              >
                {name}
                {isOpen && (
                  <Field
                    id={`input_${taskIndex}`}
                    className={!submitting ? styles.inputIsOpen : styles.input}
                    name="taskName"
                    component="input"
                    type="text"
                    placeholder="input updated task"
                    value={name}
                    onBlur={handleSubmit}
                  />
                )}
              </p>
            </div>
            <div className={styles.buttons}>
              <Field
                name="isDone"
                component="input"
                type="checkbox"
                onChange={() => doneTask(taskIndex)}
              />
              <button type="button" onClick={() => removeTask(taskIndex)}>
                X
              </button>
            </div>
          </form>
        </>
      )}
    </Form>
  );
};

const mapDispatchToProps = dispatch => ({
  updateTask: (taskIndex, task) =>
    dispatch(createTodoUpdateTask(taskIndex, task)),
  doneTask: taskIndex => dispatch(createTodoDoneTask(taskIndex)),
  removeTask: taskIndex => dispatch(createTodoRemoveTask(taskIndex)),
});

export default connect(null, mapDispatchToProps)(ListItem);
