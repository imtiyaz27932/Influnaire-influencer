import login from "../POM/influencer login";
import Dashboard from "../POM/influencerdashboard";
import signup from "../POM/signupinfluencer";
let repodata;


describe('Influencer Login', () => {
    beforeEach(() => {
        //cy.viewport('iphone-xr');
        cy.fixture('multipleuser').then((data) => {
            repodata = data;
            cy.visit(Cypress.config('baseUrl'), { timeout: 100000 });

        })
    })

    it.only('user with multiple login',()=>{
        cy.contains('Signup Now').click()
        const dash = new login()
        const test = new Dashboard()
        const sig= new signup()
        //sig.entersignupfields(repodata.user1.Firstname,repodata.user1.Lastname,repodata.user1.Eamil, repodata.user1.Phonenumber)
        //sig.setpassword(repodata.user1.Password,repodata.user1.ConfirmPassword)
        sig.multipleusersignup(repodata.user1.Firstname,repodata.user1.Lastname,repodata.user1.Email, repodata.user1.Phonenumber,repodata.user1.Password,repodata.user1.ConfirmPassword)
        // sig.entersignupfields(repodata.user2.Firstname,repodata.user2.Lastname,repodata.user2.Eamil, repodata.user2.Phonenumber)
        // sig.setpassword(repodata.user2.Password,repodata.user2.ConfirmPassword)

    })
})