import TODO_ACTION_TYPES from '../actions/todo/types';

const initialState = {
  tasks: [
    { name: 'first task', isDone: false },
    { name: 'second task', isDone: true },
    { name: 'third task', isDone: false },
  ],
};

const todoReducer = (state = initialState, { type, data }) => {
  const { tasks } = state;
  const newTasks = [...tasks];

  switch (type) {
    case TODO_ACTION_TYPES.ADD_TASK_ACTION: {
      const { taskName: name } = data;
      newTasks.push({ name, isDone: false });
      return { ...state, tasks: newTasks };
    }
    case TODO_ACTION_TYPES.UPDATE_TASK_ACTION: {
      const { taskIndex: index, taskName: name } = data;
      newTasks[index] = { ...newTasks[index], name };
      return { ...state, tasks: newTasks };
    }
    case TODO_ACTION_TYPES.DONE_TASK_ACTION: {
      const { taskIndex: index } = data;
      const { name, isDone } = newTasks[index];
      newTasks.splice(index, 1, { name, isDone: !isDone });
      return { ...state, tasks: newTasks };
    }
    case TODO_ACTION_TYPES.REMOVE_TASK_ACTION: {
      const { taskIndex: index } = data;
      newTasks.splice(index, 1);
      return { ...state, tasks: newTasks };
    }
    default:
      return state;
  }
};

export default todoReducer;
