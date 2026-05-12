document.documentElement.classList.add("js");

const PROJECTS = {
  hoganasEvent: {
    title: "Höganäs Event",
    image: "assets/images/hoganasevent-screenshot.png",
    imageAlt: "Skärmbild av Höganäs Event med filter, sidopaneler och eventkort",
    url: "https://hoganasevent.se/index.html",
    description: "Mitt gymnasiearbete där vi byggde en lokal forumliknande eventsida för Höganäs kommun. Målet var att samla konserter, loppisar, restaurangevenemang och andra lokala händelser på ett ställe.",
    challenge: "Innan projektet fanns framför allt kommunens egna event samlade på en plats, men många mindre arrangörer syntes inte lika tydligt. Utmaningen var att skapa en sida där både företag och privatpersoner enkelt kan lägga upp event och där besökare snabbt kan hitta något att göra.",
    result: "Vi tog fram design och logotyp i Figma, byggde frontend med HTML och CSS och publicerade sidan med egen domän och hosting via one.com. Jag ansvarade främst för backend och databasen, inklusive funktioner för att lägga upp och sortera events. Vi försökte även koppla in Höganäs API, men valde senare en annan API-lösning när det inte fungerade som tänkt.",
    tags: ["HTML5", "CSS3", "Backend", "Databas", "Figma"],
    highlights: [
      "Eventsida för hela Höganäs kommun",
      "Användare kan lägga upp egna händelser",
      "Filter för kategori och när eventet publicerades",
      "Backend och databas för eventhantering",
      "Publicerad webbplats med egen domän"
    ]
  },
  dreamTalent: {
    title: "DreamTalent",
    image: "assets/images/DreamTalent-Screenshot.png",
    imageAlt: "Skärmbild av DreamTalent startsida",
    url: "https://dreamtalent.se/#Hem",
    description: "DreamTalent är en webbplats om hållbar rekrytering. Budskapet är att hjälpa företag hitta kompetens även där den inte alltid syns på papperet och att göra inkluderande rekrytering enklare.",
    challenge: "Det här var min första riktiga hemsida, så den största utmaningen var att förstå hur UX, layout och innehåll skulle samspela. Jag behövde hitta ett sätt att presentera ett viktigt samhällsbudskap på ett tydligt, trovärdigt och lättnavigerat sätt.",
    result: "Lösningen blev en statisk webbplats byggd med ren HTML, CSS och JavaScript. Fokus låg på tydliga sektioner, en lugn visuell struktur och ett innehåll som förklarar varför hållbar rekrytering behövs för både företag, individer och samhället.",
    tags: ["HTML5", "CSS3", "JavaScript", "UX"],
    highlights: [
      "Första riktiga webbplatsprojektet",
      "Byggd med ren HTML, CSS och JavaScript",
      "Tydlig informationsstruktur för ett samhällsinriktat ämne",
      "Fokus på UX, layout och lättläst innehåll"
    ]
  },
  mersmak: {
    title: "Mersmak",
    image: "assets/images/Mersmak-Screenshot.png",
    imageAlt: "Skärmbild av Mersmak Helsingborgs webbplats",
    url: "https://www.mersmakhelsingborg.se/",
    description: "Mersmak är en publicerad webbplats för ett nätverk där relationer, affärsnytta, inspiration och gastronomiska upplevelser möts. Sidan presenterar träffar där människor kan växa, dela kunskap och skapa samarbeten på riktigt.",
    challenge: "Eftersom det här var ett större och viktigare webbprojekt behövde sidan kännas professionell, varm och tydlig för riktiga besökare. Utmaningen var att förmedla känslan av ett nätverk där personen bakom företaget står i centrum, samtidigt som information om medlemskap, träffar och upplägg skulle vara enkel att förstå.",
    result: "Projektet blev en riktig hemsida för Mersmak Helsingborg. Jag gjorde inte hela sidan själv, utan var med och byggde den i team tillsammans med James från Mersmak. Arbetet gav mig erfarenhet av att bidra i ett skarpt projekt där design, innehåll och funktion behövde passa en verklig verksamhet.",
    tags: ["Responsiv design", "Teamwork", "Webbplats", "Kundprojekt"],
    highlights: [
      "Publicerad webbplats för ett riktigt nätverk",
      "Byggd som teamprojekt tillsammans med James från Mersmak",
      "Erfarenhet av ett större och mer seriöst webbprojekt",
      "Fokus på relationer, inspiration och affärsnytta",
      "Tydlig presentation av medlemskap och återkommande träffar"
    ]
  }
};

document.addEventListener("DOMContentLoaded", () => {
  setActiveNavigation();
  setCurrentYear();
  initRevealOnScroll();
  initHomeDesktop();
  initInteractiveShowcase();
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
    const projectLink = document.getElementById("projectModalLink");

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

    if (projectLink) {
      projectLink.href = project.url || "#";
      projectLink.hidden = !project.url;
    }
  });
}

function initHomeDesktop() {
  initDesktopWindowMotion();
  initMiniPlayer();
  initAirdropPrompt();
  initSkillPanel();
}

function initDesktopWindowMotion() {
  const scene = document.querySelector("[data-parallax-scene]");
  const cards = Array.from(document.querySelectorAll("[data-float-card]"));
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!scene || !cards.length || reducedMotion) {
    return;
  }

  const motion = {
    pointerX: 0,
    pointerY: 0,
    scrollProgress: 0
  };

  const cardMotion = new Map([
    [document.querySelector(".intro-window"), { outX: -260, outY: -120, outRotate: -8, baseRotate: 0, scaleLoss: 0.08 }],
    [document.querySelector(".player-window"), { outX: 270, outY: -150, outRotate: 10, baseRotate: 3, scaleLoss: 0.05 }],
    [document.querySelector(".airdrop-window"), { outX: 290, outY: 170, outRotate: 8, baseRotate: 0, scaleLoss: 0.08 }],
    [document.querySelector(".stack-window"), { outX: -230, outY: 180, outRotate: -10, baseRotate: -4, scaleLoss: 0.06 }]
  ]);

  const clamp = (value, min, max) => Math.min(Math.max(value, min), max);
  const easeOut = (value) => 1 - Math.pow(1 - value, 3);

  const render = () => {
    if (window.innerWidth < 992) {
      cards.forEach((card) => {
        card.style.opacity = "";
        card.style.transform = "";
      });
      return;
    }

    const easedScroll = easeOut(motion.scrollProgress);

    cards.forEach((card) => {
      const config = cardMotion.get(card) || { outX: 0, outY: -120, outRotate: 0, baseRotate: 0, scaleLoss: 0.05 };
      const depth = Number(card.dataset.depth || 0.03);
      const pointerX = motion.pointerX * depth;
      const pointerY = motion.pointerY * depth;
      const x = pointerX + config.outX * easedScroll;
      const y = pointerY + config.outY * easedScroll;
      const rotate = config.baseRotate + config.outRotate * easedScroll;
      const scale = 1 - config.scaleLoss * easedScroll;

      card.style.opacity = String(clamp(1 - easedScroll * 1.15, 0, 1));
      card.style.transform = `translate3d(${x}px, ${y}px, 0) rotate(${rotate}deg) scale(${scale})`;
    });
  };

  const updateScroll = () => {
    const rect = scene.getBoundingClientRect();
    const start = window.innerHeight * 0.12;
    const distance = Math.max(scene.offsetHeight * 0.55, 360);
    motion.scrollProgress = clamp((start - rect.top) / distance, 0, 1);
    window.requestAnimationFrame(render);
  };

  scene.addEventListener("pointermove", (event) => {
    if (window.innerWidth < 992) {
      return;
    }

    const rect = scene.getBoundingClientRect();
    motion.pointerX = event.clientX - rect.left - rect.width / 2;
    motion.pointerY = event.clientY - rect.top - rect.height / 2;
    window.requestAnimationFrame(render);
  });

  scene.addEventListener("pointerleave", () => {
    motion.pointerX = 0;
    motion.pointerY = 0;
    window.requestAnimationFrame(render);
  });

  window.addEventListener("scroll", updateScroll, { passive: true });
  window.addEventListener("resize", updateScroll);
  updateScroll();
}

function initMiniPlayer() {
  const button = document.querySelector("[data-play-toggle]");
  const progress = document.querySelector("[data-progress-bar]");
  const time = document.querySelector("[data-player-time]");
  const duration = document.querySelector("[data-player-duration]");
  const audio = document.querySelector("[data-player-audio]");
  const volumeSlider = document.querySelector("[data-volume-slider]");
  const volumeValue = document.querySelector("[data-volume-value]");
  const cdArt = document.querySelector("[data-cd-art]");

  if (!button || !progress || !time || !duration) {
    return;
  }

  let isPlaying = false;
  let seconds = 18;
  let timerId;

  const formatTime = (value) => {
    const safeValue = Number.isFinite(value) ? Math.max(0, Math.floor(value)) : 0;
    const minutes = Math.floor(safeValue / 60);
    const remainingSeconds = String(safeValue % 60).padStart(2, "0");
    return `${minutes}:${remainingSeconds}`;
  };

  const render = (current = seconds, duration = 212) => {
    time.textContent = formatTime(current);
    progress.style.width = `${Math.min((current / duration) * 100, 100)}%`;
  };

  const setVolume = () => {
    const nextVolume = Number(volumeSlider?.value || 0.75);
    const volumePercent = Math.round(nextVolume * 100);

    if (audio) {
      audio.loop = true;
      audio.volume = nextVolume;
      audio.muted = nextVolume === 0;
    }

    if (volumeSlider) {
      volumeSlider.style.setProperty("--volume-level", `${volumePercent}%`);
      volumeSlider.setAttribute("aria-valuetext", `${volumePercent}%`);
    }

    if (volumeValue) {
      volumeValue.textContent = `${volumePercent}%`;
    }
  };

  setVolume();
  volumeSlider?.addEventListener("input", setVolume);

  audio?.addEventListener("loadedmetadata", () => {
    duration.textContent = formatTime(audio.duration);
    render(audio.currentTime, audio.duration);
  });

  audio?.addEventListener("timeupdate", () => {
    render(audio.currentTime, audio.duration || 212);
  });

  audio?.addEventListener("ended", () => {
    isPlaying = false;
    cdArt?.classList.remove("is-spinning");
    button.querySelector("i").className = "bi bi-play-fill";
  });

  button.addEventListener("click", () => {
    isPlaying = !isPlaying;
    button.querySelector("i").className = isPlaying ? "bi bi-pause-fill" : "bi bi-play-fill";
    cdArt?.classList.toggle("is-spinning", isPlaying);

    if (!isPlaying) {
      audio?.pause();
      window.clearInterval(timerId);
      return;
    }

    if (audio) {
      const playAttempt = audio.play();

      if (playAttempt) {
        playAttempt.catch(() => {
          cdArt?.classList.add("is-spinning");
          startFallbackTimer();
        });
      }
      return;
    }

    startFallbackTimer();
  });

  function startFallbackTimer() {
    window.clearInterval(timerId);
    timerId = window.setInterval(() => {
      seconds = seconds >= 212 ? 0 : seconds + 1;
      render();
    }, 1000);
  }
}

function initAirdropPrompt() {
  const prompt = document.querySelector(".airdrop-window");
  const acceptButton = document.querySelector("[data-accept-projects]");
  const dismissButton = document.querySelector("[data-dismiss-card]");
  const projectSection = document.getElementById("featured-work");

  if (!prompt) {
    return;
  }

  acceptButton?.addEventListener("click", () => {
    projectSection?.scrollIntoView({ behavior: "smooth", block: "start" });
  });

  dismissButton?.addEventListener("click", () => {
    prompt.classList.add("is-dismissed");
  });
}

function initSkillPanel() {
  const buttons = document.querySelectorAll("[data-skill]");
  const output = document.querySelector("[data-skill-output]");

  if (!buttons.length || !output) {
    return;
  }

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      buttons.forEach((item) => item.classList.remove("is-active"));
      button.classList.add("is-active");
      output.textContent = `${button.dataset.skill} är aktivt i den här layouten.`;
    });
  });
}

function initInteractiveShowcase() {
  const buttons = document.querySelectorAll("[data-showcase]");
  const card = document.querySelector(".showcase-card");
  const image = document.querySelector("[data-showcase-image]");
  const kicker = document.querySelector("[data-showcase-kicker]");
  const title = document.querySelector("[data-showcase-title]");
  const text = document.querySelector("[data-showcase-text]");
  const tags = document.querySelector("[data-showcase-tags]");
  const link = document.querySelector(".showcase-copy .btn");

  if (!buttons.length || !card || !image || !kicker || !title || !text || !tags || !link) {
    return;
  }

  const showcaseProjects = {
    hoganas: {
      title: "Höganäs Event",
      kicker: "Gymnasiearbete",
      text: "Lokal eventsida för att hitta, lägga upp och filtrera händelser i Höganäs.",
      image: "assets/images/hoganasevent-screenshot.png",
      alt: "Skärmbild av Höganäs Event",
      tags: ["HTML", "CSS", "Backend"],
      href: "portfolio.html#project-hoganasevent"
    },
    dream: {
      title: "DreamTalent",
      kicker: "Första riktiga webbplatsen",
      text: "Informationssida om hållbar rekrytering med tydlig struktur och enkel navigation.",
      image: "assets/images/DreamTalent-Screenshot.png",
      alt: "Skärmbild av DreamTalent",
      tags: ["HTML", "CSS", "JavaScript"],
      href: "portfolio.html#project-dreamtalent"
    },
    mersmak: {
      title: "Mersmak",
      kicker: "Publicerat teamprojekt",
      text: "Publicerad nätverkssida byggd i team med fokus på relationer och affärsnytta.",
      image: "assets/images/Mersmak-Screenshot.png",
      alt: "Skärmbild av Mersmak Helsingborg",
      tags: ["Responsiv", "Teamwork", "Kundprojekt"],
      href: "portfolio.html#project-mersmak"
    }
  };

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const project = showcaseProjects[button.dataset.showcase];

      if (!project) {
        return;
      }

      buttons.forEach((item) => {
        item.classList.remove("is-active");
        item.setAttribute("aria-selected", "false");
      });
      button.classList.add("is-active");
      button.setAttribute("aria-selected", "true");

      card.classList.remove("is-changing");
      void card.offsetWidth;
      card.classList.add("is-changing");

      image.src = project.image;
      image.alt = project.alt;
      kicker.textContent = project.kicker;
      title.textContent = project.title;
      text.textContent = project.text;
      link.href = project.href;

      tags.innerHTML = "";
      project.tags.forEach((tag) => {
        const span = document.createElement("span");
        span.textContent = tag;
        tags.append(span);
      });
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
    const recipient = form.dataset.recipient || "Skoog2007@gmail.com";
    const subject = encodeURIComponent(formData.get("subject"));
    const body = encodeURIComponent(
      `Namn: ${formData.get("name")}\nE-post: ${formData.get("email")}\n\nMeddelande:\n${formData.get("message")}`
    );

    setFormStatus(
      status,
      "Meddelandet öppnas i din e-postklient.",
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
