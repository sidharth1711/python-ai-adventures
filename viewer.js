const viewer = document.querySelector(".comic-viewer");
const chapterLinks = [...document.querySelectorAll(".comic-link")];
const chapterLabel = viewer.querySelector("#comic-viewer-chapter");
const chapterTitle = viewer.querySelector("#comic-viewer-title");
const comicImage = viewer.querySelector(".comic-viewer-image");
const chapterCount = viewer.querySelector(".comic-viewer-count");
const previousButton = viewer.querySelector("[data-viewer-previous]");
const nextButton = viewer.querySelector("[data-viewer-next]");
let currentChapter = 0;

function showChapter(index) {
  currentChapter = index;
  const link = chapterLinks[currentChapter];
  const card = link.closest(".chapter-card");
  const thumbnail = link.querySelector("img");

  chapterLabel.textContent = card.querySelector(".card-caption span").textContent;
  chapterTitle.textContent = card.querySelector(".card-caption h3").textContent;
  comicImage.src = link.href;
  comicImage.alt = thumbnail.alt;
  chapterCount.textContent = `Chapter ${currentChapter + 1} of ${chapterLinks.length}`;
  previousButton.disabled = currentChapter === 0;
  nextButton.disabled = currentChapter === chapterLinks.length - 1;
}

chapterLinks.forEach((link, index) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    showChapter(index);
    viewer.showModal();
  });
});

previousButton.addEventListener("click", () => {
  if (currentChapter > 0) {
    showChapter(currentChapter - 1);
  }
});

nextButton.addEventListener("click", () => {
  if (currentChapter < chapterLinks.length - 1) {
    showChapter(currentChapter + 1);
  }
});

viewer.querySelector(".comic-viewer-close").addEventListener("click", () => {
  viewer.close();
});

viewer.addEventListener("click", (event) => {
  if (event.target === viewer) {
    viewer.close();
  }
});
