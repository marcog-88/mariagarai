import { Link } from "react-router-dom";

// Unknown and retired paths land here. Vercel serves them dist/404.html
// (HTTP 404 + noindex, written by the build from src/seo/routes.ts);
// RouteMeta keeps the title and noindex on client-side navigation.
const NotFound = () => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f9f9f7] px-6 text-[#0c0d0e]">
      <div className="max-w-xl text-center">
        <h1 className="m-0 font-serif text-[44px] font-normal leading-[1.05] tracking-[-0.02em] sm:text-[64px]">
          Esta página no existe
        </h1>
        <p className="mb-0 mt-5 text-[17px] leading-[1.6] text-[#0c0d0e]/65">Puede que el enlace haya cambiado.</p>
        <Link
          to="/"
          className="mt-9 inline-flex min-h-[44px] items-center justify-center gap-2 rounded-xl bg-[#9378fe] px-6 py-3.5 text-[15px] font-bold text-white no-underline transition-colors hover:bg-[#0c0d0e]"
        >
          Volver al inicio <span aria-hidden>→</span>
        </Link>
      </div>
    </main>
  );
};

export default NotFound;
