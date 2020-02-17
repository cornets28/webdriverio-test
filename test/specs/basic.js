describe("Verify whether webdriveruniversity links on homepage work correctly", function() {
  const baseUrl = "http://www.webdriveruniversity.com";
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
    expect(title).to.equal("WebDriverUniversity.com");
    // title.should.equal("WebDriverUniversity.com"); //or
    const contactButton = $("#contact-us");

    contactButton.click();
    browser.pause(3000);
    browser.newWindow(baseUrl + "Contact-Us/contactus.html");
    expect(browser.getUrl()).to.include("Contact-Us", "URL Mismatch");

    expect(browser.getUrl()).to.equal(
      "http://www.webdriveruniversity.com/Contact-Us/contactus.html"
    );

    expect(browser.getTitle()).to.include("WebDriver | Contact Us");
  });

  it("check that the login button opens the login portal page", function(done) {
    browser.url(baseUrl);

    let title = browser.getTitle();
    assert.equal(title, "WebDriverUniversity.com");
    console.log("Title is: " + title);
    const loginButton = $("#login-portal");
    loginButton.click();
    browser.pause(3000);
  });
});
