import { useSelector } from "react-redux";
import { Button } from "antd";
import "./Ongoing.css";
export const Ongoing = () => {
  const { ongoing } = useSelector((state) => ({
    ongoing: state.ongoing,
  }));
  console.log(ongoing);
  return (
    <div id="ongoingTodosMainDiv">
      {ongoing.map((el) => (
        <div key={el.time + el.title} className="ongoingTaskIndividual">
          <div>
            {" "}
            <p style={{ fontWeight: "bold" }}>{el.title}</p>
            <p>
              Date-Time: {el.date} {el.time}
            </p>
            <p>Description: {el.description}</p>
          </div>
          <div>
            <Button type="primary">Mark Completed</Button>
          </div>
        </div>
      ))}
    </div>
  );
};
