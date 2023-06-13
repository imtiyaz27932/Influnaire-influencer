class signup {

    elements = {

        signupusingemailnumber: () => cy.contains('Signup using email/number'),
        firstnametextfield: () => cy.get('#firstName'),
        lastnametextfield: () => cy.get('#lastName'),
        emailtextfield: () => cy.get('#email'),
        phonenumbertextfiled: () => cy.get('#phoneNumber'),
        nextsetpsdbtn: () => cy.get('.ant-btn'),
        setpsdfield: () => cy.get('#password'),
        Reenterpsdfield: () => cy.get('#confirm_password'),
        createaccntbtn: () => cy.get('.ant-btn'),
        otp1: () => cy.get('input[aria-label="Please enter OTP character 1"]'),
        otp2: () => cy.get('[aria-label="Please enter OTP character 2"]'),
        otp3: () => cy.get('[aria-label="Please enter OTP character 3"]'),
        otp4: () => cy.get('[aria-label="Please enter OTP character 4"]'),
        otp5: () => cy.get('[aria-label="Please enter OTP character 5"]'),
        otp6: () => cy.get('[aria-label="Please enter OTP character 6"]'),
        verifyemailbtn: () => cy.get('.ant-btn'),
        nxtbtnclick: () => cy.get('.ant-btn-primary'),
        textarea: () => cy.get('.ant-input'),
        influencerhandle: () => cy.get('.ant-select-selection-search-input'),
        completeprofilebtn: () => cy.get('.ant-btn'),
        signupwithgooglebutton: () => cy.contains('Signup with google'),
        signupwithfbtn: () => cy.contains('Signup with facebook'),
        signupasinfluencertxt: () => cy.contains('Signup as influencer'),
        alreadyhaveanaccunttxt: () => cy.contains('Already have an account?'),
        loginlink: () => cy.get('a'),
        imgpresent: () => cy.get('img[src="/src/assets/images/Group 5.png"]'),
        backgroundcolor: () => cy.get('section.ant-layout')

    }

    errormessage = {
        showvalidationmessage: () => cy.get('.ant-form-item-explain-error').should('have.text', 'Required field')
    }

    feildsvalidaitonmsg = {
        errormsg1: () => cy.get('.ant-form-item-explain-error').eq(0).should('have.text', 'Required field'),
        errormsg2: () => cy.get('.ant-form-item-explain-error').eq(1).should('have.text', 'Required field'),
        errormsg3: () => cy.get('.ant-form-item-explain-error').eq(2).should('have.text', 'Required field'),
        errormsg4: () => cy.get('.ant-form-item-explain-error').eq(3).should('have.text', 'Required field'),
    }




    clickonsignupusingemailnumber() {
        this.elements.signupusingemailnumber().contains('Signup using email/number').click()
        cy.url().should('be.eq', "https://app.influnaire.dreamkashmir.com/influencer/register")
    }

    entersignupfields(fname, lname, email, phone) {
        this.elements.firstnametextfield().type(fname)
        this.elements.lastnametextfield().type(lname)
        this.elements.emailtextfield().type(email)
        this.elements.phonenumbertextfiled().type(phone)
        this.elements.nextsetpsdbtn().click()
    }


    setpassword(psd1, psd2) {
        this.elements.setpsdfield().type(psd1)
        this.elements.Reenterpsdfield().type(psd2)
        this.elements.createaccntbtn().click({force:true})
        this.elements.verifyemailbtn().click({force:true})

    }

    enterotp() {
        this.elements.otp1().type('2')
        this.elements.otp2().type('2')
        this.elements.otp3().type('2')
        this.elements.otp4().type('2')
        this.elements.otp5().type('2')
        this.elements.otp6().type('2')
        this.elements.verifyemailbtn().click()
        cy.wait(3000)
        this.elements.nxtbtnclick().click()
        this.elements.textarea().type('Hey! this is Leon Messi')
        cy.wait(2000)
        this.elements.influencerhandle().click()
        //cy.pause()
        cy.wait(5000)
        cy.get('.ant-select-item-option-content').click()
        //cy.pause()
        //this.elements.influencerhandle().select('Demo').click()
        this.elements.completeprofilebtn().click()
    }

    checkvisiblefields() {
        this.elements.signupwithgooglebutton().should('be.visible').and('have.text', 'Signup with google')
        this.elements.signupwithfbtn().should('be.visible').and('have.text', 'Signup with facebook')
        this.elements.signupusingemailnumber().should('be.visible').and('have.text', 'Signup using email/number')
        this.elements.alreadyhaveanaccunttxt().should('be.visible').and('have.text', 'Already have an account?')
        this.elements.loginlink().should('be.visible').and('have.text', 'Signin Now')
        this.elements.imgpresent().should('have.attr', 'alt', '').and('have.css', 'width', '420px')
        this.elements.backgroundcolor().should('have.css', 'background-color', 'rgb(163, 237, 255)');

    }

    signupinfluencerfiledsvisibility() {
        this.elements.firstnametextfield().should('be.visible')
        this.elements.lastnametextfield().should('be.visible')
        this.elements.emailtextfield().should('be.visible')
        this.elements.phonenumbertextfiled().should('be.visible')
        this.elements.nextsetpsdbtn().should('be.visible')
        this.elements.alreadyhaveanaccunttxt().should('be.visible')
        this.elements.loginlink().should('be.visible')
        // this.elements.imgpresent().should('be.visible')
        this.elements.backgroundcolor().should('be.visible')
        cy.get('img').should('be.visible')
    }

    leavefieldsempty() {

        this.elements.nextsetpsdbtn().click()
        this.feildsvalidaitonmsg.errormsg1()
        this.feildsvalidaitonmsg.errormsg2()
        this.feildsvalidaitonmsg.errormsg3()
        this.feildsvalidaitonmsg.errormsg4()

    }

    leavepsdfieldempty() {


        this.elements.createaccntbtn().click()
        this.feildsvalidaitonmsg.errormsg1()
        this.feildsvalidaitonmsg.errormsg2()

    }


    multipleusersignup(frstname,lastname,email,ph,psd,confirmpsd){
        this.elements.signupusingemailnumber().contains('Signup using email/number').click()
        cy.wait(2000)
        this.entersignupfields(frstname,lastname,email,ph)
        cy.wait(2000)
        this.setpassword(psd,confirmpsd)
        cy.wait(2000)
       
    }
}

export default signup