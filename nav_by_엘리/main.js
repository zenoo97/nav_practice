const toggleBtn = document.querySelector(".navbar_toggleBtn");

function onClickBtn() {
  if (
    document.querySelector(".navbar_menu").style.display === "none" &&
    document.querySelector(".navbar_icons").style.display === "none"
  ) {
    document.querySelector(".navbar_menu").style.display = "flex";
    document.querySelector(".navbar_icons").style.display = "flex";
  } else {
    document.querySelector(".navbar_menu").style.display = "none";
    document.querySelector(".navbar_icons").style.display = "none";
  }
}
