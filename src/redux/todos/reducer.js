import { ADD_TODO, DELETE_ONGOING, MARK_COMPLETE } from "./actionTypes";

const init = {
  loading: false,
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
  completed: [],
  error: false,
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

    default:
      return state;
  }
};
