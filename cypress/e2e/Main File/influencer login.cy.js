import login from "../POM/influencer login";

let repodata;

describe('Influencer Login', () => {
    beforeEach(() => {
        cy.fixture('influencerdata').then((data) => {
            repodata = data;
            cy.visit(Cypress.config('baseUrl'), { timeout: 12000 });

        })
    })

    it.only('influencer wants to login', () => {
        const name = new login()
        name.loginCredentials(repodata.Email, repodata.Password)
        name.verifystepsondashboard()
        // name.profilestatuscard()
        // name.validatesocialmediaaccounts()

        cy.get('.flex .flex-col .ant-card-body')
            .eq(0)
            .within(() => {
                cy.get('img')
                    .should('have.attr', 'src', '/src/assets/images/connectInsta.png'); // Validate the Instagram icon image source

                cy.get('.ant-typography')
                    .should('have.text', 'Instagram'); // Validate the Instagram text

                cy.get('button')
                    .should('have.text', 'Connect'); // Validate the Connect button text
            });

        //Validate Facebook card
        cy.get('.flex .flex-col .ant-card-body')
            .eq(1)
            .within(() => {
                cy.get('img')
                    .should('have.attr', 'src', '/src/assets/images/connectFb.svg'); // Validate the Facebook icon image source

                cy.get('.ant-typography')
                    .should('have.text', 'Facebook'); // Validate the Facebook text

                cy.get('button')
                    .should('have.text', 'Connect'); // Validate the Connect button text
            });

        // Validate Youtube card
        cy.get('.flex .flex-col .ant-card-body')
            .eq(2)
            .within(() => {
                cy.get('img')
                    .should('have.attr', 'src', '/src/assets/images/connectYoutube.svg'); // Validate the Youtube icon image source

                cy.get('.ant-typography')
                    .should('have.text', 'Youtube'); // Validate the Youtube text

                cy.get('button')
                    .should('have.text', 'Connect'); // Validate the Connect button text

            });
        name.profilestatus()


    })

    it('verify that if the user is able to login with invalid credentials', () => {
        const nametest = new login()
        nametest.invalidcredentials()
    })

    it('verify that if the user leaves email and password field empty and clicks on the login button', () => {
        const nametest = new login()
        nametest.leaveloginfeildsempty()
    })

    it('verify that if the user enters email address and leaves password field empty and then clicks on login button', () => {
        const nametest = new login()
        nametest.fillemailandleavepsdempty(repodata.Email)
    })

    it('verify that if the user leaves email empty and enters the password then clicks on the login button', () => {
        const nametest = new login()
        nametest.fillpsdandleaveemialempty(repodata.Password)

    })

    it('verify that if the user enters password and clicks on hide and unhide button', () => {
        const nametest = new login()
        nametest.fillpsdandleaveemialempty(repodata.Password)
        nametest.hideunhide()

    })

})
