# test-task
Automated test cases for rozetka.com.ua

Install Cypress via "npm install --save-dev cypress@12.17.1"
Run via "npx cypress run --spec "cypress/e2e/filterTest.cy.js" --headed --browser chrome"

Test cases
Summary: Add items to the basket”
1. Open marketplace url. Verify it.
2. Open category and subcategory if it is necessary. 
3. Add any item to the basket.
4. Select another category and add an item from 
that category.
5.Verify information of items inside the basket.
6.Verify that the price is calculated correctly.
7. Verify that the delete item button is clickable.

Summary: “Search the item”
1. Open marketplace url. Verify it.
2. Search random item by name.
3. Verify that all items are correctly displayed according 
to your searching request (only on the first page)
