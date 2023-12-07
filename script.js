/*alert("Loading....."); */

function addnewwrkexpfield() {
  // console.log("add");
  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("wefield");
  newNode.classList.add("mt-2");
  newNode.setAttribute("rows", 3);
  newNode.setAttribute("placeholder", "Enter Here");
  let weOb = document.getElementById("we");
  let WeAddButtonOb = document.getElementById("WeAddButton");

  weOb.insertBefore(newNode, WeAddButtonOb);
}

function addnewacadqfyfield() {
  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("aqfield");
  newNode.classList.add("mt-2");
  newNode.setAttribute("rows", 3);
  newNode.setAttribute("placeholder", "Enter Here");
  let aqOb = document.getElementById("aq");
  let aqAddButtonOb = document.getElementById("aqAddButton");

  aqOb.insertBefore(newNode, aqAddButtonOb);
}

// this wil generate resume
function generateresume() {
  console.log("shivam kumar");

  let namefield = document.getElementById("namefield").value;

  let nameT1 = document.getElementById("nameT1");

  nameT1.innerHTML = namefield;
  //direct
  document.getElementById("nameT2").innerHTML = namefield;
  //age
  document.getElementById("ageT").innerHTML =
    document.getElementById("agefield").value;

  //contact
  document.getElementById("contactT").innerHTML =
    document.getElementById("contactfield").value;

  //email
  document.getElementById("emailT").innerHTML =
    document.getElementById("emailfield").value;

  //address
  document.getElementById("addressT").innerHTML =
    document.getElementById("addressfield").value;

  //fb
  document.getElementById("fbT").innerHTML =
    document.getElementById("fbfield").value;

  //insta
  document.getElementById("instaT").innerHTML =
    document.getElementById("instagramfield").value;

  //linked
  document.getElementById("linkedT").innerHTML =
    document.getElementById("linkedfield").value;

  //hobby
  document.getElementById("hobbyT").innerHTML =
    document.getElementById("hobbyfield").value;

  //objective
  document.getElementById("objectiveT").innerHTML =
    document.getElementById("objectivefield").value;
  //skills
  document.getElementById("skillsT").innerHTML =
    document.getElementById("skillsfield").value;

  //work experience
  let wes = document.getElementsByClassName("wefield");

  let str = "";

  for (let e of wes) {
    str = str + `<li> ${e.value} </li>`;
  }
  document.getElementById("weT").innerHTML = str;
  //academic qualification

  let aqs = document.getElementsByClassName("aqfield");

  let str1 = "";

  for (let e of aqs) {
    str1 = str1 + `<li> ${e.value} </li>`;
  }
  document.getElementById("aqT").innerHTML = str1;

  //code for setting image in resume
  let file = document.getElementById("imagefield").files[0];

  let reader = new FileReader();

  reader.readAsDataURL(file);
  console.log(reader.result);

  //set the image to template

  reader.onload = function () {
    document.getElementById("imageT").src = reader.result;
  };

  document.getElementById("cv-form").style.display = "none";

  document.getElementById("cv-template").style.display = "block";
}

// printing resume
function printresume() {
  // Hide the print button before printing
  var printButton = document.querySelector(".print-button");
  if (printButton) {
    printButton.style.display = "none";
  }

  // Trigger the print dialog
  window.print();

  // Show the print button after printing
  if (printButton) {
    printButton.style.display = "block";
  }
}
