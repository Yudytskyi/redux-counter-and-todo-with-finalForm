import produce from 'immer';
import TODO_ACTION_TYPES from '../actions/todo/types';
import createReducer from '../services/createReducer';

const initialState = {
  tasks: [
    { name: 'first task', isDone: false },
    { name: 'second task', isDone: true },
    { name: 'third task', isDone: false },
  ],
};

const handlers = {
  [TODO_ACTION_TYPES.ADD_TASK_ACTION]: produce((draftState, action) => {
    const {
      data: { taskName: name },
    } = action;
    draftState.tasks.push({ name, isDone: false });
  }),

  [TODO_ACTION_TYPES.UPDATE_TASK_ACTION]: produce((draftState, action) => {
    const {
      data: { taskIndex: index, taskName: name },
    } = action;
    draftState.tasks[index] = { ...draftState.tasks[index], name };
  }),

  [TODO_ACTION_TYPES.DONE_TASK_ACTION]: produce((draftState, action) => {
    const {
      data: { taskIndex: index },
    } = action;
    const { name, isDone } = draftState.tasks[index];
    draftState.tasks[index] = { name, isDone: !isDone };
  }),

  [TODO_ACTION_TYPES.REMOVE_TASK_ACTION]: produce((draftState, action) => {
    const {
      data: { taskIndex: index },
    } = action;
    draftState.tasks.splice(index, 1);
  }),
};

const todoReducer = createReducer(initialState, handlers);

export default todoReducer;
