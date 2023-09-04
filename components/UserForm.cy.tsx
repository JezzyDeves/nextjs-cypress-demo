import React from "react";
import UserForm from "./UserForm";

describe("<UserForm />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<UserForm />);
  });

  it("passes validations", () => {
    cy.mount(<UserForm />);

    cy.get("input").type("Jon");
    cy.get("input").should("have.value", "Jon");

    cy.get('button[type="submit"]').click();

    cy.get("#username-error").should("not.exist");
  });

  it("fails validations", () => {
    cy.mount(<UserForm />);

    cy.get('button[type="submit"]').click();

    cy.get("#username-error").should("exist");
  });
});
