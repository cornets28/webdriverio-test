expect = require("chai").expect;
should = require("chai").should();
assert = require("chai").assert;

describe("Add Command", () => {
  beforeEach(function() {
    browser.setWindowSize(1800, 1200);
    browser.url("./");
  });

  browser.addCommand("getUrlAndTitle", () => {
    return {
      url: browser.getUrl(),
      title: browser.getTitle()
    };
  });

  it("Test webdriveruni login portal", () => {
    const clickById = $("#login-portal");
    clickById.click();

    browser.switchWindow("WebDriver | Login Portal");

    //const loginPageTitle = browser.getTitle();
    //const loginUrl = browser.getUrl();
    const loginPageData = browser.getUrlAndTitle();

    expect(loginPageData.title).to.contains("Login Portal");
    expect(loginPageData.url).to.contains("Login-Portal");
  });
});
