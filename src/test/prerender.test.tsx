import { act } from "react";
import { hydrateRoot } from "react-dom/client";
import { afterEach, describe, expect, it, vi } from "vitest";
import {
  UNSAFE_DataRouterContext,
  UNSAFE_DataRouterStateContext,
  UNSAFE_LocationContext,
  UNSAFE_NavigationContext,
  UNSAFE_RouteContext,
} from "react-router-dom";
import App from "@/App";
import { render, routes } from "@/entry-server";

// The build prerenders every route (scripts/prerender.mjs) and src/main.tsx
// hydrates it. This renders each route the same way and hydrates it in jsdom:
// the markup must carry the page's h1, and React must not report a mismatch.
class NoopObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
  takeRecords() {
    return [];
  }
}
vi.stubGlobal("IntersectionObserver", NoopObserver);

// Test-only artifact: server and client React share one JS realm here, and
// React 18's streaming renderer leaves the router contexts' current values set
// after a suspended (lazy) route resolves, which makes the client think it is
// already inside a <Router>. The real build renders in its own Node process,
// so reset them to their defaults between the two halves.
type Ctx = { _currentValue: unknown; _currentValue2: unknown };
const ROUTER_CONTEXTS = [
  UNSAFE_DataRouterContext,
  UNSAFE_DataRouterStateContext,
  UNSAFE_LocationContext,
  UNSAFE_NavigationContext,
  UNSAFE_RouteContext,
] as unknown as Ctx[];
const DEFAULTS = ROUTER_CONTEXTS.map((c) => [c._currentValue, c._currentValue2] as const);
const resetRouterContexts = () =>
  ROUTER_CONTEXTS.forEach((c, i) => {
    [c._currentValue, c._currentValue2] = DEFAULTS[i];
  });

const HYDRATION = /hydrat|did not match|server html|server rendered|Expected server/i;

describe("prerender + hydration", () => {
  afterEach(() => {
    document.body.innerHTML = "";
    vi.restoreAllMocks();
  });

  for (const { url, file } of routes) {
    it(`${file} has its h1 and hydrates cleanly`, async () => {
      const html = await render(url);
      expect(html).toMatch(/<h1[\s>]/);
      resetRouterContexts();

      window.history.replaceState(null, "", url);
      document.body.innerHTML = `<div id="root">${html}</div>`;
      const errors: string[] = [];
      vi.spyOn(console, "error").mockImplementation((...args) => errors.push(args.map(String).join(" ")));

      const root = document.getElementById("root")!;
      let app: ReturnType<typeof hydrateRoot> | undefined;
      await act(async () => {
        app = hydrateRoot(root, <App />, { onRecoverableError: (e) => errors.push(`recoverable: ${String(e)}`) });
      });
      // Lazy route chunks resolve after the first pass; let them hydrate too.
      await act(async () => {
        await new Promise((r) => setTimeout(r, 50));
      });

      expect(errors.filter((e) => HYDRATION.test(e))).toEqual([]);
      expect(root.querySelector("h1")).not.toBeNull();
      act(() => app?.unmount());
    });
  }
});
