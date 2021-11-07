import Robot from "../Robot/Robot";

const RobotList = ({ robots }) => {
  return (
    <section className="row">
      {robots.map((robot) => (
        <Robot
          key={robot._id}
          day={new Date(robot.features.date).getDate()}
          month={new Date(robot.features.date).getMonth()}
          year={new Date(robot.features.date).getFullYear()}
          robot={robot}
        />
      ))}
    </section>
  );
};

export default RobotList;
