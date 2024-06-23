import { 
    convertToFloat, 
    generateRandomName,
    generateRandomCountry, 
    generateRandomCity, 
    generateRandomCreditCard, 
    generateMonth, 
    generateYear,
    generateTwoRandomsIndexesForProducts} from "./utils";

Cypress.Commands.add('visitingDemoBlazePage', () => { 
    cy.visit("https://www.demoblaze.com/") 
})

Cypress.Commands.add('addingProductsToCart', (limit) => { 
    let totalPrice = 0
    const indexes = generateTwoRandomsIndexesForProducts(limit)
    for(let i = 0; i < limit; i++) {
        cy.on('window:alert', (alertText) => {
            expect(alertText).to.equal('Product added')
        });
        cy.get('.card-title').eq(indexes[i]).click()
        cy.contains('Add to cart').click()
        cy.get('h3:contains("$")').invoke('text').then(priceText => {
            const price = convertToFloat(priceText)
            totalPrice += price
            cy.wrap(totalPrice).as("totalPrice")
        })
        cy.get('a:contains("Home")').click()
    }
})

Cypress.Commands.add('reviewingCart', () => { 
    cy.get('a:contains("Cart")').click()
    cy.get('table tbody tr').should('have.length', 2)
    cy.get('@totalPrice').then(totalPrice => {
        cy.get('#totalp').should('have.text', totalPrice)
    })
})

Cypress.Commands.add('placingOrder', () => { 
    cy.get('button:contains("Place Order")').click()
    cy.get('#name').type(generateRandomName())
    cy.get('#country').type(generateRandomCountry())
    cy.get('#city').type(generateRandomCity())
    cy.get('#card').type(generateRandomCreditCard())
    cy.get('#month').type(generateMonth())
    cy.get('#year').type(generateYear())
    cy.get('button:contains("Purchase")').click()
})

Cypress.Commands.add('checkingPurchase', () => { 
    cy.contains('Thank you for your purchase!').should('be.visible')
    cy.get('button:contains("OK")').click()
})
