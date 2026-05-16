import { LegalLayout } from "@/components/legal/LegalLayout";

const PrivacyPolicy = () => (
  <LegalLayout title="Política de Privacidad" updated="28 de abril de 2026">
    <section>
      <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">1. Responsable del tratamiento</h2>
      <p>
        El responsable del tratamiento de los datos personales recogidos en este sitio web es
        <strong> María Garaí</strong>, con NIF [NIF] y domicilio en [dirección], España. Email de
        contacto: [hola@mariagarai.com].
      </p>
    </section>

    <section>
      <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">2. Datos que recogemos</h2>
      <ul className="list-disc pl-6 space-y-1">
        <li>Dirección de correo electrónico (al suscribirte a la newsletter).</li>
        <li>Nombre y mensaje (si nos contactas a través del formulario).</li>
        <li>Datos de navegación anónimos (a través de cookies analíticas, si las aceptas).</li>
      </ul>
    </section>

    <section>
      <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">3. Finalidad y base legal</h2>
      <p>
        Tratamos tus datos para enviarte la newsletter Carreras Modernas, responder a tus consultas y
        analizar el uso del sitio web. La base legal es tu <strong>consentimiento expreso</strong>
        (art. 6.1.a RGPD), que puedes retirar en cualquier momento.
      </p>
    </section>

    <section>
      <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">4. Conservación de los datos</h2>
      <p>
        Conservamos tus datos mientras mantengas la suscripción activa o no solicites su supresión.
        Los datos del formulario de contacto se conservan durante el tiempo necesario para gestionar
        tu solicitud.
      </p>
    </section>

    <section>
      <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">5. Destinatarios y encargados</h2>
      <p>
        Para la gestión de la newsletter utilizamos <strong>Substack Inc.</strong> (proveedor con
        sede en EE. UU., adherido a las cláusulas contractuales tipo de la UE). El alojamiento web
        se realiza a través de Lovable / Vercel. No cedemos tus datos a terceros salvo obligación
        legal.
      </p>
    </section>

    <section>
      <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">6. Tus derechos</h2>
      <p>
        Puedes ejercer en cualquier momento tus derechos de acceso, rectificación, supresión,
        oposición, limitación y portabilidad escribiendo a [hola@mariagarai.com]. También tienes
        derecho a presentar una reclamación ante la Agencia Española de Protección de Datos
        (www.aepd.es).
      </p>
    </section>

    <section>
      <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">7. Seguridad</h2>
      <p>
        Aplicamos medidas técnicas y organizativas razonables para proteger tus datos frente a
        accesos no autorizados, pérdida o alteración.
      </p>
    </section>
  </LegalLayout>
);

export default PrivacyPolicy;
