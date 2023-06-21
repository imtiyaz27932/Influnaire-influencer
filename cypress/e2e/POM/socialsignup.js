class socialsignup {
    elements = {
      signupwithgooglebutton: () => cy.contains('Signup with google'),
    }
  
    googleSignup() {
      const url = 'https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount?gsiwebsdk=3&client_id=1037769958619-4kg2b34868ptsppcouspcp4pjbsfm3l4.apps.googleusercontent.com&scope=openid%20profile%20email&redirect_uri=storagerelay%3A%2F%2Fhttps%2Fapp.influnaire.dreamkashmir.com%3Fid%3Dauth445432&prompt=consent&access_type=offline&response_type=code&include_granted_scopes=true&enable_serial_consent=true&service=lso&o2v=2&flowName=GeneralOAuthFlow';
  
      cy.window().then((win) => {
        const stub = cy.stub(win, 'open').as('windowOpen');
        this.elements.signupwithgooglebutton().click().then(() => {
          expect(stub).to.be.calledWith(url);
          cy.wait(5000);
        });
      });
    }
  }
  
  export default socialsignup;
  