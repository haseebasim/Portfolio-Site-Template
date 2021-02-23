let about = document.getElementById("about");
const aboutTop = about.offsetTop;

document.addEventListener("scroll", () => {
  let currentTopPos = document.documentElement.scrollTop;

  if (currentTopPos > aboutTop) {
    var style = document.createElement("style");
    style.type = "text/css";

    style.innerHTML =
      "#nav_bar {background-color: black; opacity: 1; position: fixed; z-index: 1; width: 100vw;}";

    document.getElementsByTagName("head")[0].appendChild(style);
  } else {
    var style = document.createElement("style");
    style.type = "text/css";

    style.innerHTML = "#nav_bar {background-color: black; opacity: 0.7;}";

    document.getElementsByTagName("head")[0].appendChild(style);
  }
});

function openNav() {
  document
    .getElementsByClassName("navbar-container")[0]
    .classList.toggle("navbar-container-close");
}
