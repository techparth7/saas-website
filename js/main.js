document.addEventListener("DOMContentLoaded", () => {
  const faqContainer = document.querySelector(".faq-content");
  faqContainer.addEventListener("click", (e) => {
    const groupHeader = e.target.closest(".faq-group-header");
    if (!groupHeader) return;

    const group = groupHeader.parentElement;
    const groupBody = group.querySelector(".faq-group-body");
    const icon = groupHeader.querySelector("i");

    icon.classList.toggle("fa-plus");
    icon.classList.toggle("fa-minus");

    groupBody.classList.toggle("open");

    const otherGroups = faqContainer.querySelectorAll(".faq-group");
    otherGroups.forEach((otherGroup) => {
      if (otherGroup !== group) {
        const otherBody = otherGroup.querySelector(".faq-group-body");
        const otherIcons = otherGroup.querySelector(".faq-group-header i");

        otherBody.classList.remove("open");
        otherIcons.classList.remove("fa-minus");
        otherIcons.classList.add("fa-plus");
      }
    });
  });
});
