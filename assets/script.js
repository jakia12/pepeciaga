const allDropdownTriggers = document.querySelectorAll(".show-dropdown");
const allContent = document.querySelectorAll(".dropdown-content");
const header = document.querySelector("section.header");

allDropdownTriggers.forEach((dt) => {
  dt.addEventListener("mouseover", () => {
    let closest = dt.nextElementSibling;
    allContent.forEach((dc) => {
      dc.classList.remove("show");
    });
    closest.classList.add("show");
  });
});

const hideMenu = () => {
  allContent.forEach((dc) => {
    dc.classList.remove("show");
  });
};

const popupButtons = document.querySelectorAll("section.popup button");

popupButtons.forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelector("section.popup").classList.add("hide");
    document.body.classList.remove("fixed");
    setCookie("popup", "true", 7);
  });
});

function setCookie(name, value, days) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}
function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}
function eraseCookie(name) {
  document.cookie = name + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
}
const popup = document.querySelector("section.popup");

if (getCookie("popup")) {
  popup.classList.add("remove");
  document.body.classList.remove("fixed");
}
