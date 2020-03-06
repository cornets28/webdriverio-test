expect = require("chai").expect;
should = require("chai").should();
assert = require("chai").assert;
const Element = require("../../pageObjects/Selectors_Page.js");
const element = new Element();

beforeEach(() => {
  browser.url("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
});

describe("Test Contact Us form WebdriverUni", () => {
  it("Should be able to submit a successful submission via contact us form", done => {
    element.submitAllInformationViaContactUsForm(
      "joe",
      "Blogs",
      "joe_blogs123@outlook.com",
      "How are you?"
    );
  });

  it("Should not be able to submit a successful submission via contact us form as all fields are required", done => {
    element.setFirstName("LOuda");
    element.setLastName("Hally");
    element.setEmailAddress("hall@gmail.com");
    element.clickSubmitButton();
    element.confirmUnsuccessfulSubmission();
  });

  it("Should not be able to submit a successful submission via contact us form as all fields are required", done => {
    element.setLastName("Hall");
    element.setEmailAddress("hall@gmail.com");
    element.clickSubmitButton();
    element.confirmUnsuccessfulSubmission();
  });

  it("Should not be able to submit a successful submission via contact us form as all fields are required", done => {
    element.setLastName("Halloooo");
    element.setEmailAddress("halloo@gmail.com");
    element.clickSubmitButton();
    element.confirmUnsuccessfulSubmission();
  });
});
