import { robotsData } from "../../mocks/mocks";
import RobotCard from "./RobotCard";
import { render, screen } from "@testing-library/react";

describe("Given a RobotCard component", () => {
  describe("When it is rendered a card with name `Bender`", () => {
    test("Then it should show a title with the text `Bender` ", () => {
      const expectedText = "Bender";

      const robotInfo = robotsData;

      render(<RobotCard robot={robotInfo[0]} />);

      const expectedResult = screen.getByText(expectedText);

      expect(expectedResult).toBeInTheDocument();
    });
  });
});
