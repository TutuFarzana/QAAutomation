import { defineSupportCode } from 'cucumber';
import samplePage from '../functions/sample.page.js';

defineSupportCode(function({ Given, When, Then }) {

  Given(/^User goes to WebdriverIO Home page$/, () => {
    samplePage.goToHome();
  });

  When(/^User clicks sign in$/, () => {
    samplePage.goToSignInPage();
  });

  Then(/^Enter valid mail$/, () => {
    samplePage.goToEnterMail();
  });

  When(/^User clicks create account button$/,() => {
    samplePage.goToCreateAccountPage();
  });

  When(/^User enter details$/,() => {
    samplePage.enterDetails();
  });

  When(/^User searches$/,() => {
    samplePage.searchShirt();
  });
  
  When(/^User clicks add to cart$/,() => {
    samplePage.addToCart();
  });
});
