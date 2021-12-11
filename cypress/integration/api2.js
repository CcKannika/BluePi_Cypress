/// <reference types="cypress" />

context('API', () => {

    it('Scenario: POST Login API with invalid request body', () => {
        cy.request('POST','https://11.11.11.11/api/v1/auth/login', 
            {
            "phone_number": "0614268668",
            }).then((response) => {
            expect(response.status).to.eq(400)
            expect(response.body).property('status', "ERROR")
            expect(response.body).property('code', 400)
            expect(response.body).property('service_code', "S400")
            expect(response.body).property('service_message', "User Pin is required")
        })

    })

})

