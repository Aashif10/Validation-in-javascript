function validateForm() {
  var name1 = document.getElementById("fname").value;
  var name2 = document.getElementById("lname").value;
  var pw1 = document.getElementById("pass1").value;
  var pw2 = document.getElementById("pass2").value;

  if (name1 == "") 
  {
    document.getElementById("message1").innerHTML ="**Fill the first Name please!";
    return false;
  }

  //chararter validation
  if (!isNaN(name1)) 
  {
    document.getElementById("message1").innerHTML ="**only characters are allowed";
    return false;
  }

  if (!isNaN(name2)) {
    document.getElementById("message2").innerHTML="**only characters are allowed";
    return false;
  }

  if (pw1 == "") {
    document.getElementById("message3").innerHTML ="** Please fill the password please!";
    return false;
     }

  if (pw2 == "") {
    document.getElementById("message3").innerHTML ="** Please fill the password please!";
    return false;
  }

  if (pw1.length < 8) {
    document.getElementById("message3").innerHTML ="**Password length must be atleast 8 character ";
    return false;
  }

  if (pw1.length > 15) {
    document.getElementById("message3").innerHTML ="**Password length must be exceed 15 character";
    return false;
  }

  if (pw1 != pw2) {
    document.getElementById("message4").innerHTML ="**Password does not match";
    return false;
  } else {
    alert("Your password create successfully");
    document.write("Javascript form has been submmited successfully");
  }
}
