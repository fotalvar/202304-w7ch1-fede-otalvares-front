import { render, screen } from "@testing-library/react";
import { robotsData } from "../../mocks/mocks";
import RobotsList from "./RobotsList";

describe("Given a RobotsList component", () => {
  describe("When it is rendered", () => {
    test("Then it shoul show a list with a card of `Bender`", () => {
      const expectedCardText = "Bender";

      render(<RobotsList robots={robotsData} />);

      const robotName = screen.getByText(expectedCardText);

      expect(robotName).toBeInTheDocument;
    });
  });
});
