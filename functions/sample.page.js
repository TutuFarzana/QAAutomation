import Page from './page.js';

class samplePage extends Page {
  get signInButton() { return browser.element('//a[@class="login"]'); }
  get emailBar() { return browser.element('//*[@id="email_create"]');}
  get createButton() {return browser.element('//*[@id="SubmitCreate"]');}
  get radioButton() {return browser.element('//*[@id="id_gender2"]');}
  get firstName() {return browser.element('//*[@id="customer_firstname"]');}
  get lastName() {return browser.element('//*[@id="customer_lastname"]');}
  get password() {return browser.element('//*[@id="passwd"]');}
  get day() {return browser.element('//*[@id="days"]');}
  get month() {return browser.element('//*[@id="months"]');}
  get year() {return browser.element('//*[@id="years"]');}
  get address() {return browser.element('//*[@id="address1"]');}
  get city() {return browser.element('//*[@id="city"]');}
  get state() {return browser.element('//*[@id="id_state"]');}
  get zip() {return browser.element('//*[@id="postcode"]');}
  get country() {return browser.element('//*[@id="id_country"]');}
  get mobileNumber() {return browser.element('//*[@id="phone_mobile"]');}
  get aliasAddress() {return browser.element('//*[@id="alias"]');}
  get registerButton() {return browser.element('//*[@id="submitAccount"]');}
  get searchBar() {return browser.element('//*[@id="search_query_top"]');}
  get searchBoxButton() {return browser.element('//*[@id="searchbox"]/button');}
  get addToCartButton() {return browser.element('//*[@id="center_column"]/ul/li/div/div[2]/div[2]/a[1]');}

  goToHome () {
    browser.url('http://automationpractice.com');
  }

  goToSignInPage () {
    this.signInButton.click(); 
  }

  goToEnterMail () {
    this.emailBar.setValue('rpasma222o78e@fg.com');
    
  }

  goToCreateAccountPage () {
    this.createButton.click();
    browser.pause(4000);
  }

  enterDetails () {
    this.radioButton.click();
    this.firstName.setValue('Tutu');
    this.lastName.setValue('Farzana');
    this.password.setValue('qburst');
    this.day.selectByVisibleText('21');
    this.month.selectByVisibleText('March');
    this.year.selectByVisibleText('1996');
    this.address.setValue('aluva');
    this.city.setValue('ernakulam');
    this.state.selectByVisibleText('Alaska');
    this.zip.setValue('83101');
    this.mobileNumber.setValue('7907662216');
    this.aliasAddress.setValue('pilihode');
    this.registerButton.click();
  
  }

  searchShirt () {
    this.searchBar.setValue('shirt');
    this.searchBoxButton.click();
    browser.pause(3000);
  }

  addToCart() {
    browser.pause(5000);
    this.addToCartButton.click();
    browser.pause(2000);
  }
};
export default new samplePage();
