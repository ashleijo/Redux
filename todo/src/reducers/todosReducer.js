import { ADDTODO, TOGGLE } from '../actions';

export default (todos = [], action) => {
  switch (action.type) {
    case ADDTODO:
      return [...todos, action.payload];
    case TOGGLE:
      todos[action.payload].completed = !todos[action.payload].completed;
      return todos;
    default:
      return todos;
  }
};
