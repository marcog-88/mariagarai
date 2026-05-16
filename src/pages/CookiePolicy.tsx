import { LegalLayout } from "@/components/legal/LegalLayout";

const CookiePolicy = () => (
  <LegalLayout title="Política de Cookies" updated="28 de abril de 2026">
    <section>
      <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">1. ¿Qué son las cookies?</h2>
      <p>
        Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas
        un sitio web. Permiten reconocerte, recordar tus preferencias y analizar el uso del sitio.
      </p>
    </section>

    <section>
      <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">2. Cookies que utilizamos</h2>
      <p>Actualmente este sitio utiliza las siguientes categorías de cookies:</p>
      <ul className="list-disc pl-6 space-y-2 mt-3">
        <li>
          <strong>Técnicas (necesarias):</strong> imprescindibles para el funcionamiento del sitio.
          No requieren consentimiento.
        </li>
        <li>
          <strong>Analíticas:</strong> nos ayudan a entender cómo se usa el sitio de forma agregada
          y anónima. Solo se activan si das tu consentimiento.
        </li>
        <li>
          <strong>De terceros:</strong> al integrar contenido de Substack (newsletter), pueden
          instalarse cookies del proveedor según su propia política.
        </li>
      </ul>
    </section>

    <section>
      <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">3. Gestión de cookies</h2>
      <p>
        Puedes aceptar, rechazar o configurar el uso de cookies en cualquier momento desde el banner
        de consentimiento o desde la configuración de tu navegador. La desactivación de algunas
        cookies puede afectar a la experiencia de navegación.
      </p>
      <p className="mt-3">Enlaces de configuración de los principales navegadores:</p>
      <ul className="list-disc pl-6 space-y-1 mt-2">
        <li>Chrome: support.google.com/chrome/answer/95647</li>
        <li>Safari: support.apple.com/es-es/guide/safari/sfri11471</li>
        <li>Firefox: support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies</li>
        <li>Edge: support.microsoft.com/es-es/microsoft-edge</li>
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
