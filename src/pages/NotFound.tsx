import { Link } from "react-router-dom";

// Unknown and retired paths. Vercel serves them 404.html (HTTP 404 +
// noindex, generated from src/seo/routes.ts); RouteMeta keeps the noindex on
// client-side navigation.
const NotFound = () => (
  <main className="flex min-h-screen items-center justify-center bg-[#f5f6f8] px-6 text-[#0e1014]">
    <div className="max-w-md text-center">
      <p className="mb-3 text-[13px] font-medium uppercase tracking-[0.2em] text-[#5b3fd6]">Error 404</p>
      <h1 className="mb-4 font-serif text-4xl">Esta página no existe</h1>
      <p className="mb-8 text-[#4a4e58]">Puede que el enlace sea antiguo o que la página se haya movido.</p>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <Link
          to="/"
          className="rounded-full bg-[#0b0c0f] px-5 py-3 text-sm font-medium text-white transition-opacity hover:opacity-85 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9378fe]"
        >
          Volver al inicio
        </Link>
        <a
          href="https://www.laexponencial.com/"
          className="rounded-full border border-[#e0e2e7] bg-white px-5 py-3 text-sm font-medium transition-colors hover:border-[#9378fe] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9378fe]"
        >
          Ir a Exponencial
        </a>
      </div>
    </div>
  </main>
);

export default NotFound;
