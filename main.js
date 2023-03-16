const titles = document.querySelectorAll(".title");

titles.forEach((n) =>
  n.addEventListener("click", () => {
    titles.forEach((i) => {
      if (i !== n) {
        i.parentElement.classList.remove("active");
      } else {
        i.parentElement.classList.toggle("active");
      }
    });
  })
);
