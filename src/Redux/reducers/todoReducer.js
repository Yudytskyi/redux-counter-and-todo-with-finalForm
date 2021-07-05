import TODO_ACTION_TYPES from '../actions/todo/types';

const initialState = {
  tasks: [
    { name: 'first task', isDone: false },
    { name: 'second task', isDone: true },
    { name: 'third task', isDone: false },
  ],
};

const todoReducer = (state = initialState, action) => {
  const { tasks } = state;
  const { type, data } = action;
  const taskName = data?.task?.taskName ?? '';
  const taskIndex = data?.taskIndex;
  const newTasks = [...tasks];

  switch (type) {
    case TODO_ACTION_TYPES.ADD_TASK_ACTION: {
      newTasks.push({ name: taskName, isDone: false });
      return { ...state, tasks: newTasks };
    }
    case TODO_ACTION_TYPES.UPDATE_TASK_ACTION: {
      newTasks[taskIndex] = { ...newTasks[taskIndex], name: taskName };
      // console.log({ ...state, tasks: newTasks });
      return { ...state, tasks: newTasks };
    }
    case TODO_ACTION_TYPES.DONE_TASK_ACTION: {
      const { name, isDone } = newTasks[taskIndex];
      console.log(`name: ${name} done: ${isDone} index: ${taskIndex}`);
      newTasks.splice(taskIndex, 1, { name, isDone: !isDone });
      return { ...state, tasks: newTasks };
    }
    case TODO_ACTION_TYPES.REMOVE_TASK_ACTION: {
      newTasks.splice(taskIndex, 1);
      return { ...state, tasks: newTasks };
    }
    default:
      return state;
  }
};

export default todoReducer;
