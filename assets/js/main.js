document.documentElement.classList.add("js");

const PROJECTS = {
  cvWebsite: {
    title: "CV-webbplats",
    image: "assets/images/project-cv.svg",
    imageAlt: "Illustration av en CV-webbplats i en webbläsare",
    description: "Ett komplett slutprojekt byggt för att presentera kompetenser, projekt och kontaktvägar i ett tydligt och responsivt format.",
    challenge: "Utmaningen var att skapa en webbplats som både fungerar som personlig presentation och samtidigt uppfyller skolans krav på design, interaktivitet, struktur och dokumentation.",
    result: "Lösningen blev en fler-sidig statisk webbplats med egen visuell identitet, gemensam CSS, JavaScript för interaktivitet och Bootstrap-komponenter som stöder navigation och modaler.",
    tags: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
    highlights: [
      "Semantisk struktur och tydlig navigation",
      "Responsiv design för mobil och desktop",
      "Kontaktformulär med klientvalidering",
      "Dokumentationsfiler som stöd för inlämningen"
    ]
  },
  interactiveGallery: {
    title: "Interaktiv projektsida",
    image: "assets/images/project-gallery.svg",
    imageAlt: "Illustration av ett projektgalleri med bildkort",
    description: "Ett koncept för att presentera visuellt innehåll med filter, tydlig kategorisering och modalvisning.",
    challenge: "Målet var att göra en portfolio mer levande än en vanlig lista och samtidigt hålla gränssnittet lätt att förstå.",
    result: "Jag använde JavaScript för att filtrera projektkort och Bootstrap modal för att visa mer information utan att användaren behöver lämna sidan.",
    tags: ["JavaScript", "UX", "Modal", "Filtrering"],
    highlights: [
      "Dynamiskt filter för olika projektkategorier",
      "Tydliga informationskort med bilder och taggar",
      "Modaler som samlar extra projektinformation",
      "Fokus på enkel navigation och snabb överblick"
    ]
  },
  responsiveDashboard: {
    title: "Responsiv dashboard",
    image: "assets/images/project-dashboard.svg",
    imageAlt: "Illustration av en dashboard med statistikpaneler",
    description: "En designstudie för en informationsrik sida där innehållet behöver fungera både på små och stora skärmar.",
    challenge: "Informationsrika gränssnitt riskerar att bli röriga. Här låg fokus på att skapa tydlig visuell hierarki och god läsbarhet.",
    result: "Jag arbetade med modulära kort, tydliga rubriker, metadata och optimerade bilder för att skapa ett gränssnitt som känns ordnat och lätt att ta till sig.",
    tags: ["Responsiv design", "SEO", "Prestanda", "Layout"],
    highlights: [
      "Modulär uppbyggnad med återanvändbara kort",
      "Tydliga rubriker och metadata för SEO",
      "Bildoptimering och lazy loading",
      "Fokus på tillgänglighet och läsbarhet"
    ]
  }
};

document.addEventListener("DOMContentLoaded", () => {
  setActiveNavigation();
  setCurrentYear();
  initRevealOnScroll();
  initPortfolioFilter();
  initProjectModal();
  initContactForm();
});

function setActiveNavigation() {
  const page = document.body.dataset.page;
  document.querySelectorAll("[data-nav]").forEach((link) => {
    const isActive = link.dataset.nav === page;
    link.classList.toggle("is-active", isActive);
    if (isActive) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });
}

function setCurrentYear() {
  const year = new Date().getFullYear();
  document.querySelectorAll("[data-current-year]").forEach((node) => {
    node.textContent = year;
  });
}

function initRevealOnScroll() {
  const elements = document.querySelectorAll("[data-reveal]");
  if (!elements.length) {
    return;
  }

  if (!("IntersectionObserver" in window)) {
    elements.forEach((element) => element.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  elements.forEach((element) => observer.observe(element));
}

function initPortfolioFilter() {
  const buttons = document.querySelectorAll(".filter-button");
  const cards = document.querySelectorAll(".project-card");

  if (!buttons.length || !cards.length) {
    return;
  }

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.dataset.filter;

      buttons.forEach((item) => item.classList.remove("is-active"));
      button.classList.add("is-active");

      cards.forEach((card) => {
        const categories = card.dataset.category.split(" ");
        const shouldShow = filter === "all" || categories.includes(filter);
        const wrapper = card.closest(".project-card-wrap");
        if (wrapper) {
          wrapper.classList.toggle("is-hidden", !shouldShow);
        }
      });
    });
  });
}

function initProjectModal() {
  const modal = document.getElementById("projectModal");
  if (!modal) {
    return;
  }

  modal.addEventListener("show.bs.modal", (event) => {
    const trigger = event.relatedTarget;
    const projectKey = trigger?.getAttribute("data-project-key");
    const project = PROJECTS[projectKey];

    if (!project) {
      return;
    }

    document.getElementById("projectModalLabel").textContent = project.title;
    document.getElementById("projectModalImage").src = project.image;
    document.getElementById("projectModalImage").alt = project.imageAlt;
    document.getElementById("projectModalText").textContent = project.description;
    document.getElementById("projectModalChallenge").textContent = project.challenge;
    document.getElementById("projectModalResult").textContent = project.result;

    const tagContainer = document.getElementById("projectModalTags");
    const highlightsContainer = document.getElementById("projectModalHighlights");

    tagContainer.innerHTML = "";
    highlightsContainer.innerHTML = "";

    project.tags.forEach((tag) => {
      const span = document.createElement("span");
      span.textContent = tag;
      tagContainer.append(span);
    });

    project.highlights.forEach((highlight) => {
      const listItem = document.createElement("li");
      listItem.textContent = highlight;
      highlightsContainer.append(listItem);
    });
  });
}

function initContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) {
    return;
  }

  const status = document.getElementById("form-status");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!form.checkValidity()) {
      form.classList.add("was-validated");
      setFormStatus(status, "Fyll i alla obligatoriska fält innan du skickar formuläret.", true);
      return;
    }

    const formData = new FormData(form);
    const recipient = form.dataset.recipient || "din.epost@exempel.se";
    const subject = encodeURIComponent(formData.get("subject"));
    const body = encodeURIComponent(
      `Namn: ${formData.get("name")}\nE-post: ${formData.get("email")}\n\nMeddelande:\n${formData.get("message")}`
    );

    setFormStatus(
      status,
      "Meddelandet öppnas i din e-postklient. Kom ihåg att ersätta exempeladressen med din riktiga adress innan publicering.",
      false
    );

    form.reset();
    form.classList.remove("was-validated");
    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
  });
}

function setFormStatus(statusNode, message, isError) {
  if (!statusNode) {
    return;
  }

  statusNode.textContent = message;
  statusNode.classList.toggle("is-error", isError);
  statusNode.classList.toggle("is-success", !isError);
}
