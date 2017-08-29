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

var sendToSheetsu = function(json) {
  return new Promise(function(resolve, reject) {
    var request = new XMLHttpRequest();

    request.open('POST', 'https://sheetsu.com/apis/v1.0/fee30730abea');
    request.setRequestHeader('Content-Type', 'application/json');

    request.onload = function() {
      if (request.status >= 200 && request.status < 400) {
        resolve(request.response);
      } else {
        reject(request.statusText);
      }
    };

    request.onerror = function() {
      reject(request.statusText);
    };

    request.send(JSON.stringify(json));
  });
}

var sendForm = function(event) {
  event.preventDefault();
  var button = this.querySelector('button');
  button.disabled = true;
  button.innerHTML = 'saving...';

  var form_json = serializeFormJSON(this);
  var form = this;

  Promise.all([sendToSheetsu(form_json), sendToFirebase(form_json)])
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

document.getElementById('contact-form-top').addEventListener('submit', sendForm);
document.getElementById('contact-form-bottom').addEventListener('submit', sendForm);
