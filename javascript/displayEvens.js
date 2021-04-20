function resetForm() {
    clearErrors();
    document.forms["numberEntry"]["startingNum"].value = "";
    document.forms["numberEntry"]["endingNum"].value = "";
    document.forms["numberEntry"]["stepNum"].value = "";
    document.getElementById("results").style.display = "none";
    document.forms["numberEntry"]["startingNum"].focus();
}

function clearErrors() {
    for (var loopCounter = 0;
        loopCounter < document.forms["numberEntry"].elements.length;
        loopCounter++) {
        if (document.forms["numberEntry"].elements[loopCounter]
           .parentElement.className.indexOf("has-") != -1) {

            document.forms["numberEntry"].elements[loopCounter]
               .parentElement.className = "form-group";
        }
    }
}

function validateItems() {
    clearErrors();
    var startingNum = document.forms["numberEntry"]["startingNum"].value;
    var endingNum = document.forms["numberEntry"]["endingNum"].value;
    var stepNum = document.forms["numberEntry"]["stepNum"].value;

    if (startingNum == "" || isNaN(startingNum)) {
        alert("Starting Number must be filled in with a number.");
        document.forms["numberEntry"]["startingNum"]
           .parentElement.className = "form-group has-error";
        document.forms["numberEntry"]["startingNum"].focus();
        return false;
    }
    if (endingNum == "" || isNaN(endingNum)) {
        alert("Ending Number must be filled in with a number.");
        document.forms["numberEntry"]["endingNum"]
           .parentElement.className = "form-group has-error";
        document.forms["numberEntry"]["endingNum"].focus();
        return false;
    }
    if (stepNum == "" || isNaN(stepNum)) {
        alert("Step must be filled in with a number.");
        document.forms["numberEntry"]["stepNum"]
           .parentElement.className = "form-group has-error";
        document.forms["numberEntry"]["stepNum"].focus();
        return false;
    }
    if (Number(endingNum) <= Number(startingNum))  {
        alert("Ending Number must be greater than Starting Number.");
        document.forms["numberEntry"]["endingNum"]
           .parentElement.className = "form-group has-error";
        document.forms["numberEntry"]["endingNum"].focus();
        return false;
    }
    if (Number(stepNum) < 1) {
        alert("Step Number must be greater than zero.");
        document.forms["numberEntry"]["stepNum"]
           .parentElement.className = "form-group has-error";
        document.forms["numberEntry"]["stepNum"].focus();
        return false;
    }

   document.getElementById("results").style.display = "block";
   document.getElementById("startingNumber").innerText = startingNum;
   document.getElementById("endingNumber").innerText = endingNum;
   document.getElementById("stepNumber").innerText = stepNum;

   var evens = new Array();

   for (var i=Number(startingNum); i<(Number(endingNum)+1); i=i+Number(stepNum)) {
     if (i % 2 == 0) {
       evens.push(i);
     }
   }

   document.getElementById("evens").innerText = evens;
   
   // We are returning false so that the form doesn't submit
   // and so that we can see the results
   return false;
}
