import useRobot from "../../hooks/useRobot";

const Robot = ({ robot, day, month, year }) => {
  const { deleteRobotById } = useRobot();

  const onClickDelete = () => {
    deleteRobotById(robot._id);
  };

  return (
    <>
      <section className="container-robot col-6">
        <div className="col-12">
          <h2 className="bg-info">Nombre: {robot.name}</h2>
          <img
            src={robot.url}
            width={200}
            height={200}
            alt={`${robot.name}`}
          ></img>
          <h3>Caracteristicas</h3>
          <ul className="list-group row">
            <li className="list-group-item list-group-item-success col-10">
              Velocidad:{robot.features.speed}
            </li>
            <li className="list-group-item list-group-item-success col-10">
              Resistencia: {robot.features.resistence}
            </li>
            <li className="list-group-item list-group-item-success col-10">
              Fecha: {day}/{month}/{year}
            </li>
          </ul>
          <button type="button" className="btn btn-warning col-3">
            MODIFICAR
          </button>
          <button className="btn btn-danger col-3" onClick={onClickDelete}>
            BORRAR
          </button>
        </div>
      </section>
    </>
  );
};

export default Robot;
