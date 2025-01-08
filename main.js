const body = document.querySelector("body");
// console.log(body ? 'body found' : 'body not found');
const author = document.querySelector(".author");
const firstShare = document.querySelector(".author .share");
const shareOption = document.querySelector(".share-options");
const secondShare = document.querySelector(".share-options .share");
// const mediaQuery = window.matchMedia("(min-width: 54rem)");
const dropDown = document.querySelector(".share-optionsDropdown");
const dropDownVisible = document.querySelector(".share-optionsDropdown show");
const shareIcon = firstShare.querySelector("img");

// console.log(share);

const toggleShow = () => {
  firstShare.style.backgroundColor = "hsl(210, 46%, 95%)";
  shareOption.classList.toggle("show");
  author.classList.toggle("show");
};

const toggleDropDown = () => {
  let src = shareIcon.src;
  let srcSlipt = src.split("icon-share");
  src = srcSlipt[0] + "icon-share.svg";
  firstShare.style.backgroundColor = "hsl(210, 46%, 95%)";

  if (!dropDown.classList.contains("show")) {
    src = srcSlipt[0] + "icon-share-white.svg";
    firstShare.style.backgroundColor = "hsl(217, 19%, 35%)";
  }

  dropDown.classList.toggle("show");
  shareIcon.src = src;
};

firstShare.addEventListener("click", () => {
  //   console.log("clicked");
  toggleShow();
  toggleDropDown();
});

secondShare.addEventListener("click", () => {
  //   console.log("clicked");
  toggleShow();
});
