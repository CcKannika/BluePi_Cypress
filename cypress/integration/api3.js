/// <reference types="cypress" />

context('API', () => {

    it('Scenario: POST Login API with server down', () => {
        cy.request('POST','https://11.11.11.11/api/v1/auth/login', 
            {
            "phone_number": "0614268668",
            "user_pin": "1234"
            }).then((response) => {
            expect(response.status).to.eq(500)
            expect(response.body).property('status', "ERROR")
            expect(response.body).property('code', 500)
            expect(response.body).property('service_code', "S500")
            expect(response.body).property('service_message', "Server down")
        })

    })

})


