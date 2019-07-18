
function navMenuFn() {
  var x = document.getElementById("site-nav");
  (x.className === "site-nav")
    ? x.className += " responsive"
    : x.className = "site-nav";
}