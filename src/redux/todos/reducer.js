import { ADD_TODO } from "./actionTypes";

const init = {
  loading: false,
  ongoing: [
    {
      title: "Masai Scrum - Preparation",
      description: "Prepare for the react-redux topic.",
      date: "2022-03-15",
      time: "10:35:15",
    },
    {
      title: "Interview Preparation",
      description: "Basics of Javascript",
      date: "2022-03-15",
      time: "16:00:00",
    },
    {
      title: "Interview Preparation",
      description: "Basics of Javascript",
      date: "2022-03-15",
      time: "16:00:00",
    },
    {
      title: "Interview Preparation",
      description: "Basics of Javascript",
      date: "2022-03-15",
      time: "16:00:00",
    },
    {
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

    default:
      return state;
  }
};
