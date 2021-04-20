// Bootstrap example starter JavaScript for disabling form submissions if there are invalid fields
(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();

function resetForm() {
    document.forms["contactEntry"]["name"].value = "";
    document.forms["contactEntry"]["email"].value = "";
    document.forms["contactEntry"]["phone"].value = "";
    document.forms["contactEntry"]["reason"].value = "";
    document.forms["contactEntry"]["info"].value = "";
    document.forms["contactEntry"]["name"].focus();
}

function extractData() {
    var name = document.forms["contactEntry"]["name"].value;
    var email = document.forms["contactEntry"]["email"].value;
    var phone = document.forms["contactEntry"]["phone"].value;
    var reason = document.forms["contactEntry"]["reason"].value;
    var info = document.forms["contactEntry"]["info"].value;
    var radios = document.getElementsByName('vistedBefore');
    var days = document.getElementsByName('contactDays');
    var contactDays = new Array();

    for (var i = 0, length = radios.length; i < length; i++) {
      if (radios[i].checked) {
        var visitedBefore=radios[i].value;
      }
    }

    for (var i = 0, length = days.length; i < length; i++) {
      if (days[i].checked) {
        contactDays.push(days[i].value);
      }
    }

    if (name !== "" && email !== "" && phone !== "") {
      alert("Thank you for submitting a contact request. We will be in touch with you soon!")
    }

   // We are returning false so that the form doesn't submit
   // and so that we can see the results
   return false;
}
