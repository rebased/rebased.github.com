var serializeFormJSON = function(form) {
  var date = new Date()
  var json = {
    'fullname': form.querySelector("input[name='fullname']").value,
    'email': form.querySelector("input[name='email']").value,
    'id': date.getTime(),
    'created_at': date.toString()
  }

  return json;
};

var sendToFirebase = function(json) {
  return new Promise(function(resolve, reject) {
    var config = {
      apiKey: "AIzaSyDrg6aEURLreoVQeaoRGskTJ0FKlpESRCc",
      authDomain: "web-lab-b363f.firebaseapp.com",
      databaseURL: "https://web-lab-b363f.firebaseio.com",
      storageBucket: "form_submissions.appspot.com",
    };

    firebase.initializeApp(config);
    firebase.database().ref('submissions/').push(json, resolve());
  });
};

var sendForm = function(event) {
  event.preventDefault();
  var button = this.querySelector('button');
  button.disabled = true;
  button.innerHTML = 'saving...';

  var form_json = serializeFormJSON(this);
  var form = this;

  sendToFirebase(form_json)
    .then(function() {
      form.reset();
      button.innerHTML = "Thanks, we'll contact you soon!";
      button.classList.add('after-submit');
  }).catch(function(error) {
    console.log(error);
    button.innerHTML = 'send';
    button.disabled = false;
  });
}

var contactTop = document.getElementById('contact-form-top');
var contactBottom = document.getElementById('contact-form-bottom');
var contactJobs = document.getElementById('contact-jobs');
if (contactTop !== null) {
  contactTop.addEventListener('submit', sendForm);
}
if (contactBottom !== null) {
  contactBottom.addEventListener('submit', sendForm);
}
if (contactJobs !== null) {
  contactJobs.addEventListener('submit', sendForm);
}