// Generates the share card (public/og-image.png, 1200×630) and the square
// portrait used as the Person image in the structured data
// (public/maria-garai.jpg). Run by hand when the card changes:
//
//   node scripts/og-image.mjs
//
// then bump the ?v= query on og:image / twitter:image in index.html.
// Palette and fonts are the home's (.pd block in portada.css): graphite paper,
// ink, violet #9378fe, lilac arch, Instrument Serif + Instrument Sans.
import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";
import satori from "satori";
import sharp from "sharp";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const r = (p) => path.join(root, p);
const font = (pkg, file) => readFile(r(`node_modules/@fontsource/${pkg}/files/${file}`));

const C = {
  paper: "#f5f6f8",
  ink: "#0b0c0f",
  mute: "#4a4e58",
  line: "#e0e2e7",
  violet: "#9378fe",
  violetText: "#5b3fd6",
  lilac: "#ece6fd",
  lilac2: "#d8cdfb",
};

const h = (type, style, children) => ({ type, props: { style, children } });

const photo = await sharp(r("src/assets/maria-hero-940.webp")).png().toBuffer();
const photoUri = `data:image/png;base64,${photo.toString("base64")}`;

const fonts = [
  { name: "Instrument Serif", data: await font("instrument-serif", "instrument-serif-latin-400-normal.woff"), weight: 400, style: "normal" },
  { name: "Instrument Sans", data: await font("instrument-sans", "instrument-sans-latin-500-normal.woff"), weight: 500, style: "normal" },
  { name: "Instrument Sans", data: await font("instrument-sans", "instrument-sans-latin-600-normal.woff"), weight: 600, style: "normal" },
];

// Photo 940×1409; shown 420 wide so the head sits well inside the card.
const PHOTO_W = 420;
const PHOTO_H = Math.round((1409 / 940) * PHOTO_W);

const card = h(
  "div",
  { width: 1200, height: 630, display: "flex", position: "relative", background: C.paper, fontFamily: "Instrument Sans" },
  [
    // Lilac arch behind María, as on the home hero.
    h("div", {
      position: "absolute",
      right: 70,
      bottom: 0,
      width: 400,
      height: 560,
      borderRadius: "200px 200px 0 0",
      background: `linear-gradient(180deg, ${C.lilac} 0%, ${C.lilac2} 100%)`,
    }),
    {
      type: "img",
      props: {
        src: photoUri,
        width: PHOTO_W,
        height: PHOTO_H,
        style: { position: "absolute", right: 60, top: 70, width: PHOTO_W, height: PHOTO_H },
      },
    },
    h(
      "div",
      {
        position: "absolute",
        left: 80,
        top: 0,
        bottom: 0,
        width: 620,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      },
      [
        h("div", { width: 64, height: 6, borderRadius: 3, background: C.violet, marginBottom: 36 }),
        h("div", { fontFamily: "Instrument Serif", fontSize: 128, lineHeight: 1, letterSpacing: "-0.02em", color: C.ink }, "María Garai"),
        h(
          "div",
          { marginTop: 28, fontSize: 38, lineHeight: 1.25, fontWeight: 500, color: C.mute, maxWidth: 560 },
          "Fundadora de Exponencial y consultora de negocio",
        ),
        h(
          "div",
          { marginTop: 56, fontSize: 22, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: C.violetText },
          "mariagarai.com",
        ),
      ],
    ),
  ],
);

const svg = await satori(card, { width: 1200, height: 630, fonts });
await sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toFile(r("public/og-image.png"));

// Square portrait for schema.org Person.image: same cutout on the lilac arch.
const portrait = h(
  "div",
  { width: 800, height: 800, display: "flex", position: "relative", background: C.paper },
  [
    h("div", {
      position: "absolute",
      left: 120,
      bottom: 0,
      width: 560,
      height: 720,
      borderRadius: "280px 280px 0 0",
      background: `linear-gradient(180deg, ${C.lilac} 0%, ${C.lilac2} 100%)`,
    }),
    {
      type: "img",
      props: { src: photoUri, width: 600, height: 899, style: { position: "absolute", left: 100, top: 40, width: 600, height: 899 } },
    },
  ],
);
const portraitSvg = await satori(portrait, { width: 800, height: 800, fonts });
await sharp(Buffer.from(portraitSvg)).jpeg({ quality: 84, mozjpeg: true }).toFile(r("public/maria-garai.jpg"));

console.log("wrote public/og-image.png and public/maria-garai.jpg");
