import TODO_ACTION_TYPES from './types';

export const createTodoAddTask = taskName => ({
  type: TODO_ACTION_TYPES.ADD_TASK_ACTION,
  data: { taskName },
});

export const createTodoUpdateTask = (taskIndex, taskName) => ({
  type: TODO_ACTION_TYPES.UPDATE_TASK_ACTION,
  data: { taskIndex, taskName },
});

export const createTodoDoneTask = taskIndex => ({
  type: TODO_ACTION_TYPES.DONE_TASK_ACTION,
  data: { taskIndex },
});

export const createTodoRemoveTask = taskIndex => ({
  type: TODO_ACTION_TYPES.REMOVE_TASK_ACTION,
  data: { taskIndex },
});
