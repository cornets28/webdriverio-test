describe("Test Contact Us form WebdriverUni", () => {
  beforeEach(() => {
    browser.url("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
  });

  it("Should be able to submit a successful submission via contact us form", done => {
    let inputFirstname = $('[name = "first_name"]');
    let inputLastname = $('[name = "last_name"]');
    let email = $('[name = "email"]');
    let comment = $('[name = "message"]');
    let submission = $('[type = "submit"]');
    inputFirstname.setValue("Sammy");
    inputLastname.setValue("Brooks");
    email.setValue("brokks@gmail.com");
    comment.setValue("Selenium webdriverio testing...");
    submission.click();

    let successfulContactConfirmation = $("#contact_reply h1").isExisting();
    expect(
      successfulContactConfirmation,
      "Succeful submission Message does not exist"
    ).to.be.true;
    successfulContactConfirmation = $("#contact_reply h1");
    let successfulSubmission = successfulContactConfirmation.getText();
    expect(successfulSubmission).to.equal("Thank You for your Message!");
  });

  it("Should not be able to submit a successful submission via contact us form as all fields are required", done => {
    let inputFirstname = $('[name = "first_name"]');
    let inputLastname = $('[name = "last_name"]');
    let comment = $('[name = "message"]');
    let submission = $('[type = "submit"]');
    inputFirstname.setValue("Certil");
    inputLastname.setValue("Remy");
    comment.setValue("Selenium webdriverio testing2...");
    submission.click();

    let successfulContactConfirmation = $("#contact_reply h1").isExisting();
    expect(
      successfulContactConfirmation,
      "Succeful submission Message does not exist"
    ).to.be.false;
  });

  it("Should not be able to submit a successful submission via contact us form as all fields are required", done => {
    let inputLastname = $('[name = "last_name"]');
    let email = $('[name = "email"]');
    let comment = $('[name = "message"]');
    let submission = $('[type = "submit"]');
    inputLastname.setValue("Tesnor");
    email.setValue("tazz@gmail.com");
    comment.setValue("Selenium webdriverio testing3...");
    submission.click();

    let successfulContactConfirmation = $("#contact_reply h1").isExisting();
    expect(
      successfulContactConfirmation,
      "Succeful submission Message does not exist"
    ).to.be.false;

    let errorText = $("body").getText();
    expect(errorText).to.include("Error: all fields are required");
  });
});
