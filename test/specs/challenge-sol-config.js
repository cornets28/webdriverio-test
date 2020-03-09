expect = require("chai").expect;
const config = require("../../config/main-config");

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

    browser.addCommand("waitAndClick", function(selector) {
      try {
        $(selector).waitForExist();
        $(selector).click();
      } catch (Error) {
        throw new Error("Could not click on selector: " + $(selector));
      }
    });

    browser.addCommand("waitAndSendkeys", function(selector, keys) {
      try {
        $(selector).waitForExist();
        $(selector).setValue(keys);
      } catch (Error) {
        throw new Error(
          "Could not send keys: " + $(keys) + ", using selector: " + $(selector)
        );
      }
    });

    const pageDetails = browser.getUrlAndTitle();
    expect(pageDetails.url).to.contain("webdriveruniversity");
    expect(pageDetails.title).to.contain("WebDriverUniversity");
  });

  it("Submit all information via the contact us page", () => {
    // const contactUsButton = $('//h1[text()="CONTACT US"]/..');
    //  contactUsButton.click();
    browser.waitAndClick('//h1[text()="CONTACT US"]/..');

    browser.switchWindow("WebDriver | Contact Us");
    // const firstName = $('//*[@name="first_name"]');
    // const lastName = $('//*[@name="last_name"]');
    // const emailAddress = $('//*[@name="email"]');
    // const message = $('//*[@name="message"]');
    browser.waitAndSendKeys('//*[@name="first_name"]', config.firstName);
    browser.waitAndSendKeys('//*[@name="last_name"]', config.lastName);
    browser.waitAndSendKeys('//*[@name="email"]', "joe_Blogs121@mail.com");
    browser.waitAndSendKeys('//*[@name="message"]', "Hello how are you?");
    browser.waitAndClick('//*[@value="SUBMIT"]');

    // const submitButton = $('//*[@value="SUBMIT"]');

    // firstName.setValue(config.firstName);
    // lastName.setValue(config.lastName);
    // emailAddress.setValue("joe_Blogs121@mail.com");
    // message.setValue("Hello how are you?");
    // submitButton.click();

    const contactUsSubmissionDetails = browser.getUrlAndTitle();
    browser.pause(6000);
    console.log(contactUsSubmissionDetails);
    expect(contactUsSubmissionDetails.url).to.contain("contact-form-thank-you");
  });
});
