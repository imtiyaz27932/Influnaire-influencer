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
