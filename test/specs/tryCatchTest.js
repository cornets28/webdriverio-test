expect = require("chai").expect;
should = require("chai").should();
assert = require("chai").assert;
const Element = require("../../pageObjects/Select2_Page.js");
const element = new Element();

describe("Test Contact Us form WebdriverUni", () => {
  beforeEach(() => {
    browser.setWindowSize(1300, 1200);
  });

  it("Test1: Should be able to submit a successful submission via contact us form", () => {
    element.submitAllInformationViaContactUsForm(
      "joe",
      "Blogs",
      "joe_blogs123@outlook.com",
      "How are you?"
    );
    element.successfulSubmissionHeader.waitForDisplayed(5000);
    try {
      expect(element.successfulSubmissionHeaderText).to.equal(
        "Thank You for your Message!"
      );
    } catch (err) {
      console.log("Exception:" + err);
      assert.fail();
    }
  });

  it("Test2: Should not be able to submit a successful submission via contact us form as all fields are required", () => {
    element.setLastName("Halloooo");
    element.setEmailAddress("halloo@gmail.com");
    element.clickSubmitButton();

    try {
      expect(element.unsuccessfulSubmissionHeaderText).to.have.string(
        "Error: all fields are required"
      );
    } catch (err) {
      console.log("Exception:" + err);
      assert.fail();
    }
  });
});
