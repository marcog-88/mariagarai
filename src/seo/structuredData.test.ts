import { describe, expect, it } from "vitest";
import { HOME_DESCRIPTION, ROUTE_META } from "./routes";
import { HOME_JSON_LD, jsonLdScript } from "./structuredData";

type Node = Record<string, unknown> & { "@type": string; "@id": string };

describe("home structured data", () => {
  const parsed = JSON.parse(jsonLdScript(HOME_JSON_LD).replace(/^<script[^>]*>|<\/script>$/g, ""));
  const graph = parsed["@graph"] as Node[];
  const byType = (t: string) => graph.find((n) => n["@type"] === t)!;

  it("parses as JSON-LD with Person, Organization and WebSite", () => {
    expect(parsed["@context"]).toBe("https://schema.org");
    expect(graph.map((n) => n["@type"]).sort()).toEqual(["Organization", "Person", "WebSite"]);
  });

  it("links María, La Exponencial and the site by @id", () => {
    const person = byType("Person");
    const org = byType("Organization");
    expect(person.worksFor).toEqual({ "@id": org["@id"] });
    expect(org.founder).toEqual({ "@id": person["@id"] });
    expect(org.url).toBe("https://www.laexponencial.com/");
    expect(byType("WebSite").publisher).toEqual({ "@id": person["@id"] });
    expect(person.sameAs).toContain("https://www.laexponencial.com/");
  });
});

describe("route meta", () => {
  it("keeps the home description under 155 characters", () => {
    expect(ROUTE_META["/"].description).toBe(HOME_DESCRIPTION);
    expect(HOME_DESCRIPTION.length).toBeLessThanOrEqual(155);
  });
});
