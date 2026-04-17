const galleryEl = document.getElementById("cinema-gallery");
const loaderEl = document.getElementById("cinema-loader");
const lightboxEl = document.getElementById("cinema-lightbox");
const lightboxBackdropEl = document.getElementById("cinema-lightbox-backdrop");
const lightboxCloseEl = document.getElementById("cinema-lightbox-close");
const lightboxMediaEl = document.getElementById("cinema-lightbox-media");
const lightboxTitleEl = document.getElementById("cinema-lightbox-title");
const lightboxDescriptionEl = document.getElementById("cinema-lightbox-description");
const lightboxTagsEl = document.getElementById("cinema-lightbox-tags");

let scenes = [];
let infiniteIndex = 0;
const batchSize = 8;

async function fetchScenes() {
  try {
    loaderEl.classList.add("cinema-loader--visible");
    const res = await fetch("/api/cinema");
    if (!res.ok) throw new Error("Failed to load scenes");
    const data = await res.json();
    scenes = data.scenes || [];
    loaderEl.classList.remove("cinema-loader--visible");
    renderNextBatch();
    setupInfiniteScroll();
  } catch (err) {
    loaderEl.textContent = "Error loading scenes.";
  }
}

function renderNextBatch() {
  const slice = scenes.slice(infiniteIndex, infiniteIndex + batchSize);
  slice.forEach((scene) => {
    const card = createSceneCard(scene);
    galleryEl.appendChild(card);
  });
  infiniteIndex += slice.length;
}

function createSceneCard(scene) {
  const card = document.createElement("article");
  card.className = "cinema-card";
  card.dataset.id = scene.id;

  const media = document.createElement("div");
  media.className = "cinema-card-media";

  if (scene.type === "video") {
    const video = document.createElement("video");
    video.src = scene.previewUrl || scene.src;
    video.muted = true;
    video.loop = true;
    video.playsInline = true;
    video.autoplay = true;
    media.appendChild(video);
  } else {
    const img = document.createElement("img");
    img.src = scene.thumbnail || scene.src;
    img.alt = scene.title || "Scene";
    media.appendChild(img);
  }

  const gradient = document.createElement("div");
  gradient.className = "cinema-card-gradient";

  const meta = document.createElement("div");
  meta.className = "cinema-card-meta";

  const title = document.createElement("div");
  title.className = "cinema-card-title";
  title.textContent = scene.title || "Untitled Scene";

  const sub = document.createElement("div");
  sub.className = "cinema-card-sub";
  sub.textContent = scene.subtitle || scene.collection || "Feature Reel";

  const tagRow = document.createElement("div");
  tagRow.className = "cinema-card-tag-row";

  const chipType = document.createElement("span");
  chipType.className = "cinema-chip cinema-chip--accent";
  chipType.textContent = scene.type === "video" ? "Sequence" : "Frame";

  tagRow.appendChild(chipType);

  (scene.tags || []).slice(0, 2).forEach((tag) => {
    const chip = document.createElement("span");
    chip.className = "cinema-chip";
    chip.textContent = tag;
    tagRow.appendChild(chip);
  });

  meta.appendChild(title);
  meta.appendChild(sub);
  meta.appendChild(tagRow);

  media.appendChild(gradient);
  card.appendChild(media);
  card.appendChild(meta);

  card.addEventListener("click", () => openLightbox(scene));

  return card;
}

function openLightbox(scene) {
  lightboxMediaEl.innerHTML = "";
  lightboxTagsEl.innerHTML = "";

  if (scene.type === "video") {
    const video = document.createElement("video");
    video.controls = true;
    video.playsInline = true;
    video.poster = scene.thumbnail || "";
    if (scene.src.endsWith(".m3u8") && window.Hls && Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(scene.src);
      hls.attachMedia(video);
    } else {
      video.src = scene.src;
    }
    lightboxMediaEl.appendChild(video);
  } else {
    const img = document.createElement("img");
    img.src = scene.src;
    img.alt = scene.title || "Scene";
    lightboxMediaEl.appendChild(img);
  }

  lightboxTitleEl.textContent = scene.title || "Untitled Scene";
  lightboxDescriptionEl.textContent =
    scene.description ||
    "Cinematic sequence rendered through the INFINITY‑CORE‑ENGINE pipeline.";

  (scene.tags || []).forEach((tag) => {
    const chip = document.createElement("span");
    chip.className = "cinema-chip";
    chip.textContent = tag;
    lightboxTagsEl.appendChild(chip);
  });

  lightboxEl.classList.add("cinema-lightbox--open");
}

function closeLightbox() {
  lightboxEl.classList.remove("cinema-lightbox--open");
  lightboxMediaEl.innerHTML = "";
}

lightboxBackdropEl.addEventListener("click", closeLightbox);
lightboxCloseEl.addEventListener("click", closeLightbox);
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeLightbox();
});

function setupInfiniteScroll() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && infiniteIndex < scenes.length) {
          renderNextBatch();
        }
      });
    },
    { rootMargin: "200px" }
  );

  observer.observe(loaderEl);
}

function setupParallax() {
  const hero = document.querySelector("[data-parallax]");
  if (!hero) return;

  window.addEventListener("mousemove", (e) => {
    const rect = hero.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    const rotateX = y * -6;
    const rotateY = x * 6;
    hero.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translate3d(0,0,0)`;
  });

  window.addEventListener("mouseleave", () => {
    hero.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg)";
  });
}

fetchScenes();
setupParallax();
