import { LegalLayout } from "@/components/legal/LegalLayout";

const TermsOfService = () => (
  <LegalLayout title="Términos y Condiciones" updated="28 de abril de 2026">
    <section>
      <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">1. Aceptación</h2>
      <p>
        El acceso y uso de mariagarai.com implica la aceptación plena de los presentes Términos y
        Condiciones. Si no estás de acuerdo con alguno de ellos, te rogamos no utilices el sitio.
      </p>
    </section>

    <section>
      <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">2. Servicios ofrecidos</h2>
      <p>
        A través de este sitio web, María Garaí ofrece contenido editorial, suscripción a una
        newsletter gratuita, y la posibilidad de contratar servicios de coaching y formación
        profesional. Las condiciones específicas de cada servicio se comunicarán antes de la
        contratación.
      </p>
    </section>

    <section>
      <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">3. Obligaciones del usuario</h2>
      <ul className="list-disc pl-6 space-y-1">
        <li>Facilitar información veraz al suscribirte o contactarnos.</li>
        <li>No utilizar el sitio con fines ilícitos o contrarios a la buena fe.</li>
        <li>Respetar los derechos de propiedad intelectual del contenido.</li>
      </ul>
    </section>

    <section>
      <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">4. Propiedad intelectual</h2>
      <p>
        Todos los contenidos publicados (textos, imágenes, vídeos, marca y diseño) son propiedad de
        María Garaí. Queda prohibida su reproducción, distribución o transformación sin autorización
        expresa por escrito.
      </p>
    </section>

    <section>
      <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">5. Limitación de responsabilidad</h2>
      <p>
        El contenido del sitio tiene carácter informativo y orientativo. María Garaí no garantiza
        resultados específicos derivados de la aplicación de los consejos publicados ni se
        responsabiliza de decisiones tomadas en base a los mismos.
      </p>
    </section>

    <section>
      <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">6. Modificaciones</h2>
      <p>
        Nos reservamos el derecho a modificar estos términos en cualquier momento. La versión vigente
        será siempre la publicada en esta página.
      </p>
    </section>

    <section>
      <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">7. Ley aplicable</h2>
      <p>
        Estos términos se rigen por la legislación española. Cualquier controversia se someterá a
        los Juzgados y Tribunales del domicilio de la titular, salvo que la normativa de consumo
        disponga otra cosa.
      </p>
    </section>
  </LegalLayout>
);

export default TermsOfService;
