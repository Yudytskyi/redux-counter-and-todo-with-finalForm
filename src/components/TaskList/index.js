import React from 'react';
import { connect } from 'react-redux';
import {
  createTodoDoneTask,
  createTodoRemoveTask,
} from '../../Redux/actions/todo/index';
import TaskItem from '../TaskItem/index';

const TaskList = props => {
  const { tasks, removeTask, doneTask } = props;

  return (
    <ul>
      {tasks.map((task, index) => (
        <TaskItem
          task={task}
          doneTask={doneTask}
          removeTask={removeTask}
          index={index}
        />
      ))}
    </ul>
  );
};

const mapStateToProps = ({ todo }) => todo;

const mapDispatchToProps = dispatch => ({
  doneTask: index => dispatch(createTodoDoneTask(index)),
  removeTask: taskIndex => dispatch(createTodoRemoveTask(taskIndex)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
