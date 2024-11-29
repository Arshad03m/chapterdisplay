// to store the json data
let chapters = {};

// Fetch data from the JSON file
fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    chapters = data;
  })
  .catch((error) => console.error("Error loading chapter data:", error));

function displayChapter(chapterId) {
  const contentDiv = document.getElementById("chapterContent");
  const chapter = chapters[chapterId];

  if (chapter) {
    contentDiv.innerHTML = `
      <h2>${chapter.name}</h2>
      <h3>Introduction</h3>
      <p>${chapter.introduction}</p>
      <h3>Content</h3>
      <p>${chapter.content}</p>
      <h3>Summary</h3>
      <p>${chapter.summary}</p>
    `;
  } else {
    contentDiv.innerHTML = "<h2>Chapter not found.</h2>";
  }
}
