describe("Test that the buttton is clickable when Ajax loader completes", () => {
  const url = "http://www.webdriveruniversity.com/";

  it("Attempt to click the button ASASP", () => {
    browser.url(url);
    $("#ajax-loader").click();
  });

  it("Attempt to click the button after 6 seconds", done => {
    browser.url(url + "Ajax-Loader/index.html");

    browser.setTimeout({ script: 60000 });
    browser.pause(8000);
    // browser.debug();
    $("#button1").click();
    browser.pause(6000);
  });
});
