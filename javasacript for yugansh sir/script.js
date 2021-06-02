function validateForm() {
    var fname = document.forms["myForm"]["fname"].value;
    var lname = document.forms["myForm"]["lname"].value;
    var password = document.forms["myForm"]["pwd"].value;
    var email = document.forms["myForm"]["email"].value;
    if (fname == "") {
        alert(" First Name must be filled out");
        return false;
    }

    if (lname == "") {
        alert(" Last Name must be filled out");
        return false;
    }

    if (email == "") {
        alert(" Email must be filled out");
        return false;
    }

    if (password == "") {
        alert(" Password must be filled out");
        return false;
    }

}
