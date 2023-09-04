import React from "react";
import UserForm from "./UserForm";

describe("<UserForm />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<UserForm />);
  });

  it("types username", () => {
    cy.mount(<UserForm />);

    cy.get("input").type("Jon");
    cy.get("input").should("have.value", "Jon");
  });
});
