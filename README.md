# AR Interyer Dizayni Ilovasi

**Mustaqil ish** — Sun'iy intellekt va raqamli texnologiyalar fakulteti, VR/AR texnologiyalari fanidan
**Mavzu:** "AR interyer dizayni ilovasi"
**Bajardi:** Karimov Xolbek

## Loyiha haqida

Bu — brauzer orqali ishlaydigan AR (kengaytirilgan reallik) interyer dizayni ilovasi.
Foydalanuvchi katalogdan mebel/dekor buyumini tanlaydi, uni 3D holatda aylantirib ko'radi
va telefon kamerasi orqali **o'z xonasiga AR rejimida joylashtirib ko'rishi** mumkin.

Texnologiya: Google'ning [`<model-viewer>`](https://modelviewer.dev) veb-komponenti —
WebXR, Android Scene Viewer va iOS Quick Look orqali ishlaydi, maxsus ilova o'rnatish shart emas.

## Loyiha tuzilishi

```
ar-interior-design/
├── index.html          # Asosiy sahifa (3D ko'rinish + AR tugmasi)
├── style.css           # Dizayn
├── furniture-data.js   # Mebel/dekor katalogi (model manzillari)
├── app.js              # Katalog va tanlash mantig'i
└── README.md           # Ushbu qo'llanma
```

## VS Code'da ishga tushirish

1. Papkani VS Code'da oching: `File → Open Folder → ar-interior-design`.
2. **Live Server** kengaytmasini o'rnating (Extensions → "Live Server" qidiring → Install).
3. `index.html` ustiga o'ng tugmani bosing → **"Open with Live Server"**.
4. Brauzerda sahifa ochiladi (odatda `http://127.0.0.1:5500`).

> Internet aloqasi kerak — 3D model fayllari va `model-viewer` kutubxonasi CDN orqali yuklanadi.

## Muhim: iPhone'da AR tugmasi haqida

Apple'ning AR Quick Look texnologiyasi `.glb` fayl bilan **ishlamaydi** — unga maxsus
`.usdz` formatidagi fayl kerak (WebXR ham Safari'da qo'llab-quvvatlanmaydi).

Shu sababli:
- **"Fazogir haykalchasi" (Astronaut)** — uchun rasmiy `.usdz` fayli mavjud, shu
  elementni tanlasangiz iPhone'da AR tugmasi **chiqadi**.
- Qolgan 4 ta namuna (pol chiroq, kolonka, robot, dubulg'a) uchun hozircha `.usdz`
  versiyasi yo'q, shuning uchun ular bilan iPhone'da AR tugmasi ko'rinmaydi
  (Android'da esa barchasi ishlaydi, chunki u `.glb`ni to'g'ridan-to'g'ri ishlatadi).

**Haqiqiy mebel modellarini qo'shganda** (quyida tushuntirilgan), iPhone uchun ham
AR ishlashini xohlasangiz, har bir `.glb` faylni `.usdz`ga aylantiring:
- Mac'da **Reality Converter** (bepul, Apple) — `.glb`/`.gltf`ni ikki marta bosib
  sudrab tashlash orqali `.usdz`ga aylantiradi.
- Yoki onlayn konvertorlar: https://products.aspose.app/3d/conversion/glb-to-usdz
- Olingan `.usdz` faylni `models/` papkasiga qo'yib, `furniture-data.js`da
  mos elementga `iosSrc: "models/divan.usdz"` qatorini qo'shing.

## Telefonda AR'ni sinash

1. Kompyuter va telefon **bir xil Wi-Fi** tarmog'ida bo'lishi kerak.
2. Live Server ko'rsatgan tarmoq manzilini (masalan `http://192.168.x.x:5500`) telefon brauzerida oching.
3. Model ostidagi **"Xonamga AR orqali joylashtirish"** tugmasini bosing.
4. Android — Google'ning **Scene Viewer** ochiladi; iPhone — **AR Quick Look** ochiladi.
5. Kamera orqali tekis sirt (pol/stol) ko'rsating — model avtomatik joylashadi.

## Haqiqiy mebel modellarini qo'shish (himoya uchun tavsiya)

Demo versiyada ishlatilgan modellar (lampa, kolonka, dekor haykalchalar) — bu
`model-viewer` ning ochiq namunalari, ular ilovaning **ishlashini ko'rsatish** uchun qo'yilgan.

Himoya/taqdimot oldidan haqiqiy mebel (divan, stol, krovat, shkaf) modellari bilan
almashtirish tavsiya etiladi:

1. Bepul, litsenziyasiz (CC0) `.glb` mebel modellarini shu manbalardan yuklab oling:
   - https://poly.pizza (qidiruvda "sofa", "chair", "table" va h.k.)
   - https://sketchfab.com (filtrlarda "Downloadable" + "CC0" ni tanlang)
2. Yuklab olingan `.glb` faylni loyiha ichida `models/` papkasiga joylashtiring.
3. `furniture-data.js` faylida mos elementning `src` qiymatini o'zgartiring:
   ```js
   src: "models/divan.glb",
   ```
4. Sahifani qayta yuklang — yangi model katalogda va AR rejimida darhol ko'rinadi.

## Kengaytirish g'oyalari (qo'shimcha ball uchun)

- Har bir xona turi (yashash, yotoq, oshxona) uchun **rang palitrasi tavsiyasi** qo'shish.
- Tanlangan mebelni **"Sevimlilar"** ro'yxatiga saqlash (localStorage orqali).
- Bir nechta mebelni **bitta AR sahnada** birga ko'rish (model-viewer `ar-placement`
  va bir nechta instansiya orqali).
- Narx va o'lcham ma'lumotlarini katalog kartalariga qo'shish.

## Himoya uchun qisqacha tushuntirish (slayd matni uchun)

> "Ilova `<model-viewer>` veb-komponenti asosida qurilgan. Foydalanuvchi katalogdan
> mebel tanlaydi, uni 3D formatda aylantirib ko'rib chiqadi, so'ngra WebXR/Scene Viewer/
> Quick Look texnologiyalari yordamida real xonaga AR tarzda proyeksiya qiladi. Loyiha
> toza HTML/CSS/JavaScript'da yozilgan, qo'shimcha backend talab qilmaydi va istalgan
> zamonaviy brauzerda ishlaydi."
