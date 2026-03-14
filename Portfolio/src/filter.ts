document.addEventListener("DOMContentLoaded", () => {

  const filterButtons = document.querySelectorAll("[data-filter]");
  const projects = document.querySelectorAll("#projectGrid > div");

  filterButtons.forEach(button => {

    button.addEventListener("click", () => {

      const filter = button.getAttribute("data-filter");

      projects.forEach(project => {

        const category = project.getAttribute("data-category");

        if (
          filter === "all" ||
          category === filter ||
          category === "all"
        ) {
          project.classList.remove("hidden");
        } else {
          project.classList.add("hidden");
        }

      });

    });

  });

});