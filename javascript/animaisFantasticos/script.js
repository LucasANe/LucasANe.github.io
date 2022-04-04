function initTabNav() {
  const tabMenu = document.querySelectorAll(".js-tabmenu li");
  const tabContent = document.querySelectorAll(".js-tabconteudo section");

  if (tabContent.length && tabMenu.length) {
    tabContent[0].classList.add("ativo");

    function activeTab(index) {
      tabContent.forEach((content) => {
        content.classList.remove("ativo");
      });
      tabContent[index].classList.add("ativo");
    }

    tabMenu.forEach((item, index) => {
      item.addEventListener("click", () => {
        activeTab(index);
      });
    });
  }
}

function initAccordion() {
  const accordionLista = document.querySelectorAll(".js-accordion dt");
  if (accordionLista.length) {
    accordionLista[0].classList.add("ativo");
    function activeAccordion() {
      this.classList.toggle("ativo");
      this.nextElementSibling.classList.toggle("ativo");
    }

    accordionLista.forEach((item) => {
      item.addEventListener("click", activeAccordion);
    });
  }
}

function scrollSuave() {
  const linksInternos = document.querySelectorAll(".js-menu a[href^='#']");
  if (linksInternos.length) {
    function scrollToSection(event) {
      event.preventDefault();
      const href = event.currentTarget.getAttribute("href");
      const section = document.querySelector(href);
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    linksInternos.forEach((link) => {
      link.addEventListener("click", scrollToSection);
    });
  }
}

function scrollSection() {
  const section = document.querySelectorAll(".js-scroll");
  if (section) {
    function animaScroll() {
      section.forEach((item) => {
        const sectionTop =
          item.getBoundingClientRect().top - window.innerHeight * 0.55;
        if (sectionTop < 0) {
          item.classList.add("ativo");
        }
      });
    }
    window.addEventListener("scroll", animaScroll);
  }
}

initTabNav();
initAccordion();
scrollSuave();
scrollSection();
