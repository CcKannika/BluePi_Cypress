/// <reference types="cypress" />

context('API', () => {

    it('Scenario: POST Login API', () => {
        cy.request('POST','https://11.11.11.11/api/v1/auth/login', 
            {
            "phone_number": "0614268668",
            "user_pin": "1234"
            }).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).property('status', "SUCCESS")
            expect(response.body).property('code', 200)
            expect(response.body).property('service_code', "S200")
            expect(response.body).property('service_message', "Login Success")
            expect(response.body).property('user_token  ', "xxx-xxxxxxxxx-xx")
        })

    })

})
