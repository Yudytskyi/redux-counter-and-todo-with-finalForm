import { connect } from 'react-redux';
import TodoForm from '.';
import { createTodoAddTask } from '../../Redux/actions/todo';

const mapStateToProps = ({ todo }) => todo;
const mapDispatchToProps = dispatch => ({
  addTask: () => dispatch(createTodoAddTask),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);
