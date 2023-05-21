import { render } from "@solidjs/testing-library";
import App from "../src/App";
import { describe, expect, it } from "vitest";
import "@testing-library/jest-dom"; // 👈 this is imported in order to use the jest-dom matchers

describe("App", () => {
  it("should render the app", () => {
    const { getByText, debug } = render(() => <App />);
    debug();
    expect(getByText("MagicDoor.com")).toBeInTheDocument();
  });
});
