import React from "react";
import { render, screen } from "@testing-library/react";
import { setupServer } from "msw/node";
import { handlers } from "./mocks/handlers";
import Series from "./views/Series";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./views/HomePage";

const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => server.resetHandlers());

test("renders learn react link", () => {
  render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route path="/series" element={<Series />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
  const linkElement = screen.getByText(/Popular Series/i);
  expect(linkElement).toBeInTheDocument();
});
