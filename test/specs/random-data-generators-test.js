expect = require("chai").expect;
const config = require("../../config/main-config");
const dataGenerators = require("../../utils/dataGenerator");

describe("Test contact us page on webdriveruni", () => {
  beforeEach(function() {
    browser.setWindowSize(1800, 1200);
    browser.url("./");
    browser.addCommand("getUrlAndTitle", () => {
      return {
        url: browser.getUrl(),
        title: browser.getTitle()
      };
    });
    const pageDetails = browser.getUrlAndTitle();
    expect(pageDetails.url).to.contain("webdriveruniversity");
    expect(pageDetails.title).to.contain("WebDriverUniversity");
  });

  it("Submit all information via the contact us page", () => {
    const contactUsButton = $('//h1[text()="CONTACT US"]/..');
    contactUsButton.click();

    browser.switchWindow("WebDriver | Contact Us");
    const firstName = $('//*[@name="first_name"]');
    const lastName = $('//*[@name="last_name"]');
    const emailAddress = $('//*[@name="email"]');
    const message = $('//*[@name="message"]');
    const submitButton = $('//*[@value="SUBMIT"]');

    firstName.setValue(config.firstName);
    lastName.setValue(config.lastName);
    emailAddress.setValue(dataGenerators.generateRandomEmailAddress());
    message.setValue(dataGenerators.generateRandomString());
    submitButton.click();

    const contactUsSubmissionDetails = browser.getUrlAndTitle();
    browser.pause(3000);
    console.log(contactUsSubmissionDetails);
    expect(contactUsSubmissionDetails.url).to.contain("contact-form-thank-you");
  });
});
