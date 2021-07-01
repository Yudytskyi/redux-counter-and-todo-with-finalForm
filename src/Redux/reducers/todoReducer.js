import TODO_ACTION_TYPES from '../actions/todo/types';

const initialState = {
  tasks: [
    { name: 'first task', isDone: false },
    { name: 'second task', isDone: true },
  ],
  data: {},
};

const todoReducer = (state = initialState, action) => {
  const { type, data } = action;

  switch (type) {
    case TODO_ACTION_TYPES.ADD_TASK_ACTION: {
      const { tasks } = state;
      const {
        taskName: { newTask: name },
      } = data;

      return {
        ...state,
        tasks: [...tasks, { name, isDone: false }],
      };
    }
    case TODO_ACTION_TYPES.UPDATE_TASK_ACTION: {
      // const { tasks } = state;
      // const { taskIndex, newTaskName } = data;
      // const newTasks = [...tasks];
      // newTasks[taskIndex] = { ...newTasks[taskIndex], newTaskName };
      // return { ...state, tasks: newTasks };
    }
    case TODO_ACTION_TYPES.DONE_TASK_ACTION: {
      const {
        tasks,
        data: { taskIndex },
      } = state;
      const newTasks = [...tasks];
      const task = newTasks[taskIndex];
      task.isDone = !task.isDone;
      newTasks.splice(taskIndex, 1, task);

      return { ...state, tasks: newTasks };
    }
    case TODO_ACTION_TYPES.REMOVE_TASK_ACTION: {
      const { tasks } = state;
      const { taskIndex } = data;
      const newTasks = [...tasks];
      newTasks.splice(taskIndex + 1, 1);

      return { ...state, tasks: newTasks };
    }
    default:
      return state;
  }
};

export default todoReducer;
