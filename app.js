const grid = document.getElementById("catalog-grid");
const mainViewer = document.getElementById("main-viewer");
const itemName = document.getElementById("item-name");
const itemDesc = document.getElementById("item-desc");
const tabs = document.querySelectorAll(".room-tab");
const roomBg = document.getElementById("room-bg");
const animControls = document.getElementById("anim-controls");
const animToggle = document.getElementById("anim-toggle");
const animSelect = document.getElementById("anim-select");

let activeRoom = "all";
let selectedId = null;

function renderCatalog() {
  grid.innerHTML = "";
  const items = FURNITURE_ITEMS.filter(
    (it) => activeRoom === "all" || it.room === activeRoom
  );

  items.forEach((item) => {
    const card = document.createElement("div");
    card.className = "catalog-item" + (item.id === selectedId ? " selected" : "");
    card.dataset.id = item.id;

    const preview = document.createElement("model-viewer");
    preview.setAttribute("src", item.src);
    preview.setAttribute("alt", item.thumbAlt);
    preview.setAttribute("disable-zoom", "");
    preview.setAttribute("auto-rotate", "");
    preview.setAttribute("rotation-per-second", "20deg");
    preview.setAttribute("shadow-intensity", "0.6");
    preview.setAttribute("autoplay", ""); // modelda o'z animatsiyasi bo'lsa, shu yerda ham ko'rinadi

    const label = document.createElement("div");
    label.className = "item-label";
    label.textContent = item.name;

    card.appendChild(preview);
    card.appendChild(label);
    card.addEventListener("click", () => selectItem(item));
    grid.appendChild(card);
  });
}

function setRoomBackground(roomKey) {
  roomBg.className = "room-bg room-" + (roomKey || "all");
}

function selectItem(item) {
  selectedId = item.id;
  mainViewer.setAttribute("src", item.src);
  mainViewer.setAttribute("alt", item.thumbAlt);
  mainViewer.setAttribute("autoplay", "");
  if (item.iosSrc) {
    mainViewer.setAttribute("ios-src", item.iosSrc);
  } else {
    mainViewer.removeAttribute("ios-src");
  }
  itemName.textContent = item.name;
  itemDesc.textContent = item.desc;
  setRoomBackground(item.room);
  animControls.hidden = true; // keyingi model yuklanguncha yashirib turamiz
  renderCatalog();
}

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");
    activeRoom = tab.dataset.room;
    renderCatalog();
  });
});

// Boshlang'ich holat: birinchi mebelni tanlab qo'yish
window.addEventListener("DOMContentLoaded", () => {
  renderCatalog();
  if (FURNITURE_ITEMS.length) selectItem(FURNITURE_ITEMS[0]);
});

// Model yuklanmasa (internet yo'q, manzil xato va h.k.) — tushunarli xabar berish
mainViewer.addEventListener("error", (event) => {
  console.error("Model yuklanmadi:", event.detail);
  itemDesc.textContent =
    "⚠️ Model yuklanmadi. Internet aloqasini tekshiring yoki furniture-data.js faylidagi havolani tekshiring.";
});

// Model yuklangach: agar o'zida animatsiya(lar) bo'lsa, boshqaruv panelini ko'rsatish
mainViewer.addEventListener("load", () => {
  const animations = mainViewer.availableAnimations || [];
  if (animations.length > 0) {
    animSelect.innerHTML = "";
    animations.forEach((name) => {
      const opt = document.createElement("option");
      opt.value = name;
      opt.textContent = name;
      animSelect.appendChild(opt);
    });
    mainViewer.animationName = animations[0];
    mainViewer.play();
    animToggle.textContent = "⏸ To'xtatish";
    animControls.hidden = false;
  } else {
    animControls.hidden = true;
  }
});

animSelect.addEventListener("change", () => {
  mainViewer.animationName = animSelect.value;
  mainViewer.play();
  animToggle.textContent = "⏸ To'xtatish";
});

animToggle.addEventListener("click", () => {
  if (mainViewer.paused) {
    mainViewer.play();
    animToggle.textContent = "⏸ To'xtatish";
  } else {
    mainViewer.pause();
    animToggle.textContent = "▶ Ishga tushirish";
  }
});
