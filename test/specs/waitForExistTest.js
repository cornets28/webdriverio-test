beforeEach(function() {
  browser.url("http://www.webdriveruniversity.com/Ajax-Loader/index.html");
});
describe("Validate whether the click me button is visible", function() {
    it("Validate whether the click me button code is visible within the DOM", function(done) {
      this.timeout(20000);
      var clickMeButton = $("//p[text()='CLICK ME!']");
      clickMeButton.waitForExist(8000, false);
    });


     it("Validate whether the click me button appears once the Ajax loader fully loads", function(done) {
       this.timeout(20000);
       var clickMeButton = $("//p[text()='CLICK ME!']");
       clickMeButton.waitForVisible(8000, false);
     });
  
});
