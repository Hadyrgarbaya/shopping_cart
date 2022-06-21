// Get all like icons
var likeIcons = document.querySelectorAll(".like");
for (var i = 0; i < likeIcons.length; i++) {
  likeIcons[i].addEventListener("click", function (event) {
    console.log(event.target.classList);
    event.target.classList.toggle("colorlike");
    console.dir(event.target);
  });
}
// Get All remove icons
var removeIcons = document.querySelectorAll(".trash");
for (var i = 0; i < removeIcons.length; i++) {
  removeIcons[i].addEventListener("click", function (event) {
    event.target.parentElement.parentElement.remove();
  });
}
function calculTotalPrix() {
  var carteItems = document.querySelectorAll(".item");
  console.log(carteItems);
  var totalPrice = 0;
  for (var i = 0; i < carteItems.length; i++) {
    var item = carteItems[i];
    console.log(item);
    var prixunit = item.querySelector(".prix").innerText;
    var quantité = item.querySelector(".incdic span").innerText;
    console.log(quantité);
    totalPrice += prixunit * quantité;
  }
  console.log(totalPrice);
  var total = document.getElementById("Total");
  console.log(total);
  total.innerText = totalPrice + "$";
  console.log(total);
}
calculTotalPrix();

// incrimentation
var incbuttons = document.querySelectorAll(".inc");
console.log(incbuttons);
for (var i = 0; i < incbuttons.length; i++) {
  console.log(incbuttons[i]);
  incbuttons[i].addEventListener("click", function (event) {
    console.log(event.target);
    // event.target.nextElemntSibling.innerText++;
    console.log(event.target.nextElementSibling.innerText);
    event.target.nextElementSibling.innerText++;
    calculTotalPrix();
  });
}
//minus
var minusbutton = document.querySelectorAll(".minus");
console.log(minusbutton);
for (var i = 0; i < minusbutton.length; i++) {
  minusbutton[i].addEventListener("click", function (event) {
    if (event.target.previousElementSibling.innerText > 1) {
      event.target.previousElementSibling.innerText--;
      calculTotalPrix();
    }
  });
}
