function myFunction() {
  var x = document.getElementById("navLinksL");
  var y = document.getElementById("navLinksR");
  if (x.style.display === "block" && y.style.display =="block") {
    x.style.display = "none";
    y.style.display = "none";
    console.log("if statement L")
  } else {
    x.style.display = "block";
    y.style.display = "block";
  }
}


// Source: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_mobile_navbar