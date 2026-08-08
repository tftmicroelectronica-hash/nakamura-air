const services = [
  {
    number: "01",
    title: "Mantenimiento preventivo",
    text: "Mantenemos tu equipo en condiciones óptimas para mejorar su rendimiento y prolongar su vida útil.",
  },
  {
    number: "02",
    title: "Mantenimiento correctivo",
    text: "Detectamos la causa del problema y realizamos las intervenciones necesarias para recuperar el funcionamiento.",
  },
  {
    number: "03",
    title: "Reparación de equipos",
    text: "Diagnóstico y reparación profesional para diferentes tipos de sistemas de climatización.",
  },
  {
    number: "04",
    title: "Instalación",
    text: "Instalación técnica considerando las condiciones del espacio y las necesidades del sistema.",
  },
  {
    number: "05",
    title: "Limpieza y desinfección",
    text: "Limpieza especializada para mantener el equipo en mejores condiciones de funcionamiento.",
  },
  {
    number: "06",
    title: "Diagnóstico técnico",
    text: "Evaluamos el equipo antes de intervenir para identificar la causa real de la falla.",
  },
];

const process = [
  {
    number: "01",
    title: "Solicitas el servicio",
    text: "Nos cuentas qué problema presenta tu equipo.",
  },
  {
    number: "02",
    title: "Evaluamos",
    text: "Realizamos una revisión técnica del sistema.",
  },
  {
    number: "03",
    title: "Identificamos",
    text: "Determinamos la causa del problema.",
  },
  {
    number: "04",
    title: "Solucionamos",
    text: "Ejecutamos el trabajo necesario.",
  },
];

export default function Home() {
  return (
    <main>
      {/* NAVBAR */}
      <header className="navbar">
        <a href="#" className="brand">
          <span className="brand-mark">N</span>
          <span>
            <strong>NAKAMURA</strong>
            <small>AIRES ACONDICIONADOS</small>
          </span>
        </a>

        <nav>
          <a href="#inicio">Inicio</a>
          <a href="#nosotros">Nosotros</a>
          <a href="#servicios">Servicios</a>
          <a href="#proceso">Proceso</a>
          <a href="#contacto">Contacto</a>
        </nav>

        <a href="#contacto" className="nav-button">
          Solicitar servicio
        </a>
      </header>

      {/* HERO */}
      <section id="inicio" className="hero">
        <div className="hero-overlay" />

        <div className="hero-content">
          <p className="eyebrow">SERVICIO TÉCNICO ESPECIALIZADO</p>

          <h1>
            Respira
            <span> tranquilidad.</span>
          </h1>

          <p className="hero-text">
            Instalación, mantenimiento y reparación profesional de sistemas
            de aire acondicionado.
          </p>

          <div className="hero-actions">
            <a href="#contacto" className="primary-button">
              Solicitar servicio
              <span>→</span>
            </a>

            <a href="#servicios" className="secondary-button">
              Ver servicios
            </a>
          </div>

          <div className="hero-trust">
            <div>
              <strong>Servicio</strong>
              <span>Profesional</span>
            </div>

            <div>
              <strong>Atención</strong>
              <span>Personalizada</span>
            </div>

            <div>
              <strong>Diagnóstico</strong>
              <span>Técnico</span>
            </div>
          </div>
        </div>

        <div className="hero-scroll">
          <span>DESPLAZAR</span>
          <div />
        </div>
      </section>

      {/* NOSOTROS */}
      <section id="nosotros" className="about section">
        <div className="section-label">01 — NOSOTROS</div>

        <div className="about-grid">
          <div>
            <p className="eyebrow dark">SOLUCIONES EN CLIMATIZACIÓN</p>

            <h2>
              Tecnología que se siente.
              <span> Confianza que permanece.</span>
            </h2>
          </div>

          <div className="about-copy">
            <p>
              En Nakamura Aires Acondicionados ofrecemos soluciones
              profesionales para el mantenimiento, reparación e instalación de
              sistemas de climatización.
            </p>

            <p>
              Nuestro objetivo es que cada servicio entregue seguridad,
              eficiencia y tranquilidad a nuestros clientes.
            </p>

            <a href="#contacto" className="text-link">
              Conoce nuestra atención <span>→</span>
            </a>
          </div>
        </div>

        <div className="values">
          <div className="value">
            <span>01</span>
            <h3>Profesionalismo</h3>
            <p>Trabajamos con criterio técnico y responsabilidad.</p>
          </div>

          <div className="value">
            <span>02</span>
            <h3>Confianza</h3>
            <p>Transparencia y atención clara en cada servicio.</p>
          </div>

          <div className="value">
            <span>03</span>
            <h3>Tecnología</h3>
            <p>Herramientas y procesos orientados a resultados.</p>
          </div>

          <div className="value">
            <span>04</span>
            <h3>Compromiso</h3>
            <p>Buscamos soluciones pensadas para durar.</p>
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section id="servicios" className="services section dark-section">
        <div className="section-label light">02 — SERVICIOS</div>

        <div className="section-heading">
          <div>
            <p className="eyebrow">LO QUE HACEMOS</p>
            <h2>
              Soluciones para que
              <span> vuelvas a respirar.</span>
            </h2>
          </div>

          <p>
            Atendemos las necesidades técnicas de tu sistema de aire
            acondicionado desde el diagnóstico hasta la solución.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <article className="service-card" key={service.number}>
              <span className="service-number">{service.number}</span>

              <div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </div>

              <span className="service-arrow">↗</span>
            </article>
          ))}
        </div>
      </section>

      {/* PROCESO */}
      <section id="proceso" className="process section">
        <div className="section-label">03 — NUESTRO PROCESO</div>

        <div className="section-heading">
          <div>
            <p className="eyebrow dark">ASÍ TRABAJAMOS</p>

            <h2>
              De la evaluación
              <span> a la solución.</span>
            </h2>
          </div>

          <p>
            Un proceso ordenado nos permite entender el problema y ofrecer la
            solución adecuada para cada equipo.
          </p>
        </div>

        <div className="process-grid">
          {process.map((item) => (
            <div className="process-item" key={item.number}>
              <span>{item.number}</span>

              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section id="contacto" className="cta">
        <div className="cta-content">
          <p className="eyebrow">¿NECESITAS ASISTENCIA?</p>

          <h2>
            Tu comodidad
            <span> no puede esperar.</span>
          </h2>

          <p>
            Solicita una visita técnica y déjanos ayudarte a encontrar la
            solución adecuada para tu equipo.
          </p>

          <div className="cta-actions">
            <a href="https://wa.me/" className="primary-button">
              Contactar por WhatsApp
              <span>→</span>
            </a>

            <a href="tel:" className="secondary-button">
              Llamar ahora
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-brand">
          <span className="brand-mark">N</span>

          <div>
            <strong>NAKAMURA</strong>
            <small>AIRES ACONDICIONADOS</small>
          </div>
        </div>

        <p>Respira tranquilidad.</p>

        <span>© {new Date().getFullYear()} Nakamura. Todos los derechos reservados.</span>
      </footer>
    </main>
  );
}