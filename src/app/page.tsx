const services = [
  {
    number: "01",
    title: "Mantenimiento",
    text: "Previene fallas y ayuda a mantener el rendimiento de tu sistema.",
    image: "/servicio-mantenimiento.jpg",
  },
  {
    number: "02",
    title: "Reparación",
    text: "Diagnóstico técnico y solución de problemas en equipos de climatización.",
    image: "/servicio-reparacion.jpg",
  },
  {
    number: "03",
    title: "Instalación",
    text: "Instalaciones realizadas de acuerdo con las necesidades de cada espacio.",
    image: "/servicio-instalacion.jpg",
  },
  {
    number: "04",
    title: "Limpieza",
    text: "Limpieza especializada para mejorar las condiciones de funcionamiento.",
    image: "/servicio-limpieza.jpg",
  },
];

const process = [
  {
    number: "01",
    title: "Solicitas",
    text: "Cuéntanos qué necesita tu equipo.",
  },
  {
    number: "02",
    title: "Evaluamos",
    text: "Realizamos una revisión técnica.",
  },
  {
    number: "03",
    title: "Proponemos",
    text: "Te explicamos la solución adecuada.",
  },
  {
    number: "04",
    title: "Solucionamos",
    text: "Realizamos el trabajo y verificamos el funcionamiento.",
  },
];

const gallery = [
  {
    image: "/trabajo-01.jpg",
    title: "Servicio técnico",
  },
  {
    image: "/trabajo-02.jpg",
    title: "Mantenimiento",
  },
  {
    image: "/trabajo-03.jpg",
    title: "Instalación",
  },
];

export default function Home() {
  return (
    <main>

      {/* ================= NAVBAR ================= */}

      <header className="navbar">

        <a href="#inicio" className="brand">

          <div className="logo-placeholder">
            N
          </div>

          <div className="brand-text">
            <strong>NAKAMURA</strong>
            <span>AIRES ACONDICIONADOS</span>
          </div>

        </a>

        <nav>
          <a href="#inicio">Inicio</a>
          <a href="#nosotros">Nosotros</a>
          <a href="#servicios">Servicios</a>
          <a href="#proceso">Proceso</a>
          <a href="#trabajos">Trabajos</a>
          <a href="#contacto">Contacto</a>
        </nav>

        <a href="#contacto" className="nav-contact">
          Solicitar servicio
        </a>

      </header>


      {/* ================= HERO ================= */}

      <section id="inicio" className="hero">

        <div className="hero-background" />

        <div className="hero-content">

          <div className="hero-copy">

            <p className="eyebrow">
              NAKAMURA AIRES ACONDICIONADOS
            </p>

            <h1>
              Respira
              <span>tranquilidad.</span>
            </h1>

            <p className="hero-subtitle">
              Aire fresco, confort total.
            </p>

            <p className="hero-description">
              Soluciones profesionales en instalación, mantenimiento y
              reparación de sistemas de aire acondicionado.
            </p>

            <div className="hero-buttons">

              <a href="#contacto" className="button primary">
                Solicitar servicio
                <span>→</span>
              </a>

              <a href="#servicios" className="button outline">
                Ver servicios
              </a>

            </div>

          </div>


          <div className="hero-image">

            <div className="image-placeholder">

              <span>FOTOGRAFÍA PRINCIPAL</span>

              <small>
                Aquí colocaremos la imagen de referencia
              </small>

            </div>

            <div className="hero-badge">
              <strong>Servicio</strong>
              <span>profesional</span>
            </div>

          </div>

        </div>


        <div className="hero-bottom">

          <span>CLIMATIZACIÓN</span>

          <div />

          <span>CONFORT · EFICIENCIA · CONFIANZA</span>

        </div>

      </section>


      {/* ================= INTRO ================= */}

      <section id="nosotros" className="intro section">

        <div className="section-tag">
          01 — NAKAMURA
        </div>

        <div className="intro-grid">

          <div>

            <p className="eyebrow blue">
              SOLUCIONES EN CLIMATIZACIÓN
            </p>

            <h2>
              El confort de tu espacio
              <span> comienza aquí.</span>
            </h2>

          </div>

          <div className="intro-text">

            <p>
              En Nakamura Aires Acondicionados trabajamos para ofrecer
              soluciones técnicas confiables que permitan disfrutar de
              ambientes cómodos, frescos y agradables.
            </p>

            <p>
              Nuestro servicio combina atención personalizada,
              diagnóstico técnico y trabajo responsable.
            </p>

            <a href="#contacto" className="arrow-link">
              Solicitar atención
              <span>→</span>
            </a>

          </div>

        </div>


        <div className="benefits">

          <div>
            <span>01</span>
            <strong>Atención profesional</strong>
            <p>Servicio orientado a las necesidades de cada cliente.</p>
          </div>

          <div>
            <span>02</span>
            <strong>Diagnóstico técnico</strong>
            <p>Identificamos el problema antes de intervenir.</p>
          </div>

          <div>
            <span>03</span>
            <strong>Trabajo responsable</strong>
            <p>Buscamos soluciones eficientes y duraderas.</p>
          </div>

          <div>
            <span>04</span>
            <strong>Servicio confiable</strong>
            <p>Acompañamiento desde la evaluación hasta la solución.</p>
          </div>

        </div>

      </section>


      {/* ================= SERVICES ================= */}

      <section id="servicios" className="services section">

        <div className="section-tag">
          02 — SERVICIOS
        </div>

        <div className="services-heading">

          <div>

            <p className="eyebrow blue">
              LO QUE HACEMOS
            </p>

            <h2>
              Soluciones para
              <span> cada necesidad.</span>
            </h2>

          </div>

          <p>
            Desde el mantenimiento preventivo hasta la reparación e
            instalación de sistemas de climatización.
          </p>

        </div>


        <div className="services-grid">

          {services.map((service) => (

            <article className="service-card" key={service.number}>

              <div className="service-image">

                <img
                  src={service.image}
                  alt={service.title}
                />

                <span>{service.number}</span>

              </div>

              <div className="service-info">

                <h3>{service.title}</h3>

                <p>{service.text}</p>

                <a href="#contacto">
                  Solicitar servicio →
                </a>

              </div>

            </article>

          ))}

        </div>

      </section>


      {/* ================= PROCESS ================= */}

      <section id="proceso" className="process section">

        <div className="section-tag">
          03 — NUESTRO PROCESO
        </div>

        <div className="process-heading">

          <div>

            <p className="eyebrow blue">
              SIMPLE Y TRANSPARENTE
            </p>

            <h2>
              Del problema
              <span> a la solución.</span>
            </h2>

          </div>

          <p>
            Queremos que sepas qué hacemos en cada etapa del servicio.
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


      {/* ================= GALLERY ================= */}

      <section id="trabajos" className="gallery section">

        <div className="section-tag">
          04 — NUESTROS TRABAJOS
        </div>

        <div className="gallery-heading">

          <div>

            <p className="eyebrow blue">
              TRABAJOS REALIZADOS
            </p>

            <h2>
              Conoce parte de
              <span> nuestro trabajo.</span>
            </h2>

          </div>

          <p>
            Aquí mostraremos fotografías reales de nuestros servicios e
            instalaciones.
          </p>

        </div>


        <div className="gallery-grid">

          {gallery.map((item) => (

            <div className="gallery-card" key={item.image}>

              <img
                src={item.image}
                alt={item.title}
              />

              <div>
                <span>{item.title}</span>
                <strong>↗</strong>
              </div>

            </div>

          ))}

        </div>

      </section>


      {/* ================= ASSOCIATED COMPANIES ================= */}

      <section className="partners section">

        <div className="section-tag">
          05 — EMPRESAS ASOCIADAS
        </div>

        <div className="partners-heading">

          <p className="eyebrow blue">
            NUESTROS ALIADOS
          </p>

          <h2>
            Empresas que
            <span> confían en nosotros.</span>
          </h2>

          <p>
            Próximamente mostraremos aquí las empresas asociadas y aliados
            estratégicos de Nakamura.
          </p>

        </div>


        <div className="partners-list">

          <div>LOGO EMPRESA 01</div>
          <div>LOGO EMPRESA 02</div>
          <div>LOGO EMPRESA 03</div>
          <div>LOGO EMPRESA 04</div>

        </div>

      </section>


      {/* ================= CONTACT ================= */}

      <section id="contacto" className="contact">

        <div className="contact-content">

          <p className="eyebrow">
            CONTACTO
          </p>

          <h2>
            ¿Necesitas
            <span> asistencia?</span>
          </h2>

          <p>
            Estamos listos para ayudarte con el mantenimiento, reparación o
            instalación de tu sistema de aire acondicionado.
          </p>

          <div className="contact-buttons">

            <a href="https://wa.me/" className="button primary">
              WhatsApp
              <span>→</span>
            </a>

            <a href="tel:" className="button outline">
              Llamar
            </a>

          </div>

        </div>


        <div className="contact-info">

          <div>
            <span>WHATSAPP</span>
            <strong>Por agregar</strong>
          </div>

          <div>
            <span>TELÉFONO</span>
            <strong>Por agregar</strong>
          </div>

          <div>
            <span>HORARIO</span>
            <strong>Por agregar</strong>
          </div>

          <div>
            <span>UBICACIÓN</span>
            <strong>Guayaquil, Ecuador</strong>
          </div>

          <div>
            <span>REDES SOCIALES</span>
            <strong>Por agregar</strong>
          </div>

        </div>

      </section>


      {/* ================= FOOTER ================= */}

      <footer>

        <div className="footer-brand">

          <div className="logo-placeholder">
            N
          </div>

          <div>
            <strong>NAKAMURA</strong>
            <span>AIRES ACONDICIONADOS</span>
          </div>

        </div>

        <p>
          Aire fresco, confort total.
        </p>

        <span>
          © {new Date().getFullYear()} Nakamura
        </span>

      </footer>

    </main>
  );
}