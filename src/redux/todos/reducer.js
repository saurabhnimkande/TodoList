import {
  ADD_TODO,
  DELETE_ALL_COMPLETED,
  DELETE_COMPLETED,
  DELETE_ONGOING,
  MARK_COMPLETE,
  MARK_INCOMPLETE,
} from "./actionTypes";

const init = {
  ongoing: [
    {
      id: "f17a6840-9594-475f-8eda-0159b7418260",
      title: "Masai Scrum - Preparation",
      description: "Prepare for the react-redux topic.",
      date: "2022-03-15",
      time: "10:35:15",
    },
    {
      id: "5d41a828-a84e-4b6d-853c-30fd2547dd86",
      title: "Interview Preparation",
      description: "Basics of Javascript",
      date: "2022-03-15",
      time: "16:00:00",
    },
  ],
  completed: [
    {
      id: "f17a6840-9594-475f-8eda-0159b7411234",
      title: "Make Breakfast",
      description: "Make Half Fried Eggs",
      date: "2022-03-15",
      time: "9:00:15",
    },
  ],
};
export const reducer = (state = init, { type, payload }) => {
  switch (type) {
    case ADD_TODO:
      return {
        ...state,
        ongoing: [...state.ongoing, payload],
      };

    case MARK_COMPLETE:
      let new_ongoing = state.ongoing.filter((el) =>
        el.id === payload.id ? false : true
      );
      return {
        ...state,
        ongoing: new_ongoing,
        completed: [...state.completed, payload],
      };

    case DELETE_ONGOING:
      let new_ongoing_remove = state.ongoing.filter((el) =>
        el.id === payload.id ? false : true
      );
      return {
        ...state,
        ongoing: new_ongoing_remove,
      };

    case DELETE_COMPLETED:
      let new_completed_remove = state.completed.filter((el) =>
        el.id === payload.id ? false : true
      );
      return {
        ...state,
        completed: new_completed_remove,
      };

    case DELETE_ALL_COMPLETED:
      return {
        ...state,
        completed: [],
      };

    case MARK_INCOMPLETE:
      let new_completed = state.completed.filter((el) =>
        el.id === payload.id ? false : true
      );
      return {
        ...state,
        completed: new_completed,
        ongoing: [...state.ongoing, payload],
      };
    default:
      return state;
  }
};
