describe("Test that the buttton is clickable when Ajax loader completes", () => {
  const url = "http://www.webdriveruniversity.com/Ajax-Loader/index.html";

  it("Attempt to click the button ASASP", () => {
    browser.url(url);
    $("#button1").click();
  });

  it("Attempt to click the button after 6 seconds", done => {
    browser.url(url);
    this.setTimeout(20000);
    browser.pause(6000);
    $("#button1").click();
    browser.pause(6000);
  });
});
