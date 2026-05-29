import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Users from "./Users";

describe("Users Page", () => {
  test("renders users heading", () => {
    render(
      <MemoryRouter>
        <Users />
      </MemoryRouter>
    );

    expect(
      screen.getByRole("heading", {
        name: "Users",
      })
    ).toBeInTheDocument();
  });
});