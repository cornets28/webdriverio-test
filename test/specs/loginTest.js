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
