import { LegalLayout } from "@/components/legal/LegalLayout";

const CookiePolicy = () => (
  <LegalLayout title="Política de Cookies" updated="24 de octubre de 2026">
    <section>
      <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">1. ¿Qué son las cookies?</h2>
      <p>
        Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas
        un sitio web. Permiten reconocerte, recordar tus preferencias y analizar el uso del sitio.
      </p>
    </section>

    <section>
      <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">2. Cookies que utilizamos</h2>
      <p>Este sitio no usa cookies propias de análisis ni de publicidad. Solo intervienen:</p>
      <ul className="list-disc pl-6 space-y-2 mt-3">
        <li>
          <strong>Técnicas (necesarias):</strong> las imprescindibles para que el sitio funcione.
          No requieren consentimiento.
        </li>
        <li>
          <strong>De terceros:</strong> el formulario de la newsletter está alojado en Substack.
          Al cargarlo, Substack puede instalar sus propias cookies según su{" "}
          <a href="https://substack.com/privacy" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-foreground">política de privacidad</a>.
        </li>
      </ul>
    </section>

    <section>
      <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">3. Gestión de cookies</h2>
      <p>
        Puedes bloquear o borrar las cookies desde la configuración de tu navegador. Si bloqueas las
        de Substack, el formulario de la newsletter puede no funcionar.
      </p>
      <p className="mt-3">Enlaces de configuración de los principales navegadores:</p>
      <ul className="list-disc pl-6 space-y-1 mt-2">
        <li>Chrome: <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-foreground">support.google.com/chrome/answer/95647</a></li>
        <li>Safari: <a href="https://support.apple.com/es-es/guide/safari/sfri11471" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-foreground">support.apple.com/es-es/guide/safari/sfri11471</a></li>
        <li>Firefox: <a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-foreground">support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies</a></li>
        <li>Edge: <a href="https://support.microsoft.com/es-es/microsoft-edge" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-foreground">support.microsoft.com/es-es/microsoft-edge</a></li>
      </ul>
    </section>

    <section>
      <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">4. Actualizaciones</h2>
      <p>
        Esta política puede actualizarse para reflejar cambios en las cookies utilizadas o en la
        normativa aplicable. Te recomendamos revisarla periódicamente.
      </p>
    </section>
  </LegalLayout>
);

export default CookiePolicy;
