import { faker } from '@faker-js/faker';

const currentDate = new Date()

export function convertToFloat(priceText) {
    return parseFloat(priceText.replace(/[^0-9.-]+/g, ""))
}

export function generateTwoRandomsIndexesForProducts(limit){
    const generatedNumbers = []
    for (let i=0; i<limit; i++) {
        let randomProductIndex
        do {
            randomProductIndex = Cypress._.random(0, 8);
        } while (generatedNumbers.includes(randomProductIndex))
        generatedNumbers.push(randomProductIndex)
    }
    return generatedNumbers
}

export function generateRandomName(){
    return `${faker.person.firstName()} ${faker.person.firstName()}`
}

export function generateRandomMail(){
    return faker.internet.email()
}

export function generateRandomPassword(){
    return faker.internet.password()
}

export function generateRandomCountry(){
    return faker.location.country()
}

export function generateRandomCity(){
    return faker.location.city()
}

export function generateRandomCreditCard(){
    return faker.finance.creditCardNumber() 
}

export function generateMonth(){
    return currentDate.getMonth() + 1
}

export function generateYear(){
    return currentDate.getFullYear()
}

export function createCredentials(username, password){
    cy.fixture('credentials.json').then(credentials => {
        credentials.username = username
        credentials.password = btoa(password)
        cy.writeFile('cypress/fixtures/credentials.json', credentials)
    })
}