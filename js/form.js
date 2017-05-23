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

var config = {
  apiKey: "AIzaSyDrg6aEURLreoVQeaoRGskTJ0FKlpESRCc",
  authDomain: "web-lab-b363f.firebaseapp.com",
  databaseURL: "https://web-lab-b363f.firebaseio.com",
  storageBucket: "form_submissions.appspot.com",
};

var sendForm = function(e) {
  e.preventDefault();
  this.querySelector('button').innerHTML = "saving...";

  //initialize Firebase
  firebase.initializeApp(config);

  //serialize data to JSON
  var form_json = serializeFormJSON(this);

  // send data to sheetsu
  var form = this;
  var button = form.querySelector('button');
  var request = new XMLHttpRequest();
  request.open('POST', 'https://sheetsu.com/apis/v1.0/fee30730abea');
  request.setRequestHeader('Content-Type', 'application/json');

  request.onload = function() {
    if (request.status >= 200 && request.status < 400) {
      // clean up the form
      form.reset();
      button.innerHTML = "Thanks, we'll contact you soon!";
      button.classList.add('after-submit');
      button.setAttribute('disabled', true);
    } else {
      button.innerHTML = 'send';
      button.setAttribute('disabled', false);
    }
  };

  request.onerror = function() {
    button.innerHTML = 'send';
    button.setAttr('disabled', false);
  };

  request.send(JSON.stringify(form_json));

  // save also to firebase
  firebase.database().ref('submissions/').push(form_json);
}

document.getElementById('contact-form-top').addEventListener('submit', sendForm);
document.getElementById('contact-form-bottom').addEventListener('submit', sendForm);
