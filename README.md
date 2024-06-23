# DemoBlaze
## _Cypress Automation Tests Examples_
## Features
### E2E
It is located in the e2e folder with the name **_cypress/e2e/addTwoProductsToTheCart.cy.js_**
Perform an automated functional test of a purchase flow that consists of the following steps: 
- Add 2 products to cart
- View the cart
- Complete the purchase form
- finalize the purchase

### API
It is located in the api folder with the name **_cypress/e2e/api/authServices.cy.js_**
Perform an automated functional test set for the endpoints of ***/login*** and ***/signup*** figuring out the payloads and responses for different scenarios such as: 
- Creating a new user
- Trying to create a user with an already use email
- Login into the page with valid credentials
- Trying to login without having the right username or password

## Tech

The project uses a number of open source libraries to work properly:
- [Cypress] - The main core to sustend all the test
- [Faker] - Amazing library to create your own fake data
- [Mochawesome] - Awesome html and json report builder
- [Chai] - Amazing assertion library

## Installation

To run the project it is require to install [Node.js](https://nodejs.org/) v10+ to run.

Clone the repo, then install the dependencies and devDependencies.
```sh
git clone 
npm i
```
Then the Cypress the GUI can be run.
```sh
npx cypress open
```
Or run the test in the terminal to generate the reports
```sh
npm run test:api
npm run test:e2e
```
So the reports folder would be created also the files ***cypress/reports/e2e/e2e_test_report.html*** ***cypress/reports/api/api_test_report.html*** 

## License

**Free Software**

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

   [Faker]: <https://fakerjs.dev/>
   [Mochawesome]: <https://github.com/adamgruber/mochawesome/>
   [Cypress]: <https://github.com/cypress-io/cypress/>
   [Chai]: <https://github.com/chaijs/chai/>
  
