describe("Verify whether webdriveruniversity links on homepage work correctly", function() {
  it("check that the contact us button opens the contact us page", function(done) {
    browser.url("http://www.webdriveruniversity.com/");
    let title = browser.getTitle();
    console.log("Title is: " + title);
    const contactButton = $("#contact-us");
    contactButton.click();
    browser.pause(3000);
  });

  it("check that the login button opens the login portal page", function(done) {
    browser.url("http://www.webdriveruniversity.com/");
    const loginButton = $("#contact-us");
    loginButton.click();
    let title = browser.getTitle();
    console.log("Title is: " + title);
    browser.pause(3000);
  });
});
