"use strict";
const iconShare = document.querySelector(".preview-icon");
const popupWindow = document.querySelector(".popup-window");

iconShare.addEventListener("click", function () {
  popupWindow.classList.toggle("show");
  iconShare.classList.toggle("active");
});
