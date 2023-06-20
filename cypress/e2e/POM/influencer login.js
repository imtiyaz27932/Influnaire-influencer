class login {
    elements = {
        loginEmailTextField: () => cy.get('#email'),
        loginPasswordTextField: () => cy.get('#password'),
        loginBtn: () => cy.get('#basic > .ant-btn'),
        eyeicon: () => cy.get('.ant-input-suffix'),
        googlesocialbutton: () => cy.get('.ant-btn-default'),
        facebooksocialbutton: () => cy.get('.gap-3 > .ant-btn-primary'),
       
    }

    errormsg = {
        givevalidationmsg: () => cy.get('#notistack-snackbar').should('have.text', 'Invalid credentials')
    }


    feildsvalidaitonmsg = {
        errormsg1: () => cy.get('.ant-form-item-explain-error').eq(0).should('have.text', 'Required field'),
        errormsg2: () => cy.get('.ant-form-item-explain-error').eq(1).should('have.text', 'Required field'),
        errormsgnull: () => cy.get('.ant-form-item-explain-error').should('have.text', 'Required field')
    }

    loginCredentials(email, psd) {
        this.elements.loginEmailTextField().type(email);
        this.elements.loginPasswordTextField().type(psd);
        this.elements.loginBtn().click();
        cy.wait(6000)
        cy.url().should('be.eq', 'https://app.influnaire.dreamkashmir.com/influencer/dashboard')

    }

    invalidcredentials() {
        this.elements.loginEmailTextField().type('Test@gmail.com')
        this.elements.loginPasswordTextField().type('Tres@123')
        this.elements.loginBtn().click()
        cy.wait(4000)
        this.errormsg.givevalidationmsg()
    }

    leaveloginfeildsempty() {
        this.elements.loginBtn().click()
        this.feildsvalidaitonmsg.errormsg1()
        this.feildsvalidaitonmsg.errormsg2()
    }

    fillemailandleavepsdempty(email) {
        this.elements.loginEmailTextField().type(email)
        this.elements.loginBtn().click()
        this.feildsvalidaitonmsg.errormsgnull()
    }

    fillpsdandleaveemialempty(psd) {
        this.elements.loginPasswordTextField().type(psd)
        this.elements.loginBtn().click()
        this.feildsvalidaitonmsg.errormsg1()
    }

    hideunhide() {
        this.elements.eyeicon().click()
        cy.wait(2000)
        this.elements.eyeicon().click()
        // this.elements.googlesocialbutton().should('be.visible')
        // this.elements.facebooksocialbutton().should('be.visible')
    }


    }



export default login
