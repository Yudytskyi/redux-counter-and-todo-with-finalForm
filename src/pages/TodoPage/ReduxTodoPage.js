import { connect } from 'react-redux';
import TodoPage from './TodoPage';
import {
  createTodoAddTask,
  createTodoUpdateTask,
  createTodoDoneTask,
  createTodoRemoveTask,
} from '../../Redux/actions/todo';

const mapStateToProps = ({ todo: { tasks }, form: { newTask } }) => ({
  // tasks,
  // newTask,
});
const mapDispatchToProps = dispatch => ({
  addTask: newTask => dispatch(createTodoAddTask(newTask)),
  updateTask: (taskIndex, newValue) =>
    dispatch(createTodoUpdateTask(taskIndex, newValue)),
  doneTask: taskIndex => dispatch(createTodoDoneTask(taskIndex)),
  removeTask: taskIndex => dispatch(createTodoRemoveTask(taskIndex)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoPage);
