import { LegalLayout } from "@/components/legal/LegalLayout";

const PrivacyPolicy = () => (
  <LegalLayout title="Política de Privacidad" updated="24 de octubre de 2026">
    <section>
      <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">1. Responsable del tratamiento</h2>
      <p>
        El responsable del tratamiento de los datos personales recogidos en este sitio web es
        <strong> María Garaí</strong>, con NIF [NIF] y domicilio en [dirección], España. Email de
        contacto: <a href="mailto:hola@mariagarai.com" className="underline underline-offset-2 hover:text-foreground">hola@mariagarai.com</a>.
      </p>
    </section>

    <section>
      <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">2. Datos que recogemos</h2>
      <ul className="list-disc pl-6 space-y-1">
        <li>Dirección de correo electrónico (al suscribirte a la newsletter a través de Substack).</li>
        <li>Nombre, teléfono y mensaje (si nos escribes por email o por WhatsApp).</li>
      </ul>
    </section>

    <section>
      <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">3. Finalidad y base legal</h2>
      <p>
        Tratamos tus datos para enviarte la newsletter Hazte Grande y responder a tus consultas. La base legal es tu <strong>consentimiento expreso</strong>
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
        oposición, limitación y portabilidad escribiendo a <a href="mailto:hola@mariagarai.com" className="underline underline-offset-2 hover:text-foreground">hola@mariagarai.com</a>. También tienes
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
