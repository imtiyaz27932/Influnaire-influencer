//const { beforeEach } = require("mocha")
import signup from "../POM/signupinfluencer";

let repodata;

describe('Influencer Signup Now Process', () => {
  beforeEach(() => {
    cy.fixture('influencerdata').then((data) => {
      repodata = data;
      cy.visit(Cypress.config('baseUrl'), { timeout: 100000 });

    })
  })

  it('verify that if fields are visible after clicking on signup now link', () => {
    cy.contains('Signup Now').click()
    const inf = new signup()
    inf.checkvisiblefields()

  })


  it('verify that Signup as influencer fields are visible', () => {
    cy.contains('Signup Now').click()
    const inf = new signup()
    inf.clickonsignupusingemailnumber()
    inf.signupinfluencerfiledsvisibility()


  })

  it('verify that if the user leaves all the fields of Signup as influencer empty and click on next>setPassword', () => {
    cy.contains('Signup Now').click()
    const inf = new signup()
    inf.clickonsignupusingemailnumber()
    inf.leavefieldsempty()

  })

  it('verify that if the user leaves the password field empty and gives validation message', () => {
    cy.contains('Signup Now').click()
    const inf = new signup()
    inf.clickonsignupusingemailnumber()
    inf.entersignupfields(repodata.Firstname, repodata.Lastname, repodata.Email, repodata.Phonenumber)
    inf.leavepsdfieldempty()

  })

  it('Influencer wants to signup', () => {
    cy.contains('Signup Now').click()
    const inf = new signup()
    inf.clickonsignupusingemailnumber()
    inf.entersignupfields(repodata.Firstname, repodata.Lastname, repodata.Email, repodata.Phonenumber)
    inf.setpassword(repodata.Password, repodata.ConfirmPassword)
    inf.enterotp()


  })


  it.only('verify that if the user did not enter OTP and verifies email', () => {
    cy.contains('Signup Now').click()
    const inf = new signup()
    inf.clickonsignupusingemailnumber()
    //inf.entersignupfields(repodata.Firstname, repodata.Lastname, repodata.Email, repodata.Phonenumber)
    inf.entersignupfields('imtiyaz', 'Ahmad', 'selectorhub2@gmail.com', '9906411027')
    inf.setpassword(repodata.Password, repodata.ConfirmPassword)
    cy.on('window:alert', (text) => {
      expect(text).to.contains('enter valid otp');

    })
  })


})