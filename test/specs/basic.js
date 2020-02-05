describe("Verify whether webdriveruniversity links on homepage work correctly", function() {
  const baseUrl = "http://www.webdriveruniversity.com/";
  // let baseUrl;
  // if (process.env.SERVER === "prod") {
  //   baseUrl = "http://www.webdriveruniversity.com/";
  // } else {
  //   baseUrl = "http:localhost:3000";
  // }

  it("check that the contact us button opens the contact us page", function(done) {
    browser.url(baseUrl);
    let title = browser.getTitle();
    console.log("Title is: " + title);
    const contactButton = $("#contact-us");
    contactButton.click();
    browser.pause(3000);
  });

  it("check that the login button opens the login portal page", function(done) {
    browser.url(baseUrl);
    const loginButton = $("#login-portal");
    loginButton.click();
    let title = browser.getTitle();
    console.log("Title is: " + title);
    browser.pause(3000);
  });
});
