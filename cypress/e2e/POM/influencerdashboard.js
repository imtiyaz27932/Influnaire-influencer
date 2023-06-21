



class Dashboard {
    elements = {
        logo: () => cy.get('img'),
        homelink: () => cy.contains('Home'),
        Campaigns: () => cy.contains('Campaigns'),
        Messages: () => cy.contains('Messages'),
        Payments: () => cy.contains('Payments'),
        Profile: () => cy.contains('Profile'),
        Settings: () => cy.contains('Settings'),


        Aboutustxt: () => cy.contains('About us'),
        listitemtxt: () => cy.contains('List item'),
        Switchthm: () => cy.contains('Switch Theme'),
        activatetheme: () => cy.get('.myReact-icons').eq(7),
        Deactivatebtn: () => cy.get('#deactive_button'),
        Sadtoctxt: () => cy.get('h4.ant-typography'),
        // catimg:()=> cy.get('.justify-center > img'),
        paragraphtext: () => cy.get('.px-4'),
        clickondeactiveaccntbtn: () => cy.get('.ant-btn'),
        reactivatebtn: () => cy.get('.ant-btn'),
        continuetoacnt: () => cy.get('.ant-btn'),
        logoutbtn: () => cy.get('#logout'),




    }

    Dashboardfiels() {
        this.elements.logo().should('be.visible')
        this.elements.homelink().should('be.visible')
        this.elements.Campaigns().should('be.visible')
        this.elements.Messages().should('be.visible')
        this.elements.Profile().should('be.visible')
        this.elements.Settings().should('be.visible')
    }


    logout() {
        this.elements.Settings().click()
        this.elements.logoutbtn().click()
        cy.url().should('be.eq', 'https://app.influnaire.dreamkashmir.com/influencer/login')
    }

    settingfieldvisible() {
        this.elements.Settings().click()
        this.elements.Aboutustxt().should('be.visible')
        this.elements.listitemtxt().should('be.visible')
        this.elements.Switchthm().should('be.visible')
        this.elements.Deactivatebtn().should('be.visible')
        this.elements.logoutbtn().should('be.visible')
    }

    DarkTheme() {
        this.elements.Settings().click()
        cy.wait(3000)
        cy.get('.ant-layout-content').should('have.css', 'background-color', 'rgb(245, 245, 245)')
        this.elements.activatetheme().click()
        cy.wait(3000)
        cy.get('.ant-layout-content').should('have.css', 'background-color', 'rgb(0, 0, 0)')
        this.elements.activatetheme().click()
        cy.wait(3000)
        cy.get('.ant-layout-content').should('have.css', 'background-color', 'rgb(245, 245, 245)')

    }

    Deactivateaccount() {
        this.elements.Settings().click()
        this.elements.Deactivatebtn().click()
        cy.get('.flex.justify-center img[src="/src/assets/images/cat.png"]').should('be.visible');
        this.elements.Sadtoctxt().should('have.text', 'Sad to see you go')
        this.elements.paragraphtext().should('have.text', "This will make your account invisible to brands, you won't receive any emails or notifications. To Reactive login back to your account and click on re-activate account");
        this.elements.clickondeactiveaccntbtn().click()
    }
    reactivateaccount() {
        this.elements.reactivatebtn().click()
        cy.wait(2000)
        this.elements.continuetoacnt().click()
        cy.wait(5000)


    }

}






//logoutbtn: () => cy.contains('Logout'),








// logout() {
//     this.elements.logoutbtn().should('be.visible').click()
//     cy.wait(5000)
//     cy.url().should('be.eq', 'https://app.influnaire.dreamkashmir.com/influencer/login')
// }

export default Dashboard