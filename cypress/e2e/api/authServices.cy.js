import { expect } from "chai";
import { generateRandomMail, generateRandomPassword, createCredentials } from "../../support/utils";

describe('Auth Services Tests', () => {
    before(() => {
        createCredentials(generateRandomMail(), generateRandomPassword())
    })

    it('Validating SignUp API response for a new user', () => {
        cy.fixture('credentials.json').then(credentials => {
            cy.request('POST', 'https://api.demoblaze.com/signup', credentials)
                .then(response => {
                    expect(response.status).to.be.eq(200)
                    expect(response.body).to.be.eq("")
                })  
        })       
    })

    it('Validating SignUp API response for a user that is already in use', () => {
        cy.fixture('credentials.json').then(credentials => {
            cy.request('POST', 'https://api.demoblaze.com/signup', credentials)
                .then(response => {
                    expect(response.status).to.be.eq(200)
                    expect(response.body.errorMessage).to.be.eq('This user already exist.')
                })  
        })       
    })

    it('Validating Login API response for a valid user', () => {
        cy.fixture('credentials.json').then(credentials => {
            cy.request('POST', 'https://api.demoblaze.com/login', credentials)
                .then(response => {
                    expect(response.status).to.be.eq(200)
                    expect(response.body).to.contain('Auth_token')
                })  
        })       
    })

    it('Validating Login API response for an invalid username', () => {
        cy.fixture('credentials.json').then(credentials => {
            credentials.username = `error${credentials.username}`
            cy.request('POST', 'https://api.demoblaze.com/login', credentials)
                .then(response => {
                    expect(response.status).to.be.eq(200)
                    expect(response.body.errorMessage).to.be.eq('User does not exist.')
                })  
        })       
    })

    it('Validating Login API response for an invalid password', () => {
        cy.fixture('credentials.json').then(credentials => {
            credentials.password = `error${credentials.password}`
            cy.request('POST', 'https://api.demoblaze.com/login', credentials)
                .then(response => {
                    expect(response.status).to.be.eq(200)
                    expect(response.body.errorMessage).to.be.eq('Wrong password.')
                })  
        })       
    })
  })