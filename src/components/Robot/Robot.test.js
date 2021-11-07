import Robot from "./Robot";
import ReactTestRenderer from "react-test-renderer";

describe("Give a Robot component", () => {
  describe("When it receive an object robot", () => {
    test("Then should render a Card with the name", () => {
      const robotObject = {
        _id: "618678658516adffbffcac4b",
        name: "Bender",
        url: "https:",
        features: {
          speed: 2,
          resistence: 3,
          date: "2021-02-04T23:00:00.000Z",
        },
      };
      const robotCard = ReactTestRenderer.create(<Robot robot={robotObject} />);

      expect(robotCard.toJSON()).toMatchSnapshot();
    });
  });
});
