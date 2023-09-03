import React from "react";
import TextInput from "./TextInput";

describe("<TextInput />", () => {
  it("renders", () => {
    cy.mount(<TextInput />);
    cy.get("input").type("Hello world!");
  });
});
