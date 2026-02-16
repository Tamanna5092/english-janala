const loadLesson = () => {
  fetch("https://openapi.programming-hero.com/api/levels/all")
    .then((res) => res.json())
    .then((json) => displayLesson(json.data));
};

const displayLesson = (lessons) => {
  // step
  // 1.get the container & empty
  const levelContainer = document.getElementById("level-container");
  levelContainer.innerHTML = "";
  // 2. get into every element
  for (let lesson of lessons) {
    console.log(lesson.level_no);
    //   1) create element
    const btnDiv = document.createElement("div");
    btnDiv.innerHTML = `
    <button class="btn btn-outline btn-primary">
    <i class="fa-solid fa-book-open"></i>Lesson -${lesson.level_no}
    </button>
    `;
    //   2) append child into the container
    levelContainer.append(btnDiv)
  }
};
loadLesson();
