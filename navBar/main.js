const toggleBtn = document.querySelector(".toggleBtn");

function onClickBtn() {
  if (document.querySelector(".snsInfo").style.display === "none") {
    document.querySelector(".snsInfo").style.display === "flex";
  } else {
    document.querySelector(".snsInfo").style.display === "none";
  }
}
