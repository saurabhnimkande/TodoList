import {
  ADD_TODO,
  MARK_COMPLETE,
  DELETE_ONGOING,
  DELETE_COMPLETED,
  DELETE_ALL_COMPLETED,
  MARK_INCOMPLETE,
} from "./actionTypes";

export const addTodo = (payload) => ({
  type: ADD_TODO,
  payload,
});

export const markComplete = (payload) => ({
  type: MARK_COMPLETE,
  payload,
});

export const deleteOngoing = (payload) => ({
  type: DELETE_ONGOING,
  payload,
});

export const deleteCompleted = (payload) => ({
  type: DELETE_COMPLETED,
  payload,
});

export const deleteAllCompleted = () => ({
  type: DELETE_ALL_COMPLETED,
});

export const markIncomplete = (payload) => ({
  type: MARK_INCOMPLETE,
  payload,
});
