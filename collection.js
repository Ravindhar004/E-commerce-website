let productcontainer = document.getElementById("products");
let search = document.getElementById("search");
let productlist = document.querySelectorAll("div");


search.addEventListener("onkeyup", function (event) {
  var enteredvalue = event.target.value.toUpperCase()
  for (let count = 0; count < productlist.length; count=count+ 1) {
    const productname = productlist[count].querySelector("p").textContent;
    if (productname.toUpperCase().indexOf(enteredvalue) < 0) {
      productlist[count].style.display = "none";
    } else {
      productlist[count].style.display = "block";
    }
  }
});
