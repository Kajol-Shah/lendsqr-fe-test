import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import UserDetails from "./UserDetails";

describe("User Details", () => {
  test("renders loading state", () => {
    render(
      <MemoryRouter>
        <UserDetails />
      </MemoryRouter>
    );

    expect(
      screen.getByText(/loading/i)
    ).toBeInTheDocument();
  });
});