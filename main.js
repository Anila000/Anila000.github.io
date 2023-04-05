document.getElementById("submitButton").addEventListener("click", submitMessage);
document.getElementById("color1").addEventListener("click", change_color1);
document.getElementById("color2").addEventListener("click", change_color2);
document.getElementById("color3").addEventListener("click", change_color3);

/*Changing color when clicking buttons */
document.getElementById("LastName").addEventListener("click", change_ButtonColorL);
document.getElementById("FirstName").addEventListener("click", change_ButtonColorF);
document.getElementById("email").addEventListener("click", change_ButtonColorE);
document.getElementById("age").addEventListener("click", change_ButtonColorA);
document.getElementById("message").addEventListener("click", change_ButtonColorM);

document.getElementById('province').addEventListener('change', function () {
  // Get the selected province value
  var selectedProvince = this.value;
  // Call the handleSelectedProvince function
  handleSelectedProvince(selectedProvince);
});

function submitMessage() {

  let lastName = document.getElementById("LastName").value;
  let firstName = document.getElementById("FirstName").value;
  let age = document.getElementById("age").value;

  if (age < 18) {
    alert("You are not old enough to lease a car");
  } else {

    alert("Thank you for registering " + firstName + " " + lastName + ". You are old enough to lease a car"
      + "Yours email is: " + document.getElementById("email").value + " and your message is: " + document.getElementById("message").value);
  }
}



/* The provice selection function */
function handleSelectedProvince(selectedProvince) {
  // Do something with the selected province value
  alert('You selected ' + selectedProvince);

}



/*Function Changing color when clicking LastName */
function change_ButtonColorL() {
  document.getElementById("LastName").style.backgroundColor = "#f590a2";
}
/*Function Changing color when clicking FirstName */
function change_ButtonColorF() {
  document.getElementById("FirstName").style.backgroundColor = "#f590a2";
}


/*Function Changing color when clicking Email */
function change_ButtonColorE() {
  document.getElementById("email").style.backgroundColor = "#f590a2";
}

/*Function Changing color when clicking Age */
function change_ButtonColorA() {
  document.getElementById("age").style.backgroundColor = "#f590a2";
}

/*Function Changing color when clicking Message */
function change_ButtonColorM() {
  document.getElementById("message").style.backgroundColor = "#f590a2";
}


function change_color1() {

  document.body.style.backgroundColor = "#fbf8cc";
  document.getElementById("submitButton").style.backgroundColor = "#f590a2";

}

function change_color2() {

  document.body.style.backgroundColor = "#0096c7";
  document.getElementById("submitButton").style.backgroundColor = "#a6d09f";

}

function change_color3() {

  document.body.style.backgroundColor = "#adc178";
  document.getElementById("submitButton").style.backgroundColor = "#ead94c";
}



/*  Function that for rating */
let rate5Button = document.getElementById("rate5Btn");
rate5Button.addEventListener("click", function () { updateRating(5) });
let rate4Button = document.getElementById("rate4Btn");
rate4Button.addEventListener("click", function () { updateRating(4) });
let rate3Button = document.getElementById("rate3Btn");
rate3Button.addEventListener("click", function () { updateRating(3) });
let rate2Button = document.getElementById("rate2Btn");
rate2Button.addEventListener("click", function () { updateRating(2) });
let rate1Button = document.getElementById("rate1Btn");
rate1Button.addEventListener("click", function () { updateRating(1) });

function updateRating(newRating) {
  let star1 = document.getElementById("rating1");
  let star2 = document.getElementById("rating2");
  let star3 = document.getElementById("rating3");
  let star4 = document.getElementById("rating4");
  let star5 = document.getElementById("rating5");

  star1.style.color = "lightgray";
  star2.style.color = "lightgray";
  star3.style.color = "lightgray";
  star4.style.color = "lightgray";
  star5.style.color = "lightgray";

  if (newRating >= 1) {
    star1.style.color = "blue";

  }
  if (newRating >= 2) {
    star2.style.color = "blue";

  }
  if (newRating >= 3) {
    star3.style.color = "blue";

  }
  if (newRating >= 4) {
    star4.style.color = "blue";

  }
  if (newRating == 5) {
    star5.style.color = "blue";

  }
  alert("Thank you for rating us " + newRating + " stars");
}


