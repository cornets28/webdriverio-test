class Selectors_Page {
  get firstnameSelector() {
    return $('[name = "first_name"]');
  }
  get lastnameSelector() {
    return $('[name = "last_name"]');
  }
  get emailAddressSelector() {
    return $('[name = "email"]');
  }
  get commentsSelector() {
    return $('[name = "message"]');
  }
  get successfulSubmissionSelect() {
    return $("#contact_reply h1");
  }
  get unsuccessfulSubmissionSelect() {
    return $("body");
  }
  get submissionButtonSelector() {
    return $('[type = "submit"]');
  }

  setFirstName(firstName) {
    this.firstnameSelector.setValue(firstName);
  }
  setLastName(lastName) {
    this.lastnameSelector.setValue(lastName);
  }
  setEmailAddress(emailAddress) {
    this.emailAddressSelector.setValue(emailAddress);
  }

  setComments(comments) {
    this.commentsSelector.setValue(comments);
  }

  successfulSubmissionSelector() {
    this.successfulSubmissionSelect;
  }

  unsuccessfulSubmissionSelector() {
    this.unsuccessfulSubmissionSelect;
  }

  unsuccessfulSubmissionSelectorText() {
    this.unsuccessfulSubmissionSelect.getText();
  }
  successfulSubmissionSelectorText() {
    this.successfulSubmissionSelect.getText();
  }

  // unsuccessfulSubmissionSelectorText() {
  //   this.unsuccessfulSubmissionSelect.getText();
  // }
  clickSubmission() {
    this.submissionButtonSelector.click();
  }
}

module.exports = Selectors_Page;
