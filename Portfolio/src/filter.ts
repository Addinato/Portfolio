document.addEventListener("DOMContentLoaded", () => {
  const filterButtons = document.querySelectorAll<HTMLElement>("[data-filter]");
  const images = document.querySelectorAll<HTMLImageElement>("#work img[data-category]");

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const filterValue = button.dataset.filter;

      if (!filterValue) return;

      // Ta bort aktiv styling
      filterButtons.forEach((btn) => {
        btn.classList.remove("text-brandYellow", "border-b-2", "border-brandYellow");
      });

      // Lägg till aktiv styling
      button.classList.add("text-brandYellow", "border-b-2", "border-brandYellow");

      images.forEach((img) => {
        const parent = img.parentElement as HTMLElement | null;
        const category = img.dataset.category;

        if (!parent) return;

        if (filterValue === "all" || filterValue === category) {
          parent.style.display = "block";
        } else {
          parent.style.display = "none";
        }
      });
    });
  });
});
