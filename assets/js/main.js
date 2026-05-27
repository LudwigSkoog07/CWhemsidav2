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

  const heroElements = document.querySelectorAll(".desktop-hero [data-reveal]");
  heroElements.forEach((element) => element.classList.add("is-visible"));

  const revealElements = Array.from(elements).filter((element) => !element.classList.contains("is-visible"));
  if (!revealElements.length) {
    return;
  }

  if (!("IntersectionObserver" in window)) {
    revealElements.forEach((element) => element.classList.add("is-visible"));
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

  revealElements.forEach((element) => observer.observe(element));
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

  document.querySelectorAll(".project-card-clickable").forEach((card) => {
    card.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") {
        return;
      }

      event.preventDefault();
      card.click();
    });
  });

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
  const motionScale = reducedMotion ? 0.55 : 1;
  const pushScale = reducedMotion ? 0.7 : 1;

  if (!scene || !cards.length) {
    return;
  }

  const clamp = (value, min, max) => Math.min(Math.max(value, min), max);
  const easeOut = (value) => 1 - Math.pow(1 - value, 3);
  const lerp = (current, target, amount) => current + (target - current) * amount;

  const pointer = {
    x: 0,
    y: 0,
    isActive: false,
    isPressed: false
  };

  const scroll = {
    progress: 0
  };

  const cardMotion = new Map([
    [document.querySelector(".intro-window"), { baseRotate: 0, floatX: 7 * motionScale, floatY: 10 * motionScale, floatRotate: 0.35 * motionScale, push: 18 * pushScale, phase: 0, outX: -300, outY: -45, outRotate: -6, scaleLoss: 0.04 }],
    [document.querySelector(".player-window"), { baseRotate: 3, floatX: 6 * motionScale, floatY: 8 * motionScale, floatRotate: 0.28 * motionScale, push: 16 * pushScale, phase: 1.4, outX: 260, outY: -70, outRotate: 8, scaleLoss: 0.03 }],
    [document.querySelector(".airdrop-window"), { baseRotate: 0, floatX: 5 * motionScale, floatY: 9 * motionScale, floatRotate: 0.32 * motionScale, push: 16 * pushScale, phase: 2.7, outX: 260, outY: 80, outRotate: 6, scaleLoss: 0.04 }],
    [document.querySelector(".stack-window"), { baseRotate: -4, floatX: 6 * motionScale, floatY: 8 * motionScale, floatRotate: 0.3 * motionScale, push: 15 * pushScale, phase: 4.1, outX: -240, outY: 70, outRotate: -7, scaleLoss: 0.03 }]
  ]);

  const liveMotion = new Map(
    cards.map((card) => {
      const config = cardMotion.get(card) || {};
      return [
        card,
        {
          x: 0,
          y: 0,
          rotate: config.baseRotate || 0,
          scale: 1
        }
      ];
    })
  );

  let frameId;
  let lastTime = window.performance.now();
  let elapsedTime = 0;

  const isMotionLayout = () => window.innerWidth >= 768;

  const resetInlineMotion = () => {
    cards.forEach((card) => {
      card.style.transform = "";
    });
  };

  const getAvoidanceMotion = (card, config) => {
    if (!pointer.isActive || pointer.isPressed) {
      return { x: 0, y: 0, rotate: 0, isInside: false };
    }

    const rect = card.getBoundingClientRect();
    const isInside = pointer.x >= rect.left && pointer.x <= rect.right && pointer.y >= rect.top && pointer.y <= rect.bottom;

    if (isInside) {
      return { x: 0, y: 0, rotate: 0, isInside: true };
    }

    const nearestX = clamp(pointer.x, rect.left, rect.right);
    const nearestY = clamp(pointer.y, rect.top, rect.bottom);
    const distanceToBox = Math.hypot(pointer.x - nearestX, pointer.y - nearestY);
    const pullRange = clamp(Math.max(rect.width, rect.height) * 0.36, 120, 210);
    const influence = clamp(1 - distanceToBox / pullRange, 0, 1);

    if (influence === 0) {
      return { x: 0, y: 0, rotate: 0, isInside: false };
    }

    let awayX = rect.left + rect.width / 2 - pointer.x;
    let awayY = rect.top + rect.height / 2 - pointer.y;
    let awayDistance = Math.hypot(awayX, awayY);

    if (awayDistance < 0.001) {
      awayX = 0;
      awayY = -1;
      awayDistance = 1;
    }

    const strength = easeOut(influence);
    const maxPush = config.push || 16;
    const normalizedX = awayX / awayDistance;
    const normalizedY = awayY / awayDistance;

    return {
      x: normalizedX * maxPush * strength,
      y: normalizedY * maxPush * strength,
      rotate: clamp(normalizedX * 1.2, -1.2, 1.2) * strength,
      isInside: false
    };
  };

  const render = (now) => {
    frameId = undefined;

    if (!isMotionLayout()) {
      resetInlineMotion();
      return;
    }

    const deltaTime = Math.min((now - lastTime) / 1000, 0.05);
    lastTime = now;
    elapsedTime += deltaTime;
    const scrollEase = easeOut(scroll.progress);

    cards.forEach((card) => {
      if (card.classList.contains("is-dismissed")) {
        card.style.transform = "";
        return;
      }

      const config = cardMotion.get(card) || { baseRotate: 0, floatX: 5, floatY: 8, floatRotate: 0.25, push: 14, phase: 0, outX: 0, outY: -80, outRotate: 0, scaleLoss: 0.03 };
      const state = liveMotion.get(card);
      const avoidance = getAvoidanceMotion(card, config);
      const hoverCalm = avoidance.isInside ? 0.22 : 1;
      const floatX = Math.sin(elapsedTime * 0.7 + config.phase) * config.floatX * hoverCalm;
      const floatY = Math.cos(elapsedTime * 0.82 + config.phase) * config.floatY * hoverCalm;
      const floatRotate = Math.sin(elapsedTime * 0.45 + config.phase) * config.floatRotate * hoverCalm;

      const target = {
        x: floatX + avoidance.x + config.outX * scrollEase,
        y: floatY + avoidance.y + config.outY * scrollEase,
        rotate: config.baseRotate + floatRotate + avoidance.rotate + config.outRotate * scrollEase,
        scale: (avoidance.isInside ? 1.01 : 1) - config.scaleLoss * scrollEase
      };

      state.x = lerp(state.x, target.x, 0.12);
      state.y = lerp(state.y, target.y, 0.12);
      state.rotate = lerp(state.rotate, target.rotate, 0.12);
      state.scale = lerp(state.scale, target.scale, 0.12);

      card.style.transform = `translate3d(${state.x}px, ${state.y}px, 0) rotate(${state.rotate}deg) scale(${state.scale})`;
    });

    frameId = window.requestAnimationFrame(render);
  };

  const startMotion = () => {
    if (!frameId) {
      lastTime = window.performance.now();
      frameId = window.requestAnimationFrame(render);
    }
  };

  const stopMotion = () => {
    if (frameId) {
      window.cancelAnimationFrame(frameId);
      frameId = undefined;
    }
  };

  const handleResize = () => {
    if (isMotionLayout()) {
      updateScroll();
      startMotion();
      return;
    }

    stopMotion();
    resetInlineMotion();
  };

  scene.addEventListener("pointermove", (event) => {
    if (!isMotionLayout()) {
      return;
    }

    pointer.x = event.clientX;
    pointer.y = event.clientY;
    pointer.isActive = true;
  });

  scene.addEventListener("pointerleave", () => {
    pointer.isActive = false;
    pointer.isPressed = false;
  });

  scene.addEventListener("pointerdown", () => {
    pointer.isPressed = true;
  });

  window.addEventListener("pointerup", () => {
    pointer.isPressed = false;
  });

  const updateScroll = () => {
    if (!isMotionLayout()) {
      scroll.progress = 0;
      return;
    }

    const hero = scene.closest(".desktop-hero") || scene;
    const rect = hero.getBoundingClientRect();
    const distance = Math.max(hero.offsetHeight * 0.45, 360);
    scroll.progress = clamp(-rect.top / distance, 0, 1);
  };

  window.addEventListener("scroll", updateScroll, { passive: true });
  window.addEventListener("resize", handleResize);
  updateScroll();
  handleResize();
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
      card.setAttribute("aria-labelledby", button.id);

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
  const submitButton = form.querySelector('button[type="submit"]');

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    validateContactFormFields(form);

    if (!form.checkValidity()) {
      form.classList.add("was-validated");
      setFormStatus(status, "Fyll i alla obligatoriska fält innan du skickar formuläret.", true);
      return;
    }

    const config = getPortfolioSupabaseConfig();
    const supabaseClient = createPortfolioSupabaseClient(config);

    if (!supabaseClient) {
      setFormStatus(status, "Supabase saknar projekt-URL eller anon key.", true);
      return;
    }

    const formData = new FormData(form);
    const payload = {
      name: String(formData.get("name") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      subject: String(formData.get("subject") || "").trim(),
      message: String(formData.get("message") || "").trim(),
      consent: formData.get("consent") === "on",
      page_path: window.location.pathname,
      user_agent: window.navigator.userAgent
    };

    setFormPending(submitButton, true);

    try {
      const { error } = await supabaseClient
        .from(config.table)
        .insert(payload);

      if (error) {
        throw error;
      }

      setFormStatus(status, "Tack! Ditt meddelande har skickats.", false);
      form.reset();
      form.classList.remove("was-validated");
    } catch (error) {
      console.error("Supabase form submit failed:", error);
      setFormStatus(status, "Meddelandet kunde inte skickas. Försök igen om en stund.", true);
    } finally {
      setFormPending(submitButton, false);
    }
  });
}

function validateContactFormFields(form) {
  const rules = [
    { name: "name", min: 2, max: 120 },
    { name: "subject", min: 2, max: 160 },
    { name: "message", min: 5, max: 5000 }
  ];

  rules.forEach((rule) => {
    const field = form.elements[rule.name];
    if (!field) {
      return;
    }

    const length = field.value.trim().length;
    const isValidLength = length >= rule.min && length <= rule.max;
    field.setCustomValidity(isValidLength ? "" : "Kontrollera längden på fältet.");
  });
}

function getPortfolioSupabaseConfig() {
  const config = window.PORTFOLIO_SUPABASE || {};

  return {
    url: config.url || "",
    anonKey: config.anonKey || "",
    table: config.table || "portfolio_mail_submits"
  };
}

function createPortfolioSupabaseClient(config) {
  const hasPlaceholders = [config.url, config.anonKey].some((value) => value.includes("YOUR_"));

  if (hasPlaceholders || !config.url || !config.anonKey || !window.supabase?.createClient) {
    return null;
  }

  return window.supabase.createClient(config.url, config.anonKey);
}

function setFormPending(button, isPending) {
  if (!button) {
    return;
  }

  button.disabled = isPending;
  button.textContent = isPending ? "Skickar..." : "Skicka meddelande";
}

function setFormStatus(statusNode, message, isError) {
  if (!statusNode) {
    return;
  }

  statusNode.textContent = message;
  statusNode.classList.toggle("is-error", isError);
  statusNode.classList.toggle("is-success", !isError);
}
