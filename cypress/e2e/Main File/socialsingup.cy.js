import socialsignup from "../POM/socialsignup";
let repodata;

describe('Influencer Signup Now Process', () => {
  beforeEach(() => {
    cy.fixture('influencerdata').then((data) => {
      repodata = data;
      cy.visit(Cypress.config('baseUrl'), { timeout: 100000 });

    })
  })

  it('Test that user is able to signup with google',()=>{
    cy.contains('Signup Now').click()
    const inf = new socialsignup()
    inf.googleSignup()
  })
})
