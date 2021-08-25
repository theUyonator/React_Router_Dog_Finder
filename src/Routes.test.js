import React from "react";
import Routes from "./Routes";
import { MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import whiskey from "./whiskey.jpg";
import duke from "./duke.jpg";
import tubby from "./tubby.jpg";
import perry from "./perry.jpg";

const dogs = [
    {
      name: "Whiskey",
      age: 5,
      src: whiskey,
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!"
      ]
    },
    {
      name: "Duke",
      age: 3,
      src: duke,
      facts: [
        "Duke believes that ball is life.",
        "Duke likes snow.",
        "Duke enjoys pawing other dogs."
      ]
    },
    {
      name: "Perry",
      age: 4,
      src: perry,
      facts: [
        "Perry loves all humans.",
        "Perry demolishes all snacks.",
        "Perry hates the rain."
      ]
    },
    {
      name: "Tubby",
      age: 4,
      src: tubby,
      facts: [
        "Tubby is really stupid.",
        "Tubby does not like walks.",
        "Angelina used to hate Tubby, but claims not to anymore."
      ]
    }
  ];

it("renders all dog names existing in intintal doglist at /dogs", () =>{
    const { getByText } = render(
        <MemoryRouter initialEntries={['/dogs']}>
            <Routes dogs={dogs} />
        </MemoryRouter>
    );

    const dogNames = dogs.map(d => d.name.toLocaleLowerCase());
    for (const name of dogNames){
        const linkElement = getByText(new RegExp(name, "i"));
        expect(linkElement).toBeInTheDocument();

    }
});

it("renders only whiskey's information at /dogs/whiskey", () =>{
  const { getByText } = render(
    <MemoryRouter initialEntries={["/dogs/whiskey"]}>
      <Routes dogs={dogs} />
    </MemoryRouter>

  )
  const whiskeyInfo = dogs.find(d => d.name === "Whiskey");
  const dukeInfo = dogs.find(d => d.name === "Duke");

  const listItem = getByText(new RegExp(whiskeyInfo.facts[0], "i"));
  expect(listItem).toBeInTheDocument();

  expect(screen.queryByText(new RegExp(dukeInfo.facts[0], "i")));


})

it("redirects to the homepage when a badroute is hit", () => {
  const { getByText } = render(
    <MemoryRouter initialEntries={["/dogs/jsklddmomd"]}>
      <Routes dogs={dogs} />
    </MemoryRouter>

  );

  const dogNames = dogs.map(d => d.name.toLocaleLowerCase());
    for (const name of dogNames){
        const linkElement = getByText(new RegExp(name, "i"));
        expect(linkElement).toBeInTheDocument();

    }


})
