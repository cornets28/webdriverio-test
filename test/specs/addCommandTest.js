const request = require("sync-request");

browser.addCommand(
  "submitDataViaContactUsForm",
  (firsName, lastName, emailAddress, comments) => {
    if (firsName) {
      let inputFirstname = $('[name = "first_name"]');
      inputFirstname.setValue(firsName);
    }
    if (lastName) {
      let inputLastname = $('[name = "last_name"]');
      inputLastname.setValue(lastName);
    }
    if (emailAddress) {
      let email = $('[name = "email"]');
      email.setValue(emailAddress);
    }
    if (comments) {
      let comment = $('[name = "message"]');
      comment.setValue(comments);
    }
    let submission = $('[type = "submit"]');
    submission.click();
  }
);

describe("Test Contact Us form WebdriverUni", () => {
  const res = request(
    "GET",
    "http://jsonplaceholder.typicode.com/posts/1/comments"
  );
  const loginDetails = JSON.parse(res.getBody().toString("utf8"));

  beforeEach(() => {
    browser.url("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
  });
  loginDetails.forEach(loginDetail => {
    it("Should be able to submit a successful submission via contact us form", done => {
      browser.submitDataViaContactUsForm(
        "Sam",
        "Brooks",
        loginDetail.email,
        loginDetail.body
      );

      let successfulContactConfirmation = $("#contact_reply h1").isExisting();
      expect(
        successfulContactConfirmation,
        "Succeful submission Message does not exist"
      ).to.be.true;
      successfulContactConfirmation = $("#contact_reply h1");
      let successfulSubmission = successfulContactConfirmation.getText();
      expect(successfulSubmission).to.equal("Thank You for your Message!");
    });
  });

  it("Should not be able to submit a successful submission via contact us form as all fields are required", done => {
    let inputFirstname = $('[name = "first_name"]');
    let inputLastname = $('[name = "last_name"]');
    let email = $('[name = "email"]');
    let comment = $('[name = "message"]');
    let submission = $('[type = "submit"]');
    inputFirstname.setValue("Certil");
    inputLastname.setValue("Remy");
    email.setValue("certil@gmail.com");
    comment.setValue("Selenium webdriverio testing2...");
    submission.click();
  });
});
