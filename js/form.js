// jQuery snippet for changing HTML form into JSON
(function ($) {
  $.fn.serializeFormJSON = function () {

      var o = {};
      var a = this.serializeArray();
      $.each(a, function () {
          if (o[this.name]) {
              if (!o[this.name].push) {
                  o[this.name] = [o[this.name]];
              }
              o[this.name].push(this.value || '');
          } else {
              o[this.name] = this.value || '';
          }
      });
      return o;
  };
})(jQuery);

$(function() {

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDrg6aEURLreoVQeaoRGskTJ0FKlpESRCc",
    authDomain: "web-lab-b363f.firebaseapp.com",
    databaseURL: "https://web-lab-b363f.firebaseio.com",
    storageBucket: "form_submissions.appspot.com",
  };
  firebase.initializeApp(config);

  $('.contact-form').submit(function(e) {
    e.preventDefault();
    var $form = $(this);

    // serialize data to JSON
    var form_json = $form.serializeFormJSON();
    var date = new Date()
    form_json['id'] = date.getTime();
    form_json['created_at'] = date.toString();

    // console.log(form_json);

    $form.children('button').html("saving...")

    // saving to sheetsu
    $.ajax({
      url: 'https://sheetsu.com/apis/v1.0/fee30730abea',
      data: form_json,
      dataType: 'json',
      type: 'POST',

      // place for handling successful response
      // showing (redirecting to) something like /thanks.html
      // page could be a good idea
      success: function(data) {
        // clean up the form
        $form[0].reset();
        $form.children('button').html("Thanks, we'll contact you soon!");
        $form.children('button').prop("disabled", true);
      },

      // handling error response
      error: function(data) {
        $form.children('button').html("send");
        $form.children('button').prop("disabled", false);
      }
    });

    // save also to firebase
    firebase.database().ref('submissions/').push(form_json);

    return false;
  });
});
