describe('DemoBlaze Tests', () => {
  it('Validating that I can add products to the cart, check it and finish the buying', () => {
    cy.visitingDemoBlazePage()
    cy.addingProductsToCart(2)
    cy.reviewingCart()
    cy.placingOrder()
    cy.checkingPurchase()
  })
})