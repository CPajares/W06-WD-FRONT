import { render, screen, waitFor } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";
import App from "../../App";
import useRobot from "../../hooks/useRobot";
import { server } from "../../mocks/server";
import configureStore from "../../redux/store";

beforeAll(() => {
  server.listen();
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});

describe("Given a RobotList component", () => {
  describe("When it receives an objet robot", () => {
    test("Then it should render a list of Robots", async () => {
      const store = configureStore();

      render(
        <React.StrictMode>
          <Provider store={store}>
            <App />
          </Provider>
        </React.StrictMode>
      );

      const img = await screen.findByRole("img", { name: "Bender" });
      const [name] = screen.queryAllByRole("heading", { level: 2 });

      await waitFor(() => {
        expect(img).toBeInTheDocument();
        expect(name).toBeInTheDocument();
      });
    });
  });
});
