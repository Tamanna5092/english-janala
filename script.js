const loadLesson = () => {
  fetch("https://openapi.programming-hero.com/api/levels/all")
    .then((res) => res.json())
    .then((json) => displayLesson(json.data));
};

const removeActive = () => {
  const lessonButtons = document.querySelectorAll(".lesson-btn");
  lessonButtons.forEach((btn) => btn.classList.remove("active"));
};

const loadLevelWord = (id) => {
  const url = `https://openapi.programming-hero.com/api/level/${id}`;
  console.log(url);
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      removeActive();
      const clickBtn = document.getElementById(`level-btn-${id}`);
      // add active class list
      clickBtn.classList.add("active");
      console.log(clickBtn);
      displayLevelWord(data.data);
    });
};

const displayLevelWord = (words) => {
  //   console.log(words);
  const wordContainer = document.getElementById("word-container");
  wordContainer.innerHTML = "";
  if (words.length == 0) {
    wordContainer.innerHTML = `<div class="text-center col-span-full font-bangla py-6 space-y-4">
            <img class="mx-auto" src="./assets/alert-error.png" alt="">
            <p class="text-lg">এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।</p>
            <h2 class="text-4xl font-medium">নেক্সট Lesson এ যান</h2>
        </div>`;
    return;
  }
  words.forEach((word) => {
    // console.log(word);
    const card = document.createElement("div");
    card.innerHTML = `<div class="bg-white rounded-lg shadow text-center py-10 px-4 space-y-4">
            <h2 class="text-xl font-bold">${word.word ? word.word : "শব্দ পাওয়া যায় নি"}</h2>
            <p>Meaning /Pronounciation</p>
            <p class="text-2xl font-bangla font-medium">${word.meaning ? word.meaning : "অর্থ পাওয়া যায় নি"} / ${word.pronunciation ? word.pronunciation : "Pronunciation পাওয়া যায় নি"}</p>
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
    <button id="level-btn-${lesson.level_no}" onclick="loadLevelWord(${lesson.level_no})" class="btn btn-outline btn-primary lesson-btn">
    <i class="fa-solid fa-book-open"></i>Lesson -${lesson.level_no}
    </button>
    `;
    //   2) append child into the container
    levelContainer.append(btnDiv);
  }
};
loadLesson();
