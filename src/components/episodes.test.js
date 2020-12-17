import React from "react";
import { render, screen } from "@testing-library/react";
import Episodes from "./Episodes";

test("renders the component", () => {
  render(<Episodes episodes={[]} />);
});

const episode = [
  { id: "abcd", name: "test", season: 3, number: 15, runtime: 25 },
];

test("is it correctly adding a new episode", () => {
  const { rerender } = render(<Episodes episodes={[]} />);

  let episodeObjects = screen.queryAllByTestId("episode");
  expect(episodeObjects).toStrictEqual([]);

  rerender(<Episodes episodes={episode} />);

  episodeObjects = screen.queryAllByTestId("episode");
  expect(episodeObjects).toHaveLength(1);
});
