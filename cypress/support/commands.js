function price() {
  return cy.wrap('price');
}

Cypress.Commands.add("price", (elem) => {
  cy.get(elem).then(($span) => {
      let tempPrice = parseInt($span.text())
      let tempString = $span.text().replace(new RegExp(tempPrice.toString(),"g"), "");
      let price = tempPrice.toString() + parseInt(tempString).toString();
      return(parseInt(price));
      });
});
