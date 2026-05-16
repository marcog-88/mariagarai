import { LegalLayout } from "@/components/legal/LegalLayout";

const Legal = () => (
  <LegalLayout title="Aviso Legal" updated="28 de abril de 2026">
    <section>
      <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">1. Datos identificativos</h2>
      <p>
        En cumplimiento de lo establecido en la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad
        de la Información y de Comercio Electrónico (LSSI-CE), se informa de los siguientes datos:
      </p>
      <ul className="list-disc pl-6 space-y-1 mt-3">
        <li><strong>Titular:</strong> María Garaí [Apellido]</li>
        <li><strong>NIF:</strong> [Número de identificación fiscal]</li>
        <li><strong>Domicilio:</strong> [Dirección postal], España</li>
        <li><strong>Email de contacto:</strong> [hola@mariagarai.com]</li>
        <li><strong>Sitio web:</strong> mariagarai.com</li>
      </ul>
    </section>

    <section>
      <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">2. Objeto</h2>
      <p>
        El presente sitio web tiene por objeto ofrecer información sobre los servicios de coaching,
        formación y contenido editorial prestados por la titular, así como facilitar la suscripción a
        la newsletter Carreras Modernas.
      </p>
    </section>

    <section>
      <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">3. Condiciones de uso</h2>
      <p>
        El acceso y uso de este sitio web atribuye la condición de Usuario, e implica la aceptación
        plena de las condiciones recogidas en este Aviso Legal. El Usuario se compromete a hacer un
        uso adecuado de los contenidos y servicios.
      </p>
    </section>

    <section>
      <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">4. Propiedad intelectual</h2>
      <p>
        Todos los contenidos del sitio web (textos, imágenes, diseño, código, marca) son propiedad de
        María Garaí o de sus legítimos titulares y están protegidos por la normativa de propiedad
        intelectual e industrial. Queda prohibida su reproducción sin autorización expresa.
      </p>
    </section>

    <section>
      <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">5. Responsabilidad</h2>
      <p>
        La titular no se hace responsable de los daños y perjuicios derivados del uso de la
        información contenida en este sitio web, ni de los contenidos de terceros enlazados.
      </p>
    </section>

    <section>
      <h2 className="text-xl font-semibold text-foreground mt-8 mb-3">6. Legislación aplicable</h2>
      <p>
        Las presentes condiciones se rigen por la legislación española. Para la resolución de
        cualquier controversia, las partes se someten a los Juzgados y Tribunales del domicilio de la
        titular.
      </p>
    </section>
  </LegalLayout>
);

export default Legal;
