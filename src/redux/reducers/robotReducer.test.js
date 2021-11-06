import {
  loadRobotByIdAction,
  loadRobotsAction,
} from "../actions/actionCreators";
import robotReducer from "./robotReducer";

describe("Given robotReducer reducer", () => {
  describe("When it receives an empty array and action loadRobots", () => {
    test("Then it should return a new array objects", () => {
      const arrayRobots = [
        {
          features: {
            speed: 2,
            resistence: 3,
            date: "2021-02-04T23:00:00.000Z",
          },
          _id: "618555c6c10e75c0021f6825",
          name: "Emilio",
          url: "https://nostalgiapop.es/wp-content/uploads/2020/07/NP_Emiglio-e1608391255576.jpg",
        },
        {
          features: {
            speed: 2,
            resistence: 3,
            date: "2021-02-04T23:00:00.000Z",
          },
          _id: "618678658516adffbffcac4b",
          name: "Bender",
          url: "https:",
          __v: 0,
        },
      ];
      const action = loadRobotsAction(arrayRobots);
      const state = [];

      const newRobots = robotReducer(state, action);

      expect(newRobots).toEqual(arrayRobots);
    });
  });
  describe("When it receives an empty array and action loadRobotById", () => {
    test("Then it should return an array with a robot", () => {
      const state = [
        {
          features: {
            speed: 2,
            resistence: 3,
            date: "2021-02-04T23:00:00.000Z",
          },
          _id: "618555c6c10e75c0021f6825",
          name: "Emilio",
          url: "https://nostalgiapop.es/wp-content/uploads/2020/07/NP_Emiglio-e1608391255576.jpg",
        },
        {
          features: {
            speed: 2,
            resistence: 3,
            date: "2021-02-04T23:00:00.000Z",
          },
          _id: "618678658516adffbffcac4b",
          name: "Bender",
          url: "https:",
          __v: 0,
        },
      ];
      const id = "618555c6c10e75c0021f6825";
      const action = loadRobotByIdAction(id);
      const expected = [
        {
          features: {
            speed: 2,
            resistence: 3,
            date: "2021-02-04T23:00:00.000Z",
          },
          _id: "618555c6c10e75c0021f6825",
          name: "Emilio",
          url: "https://nostalgiapop.es/wp-content/uploads/2020/07/NP_Emiglio-e1608391255576.jpg",
        },
      ];

      const newRobots = robotReducer(state, action);

      expect(expected).toEqual(newRobots);
    });
  });

  describe("When it receives an empty array and an unknow action", () => {
    test("Then it should return the same array", () => {
      const state = [];
      const action = "whatever...";

      const newRobots = robotReducer(state, action);

      expect(state).toEqual(newRobots);
    });
  });
});
