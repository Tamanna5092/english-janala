const loadLesson = () => {
  fetch("https://openapi.programming-hero.com/api/levels/all")
    .then((res) => res.json())
    .then((json) => displayLesson(json.data));
};

const loadLevelWord = (id) => {
  const url = `https://openapi.programming-hero.com/api/level/${id}`;
  console.log(url);
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayLevelWord(data.data));
};

const displayLevelWord = (words) => {
  console.log(words);
  const wordContainer = document.getElementById("word-container");
  wordContainer.innerHTML = "";
  words.forEach((word) => {
    console.log(word);
    const card = document.createElement("div");
    card.innerHTML = `<div class="bg-white rounded-lg shadow text-center py-10 px-4 space-y-4">
            <h2 class="text-xl font-bold">${word.word}</h2>
            <p>Meaning /Pronounciation</p>
            <p class="text-2xl font-bangla font-medium">${word.meaning} / ${word.pronunciation}</p>
            <div class="flex justify-between">
                <button class="bg-[#1A91FF10] hover:bg-[#1A91FF] px-5 py-3 rounded-md"><i class="fa-solid fa-circle-info"></i></button>
                <button class="bg-[#1A91FF10] hover:bg-[#1A91FF] px-6 py-4 rounded-md"><i class="fa-solid fa-volume-high"></i></button>
            </div>
        </div>`;
    wordContainer.append(card);
  });
};

const displayLesson = (lessons) => {
  // step
  // 1.get the container & empty
  const levelContainer = document.getElementById("level-container");
  levelContainer.innerHTML = "";
  // 2. get into every element
  for (let lesson of lessons) {
    // console.log(lesson);
    //   1) create element
    const btnDiv = document.createElement("div");
    btnDiv.innerHTML = `
    <button onclick="loadLevelWord(${lesson.level_no})" class="btn btn-outline btn-primary">
    <i class="fa-solid fa-book-open"></i>Lesson -${lesson.level_no}
    </button>
    `;
    //   2) append child into the container
    levelContainer.append(btnDiv);
  }
};
loadLesson();
