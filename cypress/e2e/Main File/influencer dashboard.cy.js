
import login from "../POM/influencer login";
import Dashboard from "../POM/influencerdashboard";
let repodata;

describe('Influencer Login', () => {
    beforeEach(() => {
        //cy.viewport('iphone-xr');
        cy.fixture('influencerdata').then((data) => {
            repodata = data;
            cy.visit(Cypress.config('baseUrl'), { timeout: 100000 });

        })
    })

    it('Verify that user can access dashboard', () => {
        const dash = new login()
        const test = new Dashboard()
        dash.loginCredentials(repodata.Email, repodata.Password)
        //test.logout()


    })

    it('verify that the dashboard fields are visible or not', () => {
        const dash = new login()
        const test = new Dashboard()
        dash.loginCredentials(repodata.Email, repodata.Password)
        test.Dashboardfiels()

    })


    it('verify that setting fields are visible or not', () => {
        const dash = new login()
        const test = new Dashboard()
        dash.loginCredentials(repodata.Email, repodata.Password)
        test.settingfieldvisible()


    })

    it('verify that user is able to switch dark theme', () => {
        const dash = new login()
        const test = new Dashboard()
        dash.loginCredentials(repodata.Email, repodata.Password)
        test.DarkTheme()

    })


    it.only('verify that user is able to Deactivate account', () => {
        const dash = new login()
        const test = new Dashboard()
        dash.loginCredentials(repodata.Email, repodata.Password)
        test.Deactivateaccount()

    })

    it.only('verify that user is able to activate account', () => {
        const dash = new login()
        const test= new Dashboard()
        dash.loginCredentials(repodata.Email, repodata.Password)
        test.reactivateaccount()
        })


    it('verify that user is able to logout from application successfully and reidrecte to login page ', () => {
        const dash = new login()
        const test = new Dashboard()
        dash.loginCredentials(repodata.Email, repodata.Password)
        test.logout()
    })
})