// Mebel/dekor katalogi.
// src — namunaviy (demo) 3D modellar, Google model-viewer ochiq repozitoriyasidan.
// Diplom/taqdimot uchun bu yerga o'zingizning .glb fayllaringizni qo'yishingiz mumkin
// (masalan: "models/divan.glb"). Bepul GLB modellar: poly.pizza, sketchfab.com (CC0 filtri).
// iosSrc (ixtiyoriy) — iPhone'da AR Quick Look ishlashi uchun .usdz fayl manzili.
// Bo'lmasa, o'sha element uchun iPhone'da AR tugmasi chiqmaydi (README'ga qarang).

const FURNITURE_ITEMS = [
  {
    id: "lantern",
    name: "Pol chiroq (Lantern)",
    desc: "Yotoqxona yoki yashash xonasi burchagi uchun dekorativ pol chirog'i.",
    room: "living",
    src: "https://cdn.jsdelivr.net/gh/KhronosGroup/glTF-Sample-Assets@main/Models/Lantern/glTF-Binary/Lantern.glb",
    thumbAlt: "Pol chiroq modeli"
  },
  {
    id: "speaker",
    name: "Zamonaviy kolonka",
    desc: "Yashash xonasi uchun kichik dekorativ audio-kolonka.",
    room: "living",
    src: "https://cdn.jsdelivr.net/gh/KhronosGroup/glTF-Sample-Assets@main/Models/BoomBox/glTF-Binary/BoomBox.glb",
    thumbAlt: "Kolonka modeli"
  },
  {
    id: "robot-decor",
    name: "Dekorativ robot haykalchasi",
    desc: "Bolalar yotoqxonasi yoki ish stoli uchun qiziqarli dekor buyumi.",
    room: "bedroom",
    src: "https://modelviewer.dev/shared-assets/models/RobotExpressive.glb",
    thumbAlt: "Robot haykalchasi"
  },
  {
    id: "astronaut-decor",
    name: "Fazogir haykalchasi",
    desc: "Javon yoki stol ustiga qo'yiladigan dekorativ haykalcha.",
    room: "bedroom",
    src: "https://modelviewer.dev/shared-assets/models/Astronaut.glb",
    iosSrc: "https://modelviewer.dev/shared-assets/models/Astronaut.usdz",
    thumbAlt: "Fazogir haykalchasi"
  },
  {
    id: "helmet-decor",
    name: "Dekorativ dubulg'a",
    desc: "Oshxona yoki ofis javoniga qo'yiladigan stilize dekor buyumi.",
    room: "kitchen",
    src: "https://cdn.jsdelivr.net/gh/KhronosGroup/glTF-Sample-Assets@main/Models/DamagedHelmet/glTF-Binary/DamagedHelmet.glb",
    thumbAlt: "Dekorativ dubulg'a"
  }
];
