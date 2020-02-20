const request = require("sync-request");
beforeEach(() => {
  browser.url("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
});

// browser.addCommand(
//   "submitDataViaContactUsForm",
//   (firsName, lastName, emailAddress, comments) => {
//     if (firsName) {
//       let firstnameSelector = $('[name = "first_name"]');
//       firstnameSelector.setValue(firsName);
//     }
//     if (lastName) {
//       let lastnameSelector = $('[name = "last_name"]');
//       lastnameSelector.setValue(lastName);
//     }
//     if (emailAddress) {
//       let email = $('[name = "email"]');
//       email.setValue(emailAddress);
//     }
//     if (comments) {
//       let commentsSelector = $('[name = "message"]');
//       comment.setValue(comments);
//     }
//     let submission = $('[type = "submit"]');
//     submission.click();
//   }
// );

describe("Test Contact Us form WebdriverUni", () => {
  const res = request(
    "GET",
    "http://jsonplaceholder.typicode.com/posts/1/comments"
  );
  const loginDetails = JSON.parse(res.getBody().toString("utf8"));

  var firstnameSelector = $('[name = "first_name"]');
  var lastnameSelector = $('[name = "last_name"]');
  var emailAddressSelector = $('[name = "emailAddressSelector"]');
  var commentsSelector = $('[name = "message"]');
  var successfulSubmissionSelector = $("#contact_reply h1");
  var unsuccessfulSubmissionSelector = $("body");
  var submissionButtonSelector = $('[type = "submit"]');

  function setFirstName(firstName) {
    return firstnameSelector.setValue(firstName);
  }
  function setLastName(lastName) {
    return lastnameSelector.setValue(lastName);
  }
  function setEmailAddress(emailAddress) {
    return emailAddressSelector.setValue(emailAddress);
  }
  function setComments(comments) {
    return commentsSelector.setValue(comments);
  }

  function clickSubmission() {
    return browser.click(submissionButtonSelector);
  }

  function confirmSuccsessfulSubmission() {
    const validateSubmissionHeader = browser.waitUntil(() => {
      return (
        browser.getText(successfulSubmissionSelector) ==
        "Thank You for your Message!"
      );
    }, 3000);
    expect(
      validateSubmissionHeader,
      "Succeful submission Message does not exist"
    ).to.be.true;
  }

  function confirmUnsuccsessfulSubmission() {
    const validateSubmissionHeader = browser.waitUntil(() => {
      return browser.getText(
        unsuccessfulSubmissionSelector,
        "Error: all fields are required"
      );
    }, 3000);
    expect(brower.getText(unsuccessfulSubmissionSelector)).to.include(
      "Error: all fields are required"
    );
  }

  loginDetails.forEach(loginDetail => {
    it("Should be able to submit a successful submission via contact us form", done => {
      setFirstName("Sam");
      setLastName("Brooks");
      setEmailAddress(loginDetail.email);
      setComments(loginDetail.body);
      clickSubmission();
      confirmSuccsessfulSubmission();
    });
  });

  it("Should not be able to submit a successful submission via contact us form as all fields are required", done => {
    setFirstName("LOuda");
    setLastName("Hally");
    setEmailAddress("hall@gmail.com");
    clickSubmission();
    confirmUnsuccsessfulSubmission();
  });

   it("Should not be able to submit a successful submission via contact us form as all fields are required", done => {
     setLastName("Hall");
     setEmailAddress("hall@gmail.com");
     clickSubmission();
     confirmUnsuccsessfulSubmission();
   });
   
    it("Should not be able to submit a successful submission via contact us form as all fields are required", done => {
      lastName("KenBoby");
      setEmailAddress("halloo@gmail.com");
      clickSubmission();
      confirmUnsuccsessfulSubmission();
    });
});
