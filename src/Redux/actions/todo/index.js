import TODO_ACTION_TYPES from './types';

export const createTodoAddTask = task => ({
  type: TODO_ACTION_TYPES.ADD_TASK_ACTION,
  data: { task },
});

export const createTodoUpdateTask = (taskIndex, task) => ({
  type: TODO_ACTION_TYPES.UPDATE_TASK_ACTION,
  data: { taskIndex, task },
});

export const createTodoDoneTask = taskIndex => ({
  type: TODO_ACTION_TYPES.DONE_TASK_ACTION,
  data: { taskIndex },
});

export const createTodoRemoveTask = taskIndex => ({
  type: TODO_ACTION_TYPES.REMOVE_TASK_ACTION,
  data: { taskIndex },
});
