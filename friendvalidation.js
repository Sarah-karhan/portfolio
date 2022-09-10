function fvalidation() {
    return formValidation();      
  }

function formValidation()
{
var empt = document.forms["form1"]["Namef"].value;
if (empt == "")
{
alert("Please enter a name ");
return false;
}

var empt2 = document.forms["form1"]["friendyes"].value;
if (empt2 == "" || empt2 != "yes" )
{
alert("Dont wanna be friends :( ");
return false;
}
}