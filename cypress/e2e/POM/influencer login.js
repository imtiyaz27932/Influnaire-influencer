class login {
    elements = {
        loginEmailTextField: () => cy.get('#email'),
        loginPasswordTextField: () => cy.get('#password'),
        loginBtn: () => cy.get('#basic > .ant-btn'),
        eyeicon: () => cy.get('.ant-input-suffix'),
        googlesocialbutton: () => cy.get('.ant-btn-default'),
        facebooksocialbutton: () => cy.get('.gap-3 > .ant-btn-primary'),
        profilename: () => cy.get('h5.ant-typography')

    }

    errormsg = {
        givevalidationmsg: () => cy.get('#notistack-snackbar').should('have.text', 'Invalid credentials')
    }


    feildsvalidaitonmsg = {
        errormsg1: () => cy.get('.ant-form-item-explain-error').eq(0).should('have.text', 'Required field'),
        errormsg2: () => cy.get('.ant-form-item-explain-error').eq(1).should('have.text', 'Required field'),
        errormsgnull: () => cy.get('.ant-form-item-explain-error').should('have.text', 'Required field')
    }

    loginCredentials(email, psd,) {
        this.elements.loginEmailTextField().type(email);
        this.elements.loginPasswordTextField().type(psd);
        this.elements.loginBtn().click();
        cy.wait(6000)
        cy.url().should('be.eq', 'https://app.influnaire.dreamkashmir.com/influencer/dashboard')
        cy.wait(3000)

        //cy.get('.ant-layout-content').scrollTo('bottom', { ensureScrollable: false })

        //this.elements.profilename().should('have.text',profile)

    }

    verifystepsondashboard() {
        cy.get('ul.ant-timeline')
            .contains('Step 1')
            .should('exist');

        cy.get('ul.ant-timeline')
            .contains('Verify your mobile number')
            .should('exist');

        cy.get('ul.ant-timeline')
            .contains('Verify your email')
            .should('exist');

        cy.get('ul.ant-timeline')
            .contains('Connect a social media profile')
            .should('exist');

        cy.get('ul.ant-timeline')
            .contains('Get 10k Followers')
            .should('exist');

        cy.get('ul.ant-timeline')
            .contains('1k of 10k')
            .should('exist');
        cy.wait(2000)


        cy.contains('Profile').click()
        cy.wait(2000)

        cy.get('.ant-tabs-tab-active')
            .should('contain', 'Profile Overview'); // Validate that the tab contains the text 'Profile Overview'

        // Validate the profile information
        cy.get('.ant-avatar img')
            .should('have.attr', 'src', 'https://img.freepik.com/free-icon/user_318-159711.jpg'); // Validate the profile image URL

        cy.get('.ant-typography')
            .should('contain', 'Leon Messi') // Validate the profile name
            .should('contain', 'Unknown'); // Validate the profile status (e.g., 'Unknown')

        cy.get('.ant-tag')
            .should('contain', 'General'); // Validate the profile category

        cy.get('.line-clamp-2 .ant-typography')
            .should('contain', 'Your bio will be added here'); // Validate the profile bio

        // Perform assertions on social media links
        cy.get('#rc-tabs-1-tab-2')
            .should('contain', 'Instagram'); // Validate the Instagram tab

        cy.get('#rc-tabs-1-tab-3')
            .should('contain', 'Facebook'); // Validate the Facebook tab

        cy.get('#rc-tabs-1-tab-4')
            .should('contain', 'Twitter'); // Validate the Twitter tab

        cy.get('#rc-tabs-1-tab-5')
            .should('contain', 'Youtube'); // Validate the YouTube tab


    }

    // validatesocialmediaaccounts() {
    //     // Validate Instagram card
    //     cy.get('.flex .flex-col .ant-card-body') // Assuming this selects the Instagram card body
    //         .eq(0)
    //         .within(() => {
    //             cy.get('img')
    //                 .should('have.attr', 'src', '/src/assets/images/connectInsta.png'); // Validate the Instagram icon image source

    //             cy.get('.ant-typography')
    //                 .should('have.text', 'Instagram'); // Validate the Instagram text

    //             cy.get('button')
    //                 .should('have.text', 'Connect'); // Validate the Connect button text
    //         });

    //     // Validate Facebook card
    //     cy.get('.flex .flex-col .ant-card-body') // Assuming this selects the Facebook card body
    //         .eq(1)
    //         .within(() => {
    //             cy.get('img')
    //                 .should('have.attr', 'src', '/src/assets/images/connectFb.svg'); // Validate the Facebook icon image source

    //             cy.get('.ant-typography')
    //                 .should('have.text', 'Facebook'); // Validate the Facebook text

    //             cy.get('button')
    //                 .should('have.text', 'Connect'); // Validate the Connect button text
    //         });

    //     // Validate Youtube card
    //     cy.get('.flex .flex-col .ant-card-body') // Assuming this selects the Youtube card body
    //         .eq(2)
    //         .within(() => {
    //             cy.get('img')
    //                 .should('have.attr', 'src', '/src/assets/images/connectYoutube.svg'); // Validate the Youtube icon image source

    //             cy.get('.ant-typography')
    //                 .should('have.text', 'Youtube'); // Validate the Youtube text

    //             cy.get('button')
    //                 .should('have.text', 'Connect'); // Validate the Connect button text
    //         });

    // }

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
