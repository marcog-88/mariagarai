import { jsPDF } from "jspdf";
import type { CareerDesign, EcosystemOffer } from "./career.types";

// Colores de marca
const TEXT = "#0C0D0E";
const ACCENT = "#9378FE"; // lila
const MUTED = "#6B6B70";

const PAGE_W = 210; // A4 mm
const PAGE_H = 297;
const MARGIN_X = 18;
const CONTENT_W = PAGE_W - MARGIN_X * 2;

export function downloadCareerPdf(design: CareerDesign) {
  const doc = new jsPDF({ unit: "mm", format: "a4" });
  let y = 20;

  const ensureSpace = (needed: number) => {
    if (y + needed > PAGE_H - 20) {
      addFooter(doc);
      doc.addPage();
      y = 20;
    }
  };

  const writeParagraph = (
    text: string,
    opts: { size?: number; color?: string; bold?: boolean; lineGap?: number } = {},
  ) => {
    const { size = 11, color = TEXT, bold = false, lineGap = 1.55 } = opts;
    doc.setFont("helvetica", bold ? "bold" : "normal");
    doc.setFontSize(size);
    doc.setTextColor(color);
    const lines = doc.splitTextToSize(text, CONTENT_W) as string[];
    const lineHeight = size * 0.3528 * lineGap;
    for (const line of lines) {
      ensureSpace(lineHeight);
      doc.text(line, MARGIN_X, y);
      y += lineHeight;
    }
  };

  const writeSectionTitle = (title: string) => {
    ensureSpace(18);
    y += 4;
    doc.setFillColor(ACCENT);
    doc.rect(MARGIN_X, y - 4, 3, 8, "F");
    doc.setFont("helvetica", "bold");
    doc.setFontSize(16);
    doc.setTextColor(TEXT);
    doc.text(title, MARGIN_X + 6, y + 2);
    y += 10;
  };

  // ---------- Header ----------
  doc.setFillColor(ACCENT);
  doc.rect(0, 0, PAGE_W, 12, "F");
  doc.setFont("helvetica", "bold");
  doc.setFontSize(11);
  doc.setTextColor("#FFFFFF");
  doc.text("María Garai — Tu Oferta Exponencial", MARGIN_X, 8);

  y = 28;
  doc.setFont("helvetica", "bold");
  doc.setFontSize(22);
  doc.setTextColor(TEXT);
  const title = "Tu oferta exponencial";
  const titleLines = doc.splitTextToSize(title, CONTENT_W) as string[];
  for (const l of titleLines) {
    doc.text(l, MARGIN_X, y);
    y += 9;
  }
  y += 2;

  // ---------- Sección 1: Posicionamiento ----------
  writeSectionTitle("Posicionamiento");
  writeParagraph(design.expertIdentity);

  // ---------- Sección 2: Evaluación del nicho ----------
  writeSectionTitle("Evaluación de tu nicho");
  writeParagraph("Cuán nichada estás hoy:", { bold: true, color: ACCENT, size: 12 });
  writeParagraph(design.nicheEvaluation.currentNicheLevel);
  y += 3;
  writeParagraph("Nicho más rentable recomendado:", { bold: true, color: ACCENT, size: 12 });
  writeParagraph(design.nicheEvaluation.recommendedNiche, { bold: true });
  y += 3;
  writeParagraph("Por qué este nicho:", { bold: true, color: ACCENT, size: 12 });
  writeParagraph(design.nicheEvaluation.why);

  // ---------- Sección 3: Tu avatar ----------
  writeSectionTitle("Tu avatar (cliente con mayor poder de compra)");
  writeParagraph("¿Quién es?", { bold: true, color: ACCENT, size: 12 });
  writeParagraph(design.avatar.whoIs);
  y += 3;
  writeParagraph("¿En qué punto está?", { bold: true, color: ACCENT, size: 12 });
  writeParagraph(design.avatar.pointA);
  y += 3;
  writeParagraph("¿Qué quiere?", { bold: true, color: ACCENT, size: 12 });
  writeParagraph(design.avatar.pointB);
  y += 3;
  writeParagraph("Cómo le ayudas a pasar del punto A al B", { bold: true, color: ACCENT, size: 12 });
  writeParagraph(design.avatar.transformation);

  // ---------- Sección 4: Oferta insignia + satélites ----------
  writeSectionTitle("Tu oferta insignia y tus ofertas satélite");
  writeParagraph(
    "Una sola oferta protagonista (la insignia). Las otras tres orbitan a su alrededor para atraer, calentar y retener. Esto es un primer borrador — un punto de partida con el que empezar a trabajar.",
    { size: 10, color: MUTED },
  );
  y += 2;
  design.ecosystem.forEach((o) => {
    ensureSpace(14);
    y += 2;
    const role =
      o.type === "OFERTA INSIGNIA"
        ? "  ·  LA ESTRELLA"
        : "  ·  SATÉLITE";
    doc.setFont("helvetica", "bold");
    doc.setFontSize(13);
    doc.setTextColor(ACCENT);
    doc.text(`${o.type}${role}`, MARGIN_X, y);
    y += 6;
    doc.setFont("helvetica", "bold");
    doc.setFontSize(11);
    doc.setTextColor(TEXT);
    writeParagraph(o.name, { bold: true, size: 12 });
    writeOfferBody(o, writeParagraph);
    y += 3;
  });


  // ---------- Sección 5: Visión ----------
  writeSectionTitle("Tu visión");
  writeParagraph("A 1 año:", { bold: true, color: ACCENT, size: 12 });
  writeParagraph(design.vision1Year);
  y += 3;
  writeParagraph("A 5 años:", { bold: true, color: ACCENT, size: 12 });
  writeParagraph(design.vision5Years);

  // ---------- Footer ----------
  addFooter(doc);
  const pageCount = doc.getNumberOfPages();
  for (let p = 1; p <= pageCount; p++) {
    doc.setPage(p);
    addFooter(doc);
  }

  doc.save("mi-oferta-exponencial.pdf");
}

function writeOfferBody(
  o: EcosystemOffer,
  writeParagraph: (text: string, opts?: { size?: number; color?: string; bold?: boolean; lineGap?: number }) => void,
) {
  if (o.type === "OFERTA INSIGNIA") {
    writeParagraph(`Transformación: ${o.transformation}`, { size: 10.5 });
    writeParagraph("Incluye:", { bold: true, size: 10.5 });
    writeParagraph(o.includes.map((k) => `• ${k}`).join("\n"), { size: 10.5 });
    writeParagraph(
      `Precios — Validación: ${o.pricing.validation} · Mercado: ${o.pricing.market} · Avanzado: ${o.pricing.advanced}`,
      { size: 10.5, bold: true },
    );
    writeParagraph(`Cuándo: ${o.whenToLaunch}`, { size: 10.5 });
    return;
  }
  if (o.type === "OFERTA DE PROSPECCION") {
    writeParagraph(`Qué resuelve: ${o.solves}`, { size: 10.5 });
    writeParagraph(`Formato: ${o.format}`, { size: 10.5 });
    writeParagraph(`Precio: ${o.price}`, { size: 10.5, bold: true });
    writeParagraph(`Cuándo: ${o.whenToLaunch}`, { size: 10.5 });
    return;
  }
  if (o.type === "LEAD MAGNET") {
    writeParagraph(`Qué resuelve: ${o.solves}`, { size: 10.5 });
    writeParagraph(`Por qué es valioso: ${o.whyValuable}`, { size: 10.5 });
    writeParagraph(`Formato: ${o.format}`, { size: 10.5 });
    writeParagraph(`Precio: ${o.price}`, { size: 10.5, bold: true });
    return;
  }
  // CONTINUIDAD
  writeParagraph(`Para quién: ${o.forWhom}`, { size: 10.5 });
  writeParagraph("Incluye al mes:", { bold: true, size: 10.5 });
  writeParagraph(o.includes.map((k) => `• ${k}`).join("\n"), { size: 10.5 });
  writeParagraph(`Formato: ${o.format}`, { size: 10.5 });
  writeParagraph(`Precio: ${o.price}`, { size: 10.5, bold: true });
  writeParagraph(`Cuándo: ${o.whenToLaunch}`, { size: 10.5 });
}

function addFooter(doc: jsPDF) {
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  doc.setTextColor(MUTED);
  doc.text("mariagarai.com · Negocio exponencial", PAGE_W / 2, PAGE_H - 10, { align: "center" });
}
