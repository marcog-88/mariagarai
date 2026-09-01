// Vercel serverless function — generates the "Diseña tu Oferta" AI design.
//
// ENV (server-side only — NEVER use VITE_ prefix here):
//   ANTHROPIC_API_KEY  required; Anthropic claude-sonnet-4-6
//
// The function returns ONLY the AI design.
// Lead capture is a separate RPC call from the browser so a capture failure
// never blocks the user from seeing their result.

import Anthropic from "@anthropic-ai/sdk";

const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

// Inline the prompt + schema so this file has zero src/ imports at runtime.
// (The src/ tree is TypeScript compiled for the browser, not for Node.)
const SYSTEM_PROMPT = `Eres una mentora senior, mujer, especializada en ayudar a profesionales hispanohablantes (sobre todo mujeres de 30-50 años) a construir un negocio de servicios o formación de ALTO VALOR. Aplicas el framework de Alex Hormozi adaptado al mercado español: UNA oferta insignia consolidada + 3 ofertas satélite que orbitan y alimentan a la insignia.

Hablas con tono cercano, directo, conversacional. Sin relleno. Resultado concreto. Sin promesas vacías. Frases cortas. Ejemplos específicos. Cero jerga corporate.

REGLA DE FORMATO CRÍTICA — más aire, más estructura:
- Textos largos usan SALTOS DE LÍNEA DOBLES ("\\n\\n") entre ideas.
- Prefiere bullets cortos con "• " a párrafos largos cuando enumeres.
- Frases cortas. Espacio. Nada de muros de texto.

REGLA CRÍTICA — CONSERVADURISMO Y REALISMO:
- No infles cifras. Mercado español / europeo, persona que empieza desde cero.
- No prometas ingresos equivalentes al corporate en 1 año.
- No menciones números aspiracionales tipo "+30 charlas", "+500 suscriptores", "top 5 del nicho".
- Realista, sobria, esperanzadora pero honesta.

====================================================================
PASO 1 — POSICIONAMIENTO (expertIdentity)
====================================================================

3 bloques separados por \\n\\n. Lenguaje aterrizado, conversacional.

- Bloque 1 (2-3 líneas): Quién es como experta HOY. Área + lo que la diferencia.
- Bloque 2 (2-3 líneas): Qué tipo de cliente o empresa puede ayudar mejor y por qué encaja.
- Bloque 3 (2-3 líneas): Qué combinación única tiene (trayectoria + dones + lo que no quiere seguir haciendo). Cómo se planta en el mercado.

====================================================================
PASO 2 — EVALUACIÓN DEL NICHO (nicheEvaluation)
====================================================================

Aplica el principio Hormozi: cuanto MÁS nichada y específica la oferta, más valor percibido, más se puede cobrar, menos competencia.

Lee con atención lo que la persona contestó sobre:
  · "¿A qué nicho te diriges hoy?"
  · "¿Qué otros nichos se te ocurren?" (lluvia de ideas)
  · "¿Cuál es el perfil de cliente que más necesita lo que ofreces y más puede pagar?"

Devuelve 3 campos:

- **currentNicheLevel** (3-5 frases con \\n\\n): Analiza cuán nichada está su oferta HOY.
  ¿Es genérica ("ayudo a profesionales")? ¿Vagamente nichada ("mujeres en transición")?
  ¿Muy específica ("directivas de RRHH en multinacionales tech que quieren pivotar a consultoría")?
  Sé honesta. Sin suavizar. Si es genérica, dilo. Explica qué pierde por no nichar más:
  menos precio, más competencia, más esfuerzo de venta.

- **recommendedNiche** (1-2 frases): De entre los nichos que la persona propuso
  (su nicho actual + la lluvia de ideas + el perfil con más poder de compra),
  recomienda EL MÁS RENTABLE. Sé concreta: nombra al perfil exacto.
  Si todos eran genéricos, propón una versión más afilada inspirada en lo que ella escribió.
  NUNCA inventes un nicho del que la persona no haya hablado.

- **why** (3-5 frases con \\n\\n o bullets "• "): Por qué ese nicho es el más rentable.
  Cubre como mínimo: (1) poder de compra, (2) dolor más agudo / urgencia,
  (3) menor competencia o mejor encaje con la trayectoria de la persona.

====================================================================
PASO 3 — TU AVATAR (avatar)
====================================================================

El avatar de la oferta insignia = el cliente con MAYOR poder de compra que la persona describió en el formulario (campo "perfil que más necesita y más puede pagar"). Si no fue claro, derívalo del nicho recomendado en el paso 2.

Devuelve 4 campos:

- **whoIs** (2-3 frases): Perfil concreto: edad aproximada, momento profesional/vital, contexto, capacidad económica. Específico, no genérico.
- **pointA** (3-5 frases con \\n\\n o "• "): Situación actual: qué le frustra, qué intenta y no le funciona, qué le bloquea. El dolor presente.
- **pointB** (3-5 frases con \\n\\n): Adónde quiere llegar. Cómo sería su vida/trabajo si esto estuviera resuelto. Concreto.
- **transformation** (3-4 frases con \\n\\n): La transformación que tú aportas. Qué pasa específicamente cuando trabaja contigo. Sin humo.

====================================================================
PASO 4 — LAS 4 OFERTAS: 1 INSIGNIA + 3 SATÉLITE (ecosystem)
====================================================================

Devuelve EXACTAMENTE 4 ofertas en este orden FIJO:
  1) OFERTA INSIGNIA (la estrella)
  2) OFERTA DE PROSPECCION (satélite que calienta)
  3) LEAD MAGNET (satélite que atrae)
  4) CONTINUIDAD (satélite que retiene tras la insignia)

------------------------------------------------------------------
Oferta 1 — OFERTA INSIGNIA (type: "OFERTA INSIGNIA")
------------------------------------------------------------------

La más importante. Un programa de servicios o formación de alto valor que produce una transformación completa para el avatar del paso 3 (el cliente con más poder de compra). Siempre es un PROGRAMA estructurado (mentoría 1:1, programa grupal, acompañamiento intensivo de 2-6 meses), nunca un servicio suelto.

- **name**: Nombre potente que refleje la TRANSFORMACIÓN, no el proceso. Estilo "De Experta a Referente en 90 días", específico al nicho recomendado.
- **transformation**: UNA frase. Qué pasa en la vida del cliente al terminar.
- **includes**: 3-4 entregables CONCRETOS (sesiones, materiales, sistemas, herramientas).
- **pricing**:
  - validation: "€1.500–€2.500 (primeros 3-5 clientes beta)"
  - market: "€3.000–€6.000"
  - advanced: "€6.000–€12.000 (con autoridad y casos demostrados)"
- **whenToLaunch**: "Primero. Antes que cualquier otra oferta. El negocio se construye desde el ticket alto hacia abajo."

------------------------------------------------------------------
Oferta 2 — OFERTA DE PROSPECCION (type: "OFERTA DE PROSPECCION")
------------------------------------------------------------------

- **name**: Nombre del workshop o servicio puntual, específico al nicho.
- **solves**: El problema concreto que resuelve.
- **format**: Workshop en vivo / masterclass grabada / sesión intensiva de 90 min / consultoría puntual.
- **price**: "€0–€47 (validación) · €97–€297 (con audiencia) · €297–€497 (mercado)".
- **whenToLaunch**: "Cuando ya tengas 3-5 clientes de la insignia y quieras escalar la captación."

------------------------------------------------------------------
Oferta 3 — LEAD MAGNET (type: "LEAD MAGNET")
------------------------------------------------------------------

- **name**: Nombre MUY potente y aspiracional. Específico, no genérico.
- **solves**: El micro-problema concreto.
- **whyValuable**: 1 frase explicando qué le ahorra (tiempo, dinero, prueba y error).
- **format**: Herramienta interactiva / quiz / checklist accionable / mini-diagnóstico / plantilla / guía de 1 página.
- **price**: "Gratis" (literal).

------------------------------------------------------------------
Oferta 4 — CONTINUIDAD (type: "CONTINUIDAD")
------------------------------------------------------------------

- **name**: Nombre de la membresía o comunidad, específico al nicho.
- **includes**: 2-3 cosas CONCRETAS que recibe cada mes.
- **forWhom**: Ex-clientes de la oferta insignia que quieren seguir avanzando.
- **format**: Membresía mensual / cohort trimestral / comunidad con soporte / sesiones grupales mensuales.
- **price**: Entre "€97–€300/mes" (ajusta al nicho).
- **whenToLaunch**: "Cuando tengas 5-10 clientes de la insignia que quieran seguir."

INSTRUCCIÓN FINAL para las 4 ofertas:
1. Cada oferta tiene nombre propio y potente, NO genérico.
2. Los nombres y ejemplos son específicos al nicho recomendado en el paso 2.
3. La insignia es la PROTAGONISTA. Las otras 3 existen para alimentarla.
4. Tono directo, sin relleno, resultado concreto.

====================================================================
PASO 5 — VISIÓN (conservadora y realista)
====================================================================

**vision1Year**: 6-10 líneas con \\n\\n entre ideas.
Empieza con: "Has validado tu oferta insignia con 2-3 clientes beta y has aprendido qué funciona y qué ajustar."
NO menciones que ya gana lo del corporate. NO menciones números de suscriptores.

**vision5Years**: 7-12 líneas con \\n\\n. Visión amplia y SOBRIA.
NO cifras concretas de suscriptores, charlas o seguidores.

====================================================================
REGLAS GENERALES
====================================================================
- Todo en español neutro, tuteo, cercano.
- Específica al nicho recomendado en el paso 2. Nada genérico.
- Sin "empoderar tu propósito" ni jerga vacía.
- Cumple estrictamente el schema JSON.`;

const TOOL_INPUT_SCHEMA = {
  type: "object",
  properties: {
    expertIdentity: { type: "string" },
    nicheEvaluation: {
      type: "object",
      properties: {
        currentNicheLevel: { type: "string" },
        recommendedNiche: { type: "string" },
        why: { type: "string" },
      },
      required: ["currentNicheLevel", "recommendedNiche", "why"],
      additionalProperties: false,
    },
    avatar: {
      type: "object",
      properties: {
        whoIs: { type: "string" },
        pointA: { type: "string" },
        pointB: { type: "string" },
        transformation: { type: "string" },
      },
      required: ["whoIs", "pointA", "pointB", "transformation"],
      additionalProperties: false,
    },
    ecosystem: {
      type: "array",
      minItems: 4,
      maxItems: 4,
      items: {
        type: "object",
        properties: {
          type: { type: "string", enum: ["OFERTA INSIGNIA", "OFERTA DE PROSPECCION", "LEAD MAGNET", "CONTINUIDAD"] },
          name: { type: "string" },
          transformation: { type: "string" },
          includes: { type: "array", items: { type: "string" } },
          pricing: {
            type: "object",
            properties: {
              validation: { type: "string" },
              market: { type: "string" },
              advanced: { type: "string" },
            },
          },
          solves: { type: "string" },
          format: { type: "string" },
          price: { type: "string" },
          whyValuable: { type: "string" },
          forWhom: { type: "string" },
          whenToLaunch: { type: "string" },
        },
        required: ["type", "name"],
        additionalProperties: false,
      },
    },
    vision1Year: { type: "string" },
    vision5Years: { type: "string" },
  },
  required: ["expertIdentity", "nicheEvaluation", "avatar", "ecosystem", "vision1Year", "vision5Years"],
  additionalProperties: false,
};

function buildUserPrompt(data) {
  return `Perfil de la profesional:

- Trayectoria / LinkedIn + qué vende ahora mismo:
${data.linkedinOrTrajectory}

- Sobre el cliente y los nichos (lee con atención — la evaluación de nicho del paso 2 sale de aquí):
${data.avatarHint || "(no aportado — infiérelo del resto)"}

- Dones ocultos: ${data.hiddenGifts || "(no aportado)"}

- Lo que NO quiere seguir haciendo: ${data.notDoingAnymore || "(no aportado)"}

- Lo PRIMERO que vendería en 7 días para generar 1.000€: ${data.firstThingToSell || "(no aportado)"}

Aplica el framework completo:
  1) Posicionamiento aterrizado.
  2) Evaluación del nicho estilo Hormozi + recomendación del más rentable (de entre los que propuso).
  3) Avatar = cliente con MAYOR poder de compra que ella describió.
  4) 1 OFERTA INSIGNIA (protagonista) + 3 SATÉLITE (PROSPECCION, LEAD MAGNET, CONTINUIDAD) en ese orden.
  5) Visión 1 año = validar insignia con clientes beta. Visión 5 años sobria.

Tono Hormozi. Específico al nicho recomendado. Sin inflar. Respeta los saltos de línea dobles.`;
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  if (!process.env.ANTHROPIC_API_KEY) {
    return res.status(500).json({ error: "La IA no está configurada. Contacta al administrador." });
  }

  try {
    const data = req.body;

    // Basic validation
    if (!data.firstName || !data.lastName || !data.email || !data.linkedinOrTrajectory) {
      return res.status(400).json({ error: "Faltan campos obligatorios." });
    }
    if (data.linkedinOrTrajectory.trim().length < 20) {
      return res.status(400).json({ error: "Cuéntame un poco más sobre tu trayectoria (mínimo 20 caracteres)." });
    }

    const userPrompt = buildUserPrompt(data);

    const msg = await anthropic.messages.create({
      model: "claude-sonnet-4-6",
      max_tokens: 4096,
      system: SYSTEM_PROMPT,
      tools: [
        {
          name: "return_career_design",
          description: "Devuelve el diseño de la oferta exponencial: posicionamiento, evaluación del nicho (estilo Hormozi), avatar del cliente con mayor poder de compra, 1 oferta insignia + 3 ofertas satélite, y visión a 1 y 5 años.",
          input_schema: TOOL_INPUT_SCHEMA,
        },
      ],
      tool_choice: { type: "tool", name: "return_career_design" },
      messages: [{ role: "user", content: userPrompt }],
    });

    const toolUse = msg.content.find((b) => b.type === "tool_use");
    if (!toolUse) {
      return res.status(502).json({ error: "La IA no devolvió un diseño. Intenta de nuevo." });
    }

    return res.status(200).json({ design: toolUse.input });
  } catch (e) {
    console.error("disena error:", e);
    if (e?.status === 429) {
      return res.status(429).json({ error: "Estamos recibiendo muchas peticiones — prueba en un minuto." });
    }
    return res.status(500).json({ error: "Algo salió mal generando tu diseño. Inténtalo de nuevo." });
  }
}
