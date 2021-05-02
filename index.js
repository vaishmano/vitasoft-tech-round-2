function validateForm() {
  var x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
  
  var x = document.forms["myForm"]["mname"].value;
  if (x == "") {
    alert("Middle Name must be filled out");
    return false;
  }

  var x = document.forms["myForm"]["lname"].value;
  if (x == "") {
    alert("Last Name must be filled out");
    return false;
  }

  var x = document.forms["myForm"]["address"].value;
  if (x == "") {
    alert("address must be filled out");
    return false;
  }

  var x = document.forms["myForm"]["type"].value;
  if (x == "item0") {
    alert("country must be filled out");
    return false;
  }

  var x = document.forms["myForm"]["zip"].value;
  if (x == "") {
    alert("pincode must be filled out");
    return false;
  }

  var x = document.forms["myForm"]["email"].value;
  var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  if (x == "") {
    alert("email must be filled out");
    return false;
  }
  if(reg.test(x) == false) {
        alert('Invalid Email Address');
        return false;
 }


  var x = document.forms["myForm"]["phone"].value;
  // var phoneno = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
  if (x == "") {
    alert("phone number must be filled out");
    return false;
  }

  //   if(x.value.notmatch(phoneNum)) {
  //       alert("please enter valid phone number");
  //      return false;
  // }


  var x = document.forms["myForm"]["height"].value;
  if (x == "") {
    alert("height must be filled out");
    return false;
  }

  var x = document.forms["myForm"]["weight"].value;
  if (x == "") {
    alert("weight must be filled out");
    return false;
  }
  else{
    showInput();
  }
  
}



$(document).ready(function () {
  $("#type").change(function () {
     switch($(this).val()) {
        case 'India':
            $("#size").html("<option value='Tamil Nadu'>Tamil Nadu</option><option value='Kerala'>Kerala</option><option value='Delhi'>Delhi</option>");
            break;
        case 'USA':
            $("#size").html("<option value='California'>California</option><option value='texas'>texas</option><option value='Florida'>Florida</option>");
            break;
        case 'Germany':
            $("#size").html("<option value='hamburg'>hamburg</option><option value='berlin'>berlin</option><option value='Sachsen'>Sachsen</option>");
            break;
        default:
            $("#size").html("<option value=''>--select country--</option>");
     }
  });
});




function showInput() {

        document.getElementById('display').innerHTML = "First Name:<< "+ document.getElementById("fname").value + ">>";
        document.getElementById('display1').innerHTML = "Middle Name:<< "+ document.getElementById("mname").value + ">>";
        document.getElementById('display2').innerHTML = "Last Name:<< "+ document.getElementById("lname").value + ">>";
        document.getElementById('displayx').innerHTML = "Address:<< "+document.getElementById("address").value+","+ document.getElementById("type").value +","+document.getElementById("size").value+","+document.getElementById("zip").value+">>" ;
        
        document.getElementById('display3').innerHTML = "email:<< "+ document.getElementById("email").value + ">>"+"		"+"Phone number:<< "+ document.getElementById("phone").value + ">>";
      
        document.getElementById('display5').innerHTML = "height: "+ document.getElementById("height").value +"kg  "+"Weight: "+ document.getElementById("weight").value+"ft ";
        



                    

    }