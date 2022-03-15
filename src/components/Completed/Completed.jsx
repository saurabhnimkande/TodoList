import { useSelector } from "react-redux";

export const Completed = () => {
  const { completed } = useSelector((state) => ({
    completed: state.completed,
  }));
  return (
    <div>
      {completed.map((el) => (
        <p>{el.title}</p>
      ))}
    </div>
  );
};
