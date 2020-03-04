const request = require("sync-request");
const Element = require("./pageObjects/Selectors_Page.js");
const element = new Element();

beforeEach(() => {
  browser.url("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
});

describe("Test Contact Us form WebdriverUni", () => {
  const res = request(
    "GET",
    "http://jsonplaceholder.typicode.com/posts/1/comments"
  );
  const loginDetails = JSON.parse(res.getBody().toString("utf8"));

  function confirmSuccsessfulSubmission() {
    let validateSubmissionHeader = browser.waitUntil(() => {
      return (
        element.successfulSubmissionSelector,
        element.getText(element.successfulSubmissionSelector) ==
          "Thank You for your Message!"
      );
    }, 3000);
    expect(
      validateSubmissionHeader,
      "Succeful submission Message does not exist"
    ).to.be.true;
  }

  function confirmUnsuccsessfulSubmission() {
    let validateSubmissionHeader = browser.waitUntil(() => {
      let errorElementText = element.unsuccessfulSubmissionSelector;
      return errorElementText;
      element.unsuccessfulSubmissionSelector, "Error: all fields are required";
    }, 3000);
    element.unsuccessfulSubmissionSelector(),
      expect(element.unsuccessfulSubmissionSelector()).to.include(
        "Error: all fields are required"
      );
  }

  loginDetails.forEach(loginDetail => {
    it("Should be able to submit a successful submission via contact us form", done => {
      element.setFirstName("Sam");
      element.setLastName("Brooks");
      element.setEmailAddress(loginDetail.email);
      element.setComments(loginDetail.body);
      element.clickSubmission();
      confirmSuccsessfulSubmission();
    });
  });

  it("Should not be able to submit a successful submission via contact us form as all fields are required", done => {
    element.setFirstName("LOuda");
    element.setLastName("Hally");
    element.setEmailAddress("hall@gmail.com");
    element.clickSubmission();
    confirmUnsuccsessfulSubmission();
    expect(element.unsuccessfulSubmissionSelector()).to.include(
      "Error: all fields are required"
    );
  });

  it("Should not be able to submit a successful submission via contact us form as all fields are required", done => {
    element.setLastName("Hall");
    element.setEmailAddress("hall@gmail.com");
    element.clickSubmission();
    confirmUnsuccsessfulSubmission();
  });

  it("Should not be able to submit a successful submission via contact us form as all fields are required", done => {
    element.setLastName("Halloooo");
    element.setEmailAddress("halloo@gmail.com");
    element.clickSubmission();
    confirmUnsuccsessfulSubmission();
  });
});
