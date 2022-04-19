import faker from "@faker-js/faker";

describe("notes", () => {
  it("should allow you to make a note", () => {
    cy.visit("/notes");
    cy.findByRole("link", { name: /\+ new note/i }).click();

    const testNote = {
      title: "test note",
      body: faker.lorem.sentences(1),
    };
    cy.findByRole("textbox", { name: /title/i }).type(testNote.title);
    cy.findByRole("textbox", { name: /body/i }).type(testNote.body);
    cy.findByRole("button", { name: /save/i }).click();

    cy.findByRole("link", { name: /test note/i });
  });
});
