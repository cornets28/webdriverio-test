const request = require("sync-request");

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
      let inputFirstname = $('[name = "first_name"]');
      let inputLastname = $('[name = "last_name"]');
      let email = $('[name = "email"]');
      let comment = $('[name = "message"]');
      let submission = $('[type = "submit"]');
      inputFirstname.setValue("Sammy");
      inputLastname.setValue("Brooks");
      email.setValue(loginDetail.email);
      comment.setValue(loginDetail.body);
      submission.click();
    });
  });

  // it("Should not be able to submit a successful submission via contact us form as all fields are required", done => {
  //   let inputFirstname = $('[name = "first_name"]');
  //   let inputLastname = $('[name = "last_name"]');
  //   let email = $('[name = "email"]');
  //   let comment = $('[name = "message"]');
  //   let submission = $('[type = "submit"]');
  //   inputFirstname.setValue("Certil");
  //   inputLastname.setValue("Remy");
  //   email.setValue("certil@gmail.com");
  //   comment.setValue("Selenium webdriverio testing2...");
  //   submission.click();
  // });
});
