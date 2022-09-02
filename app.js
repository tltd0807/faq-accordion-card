const contents = document.querySelectorAll(".section-paragraph");
const contentHeaders = document.querySelectorAll(".section-header");
const contentHeaderImgs = document.querySelectorAll(".img-arrow");

const closeContent = () => {
  for (const content of contents) {
    content.classList.add("hidden");
  }
  for (const contentHeaderImg of contentHeaderImgs) {
    contentHeaderImg.classList.remove("img-arrow--active");
  }
  for (const contentHeader of contentHeaders) {
    contentHeader.classList.remove("header-active");
  }
};
closeContent();
for (const [index, contentHeader] of contentHeaders.entries()) {
  contentHeader.addEventListener("click", () => {
    closeContent();
    contents[index].classList.remove("hidden");
    contentHeaderImgs[index].classList.add("img-arrow--active");
    contentHeaders[index].classList.add("header-active");
  });
}
