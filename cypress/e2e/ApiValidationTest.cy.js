describe("API Validation Test", () => {
  let url = "https://api.api-onepiece.com/v2/characters/en";

  it("Response Status 200", () => {
    cy.request({
      method: "GET",
      url: url,
      headers: { "Content-Type": "application/json" },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.statusText).to.eq("OK");
    });
  });

  it("Each ID should be unique", () => {
    cy.request(url).then((response) => {
      let ids = response.body.map((char) => char.id);
      let uniqueId = new Set(ids);
      expect(ids.length).to.eq(uniqueId.size);
    });
  });

  it("Only Monkey D. Luffy should have the Gum-Gum Fruit", () => {
    cy.request(url).then((response) => {
      response.body.forEach((char) => {
        if (char.fruit?.name === "Gum-Gum Fruit") {
          expect(char.name).to.eq("Monkey D Luffy");
        }
      });
    });
  });
});
