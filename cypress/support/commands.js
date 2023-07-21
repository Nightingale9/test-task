function price() {
  return cy.wrap('price');
}

Cypress.Commands.add("price", (elem) => {
  cy.get(elem).then(($span) => {
      //First part of price
      let i = 1;
      let tempPrice = parseInt($span.text(), 10)
      //Second part or price
      //tempString with 0 in the beginning
      let tempString = $span.text().replace(new RegExp(tempPrice.toString()), "");
      while (tempString[i] =="0") {
        tempPrice += "0";
        i+=1;
      };
      //Total price
      let price = tempPrice.toString() + parseInt(tempString, 10).toString();
      return(parseInt(price, 10));
      });
});
