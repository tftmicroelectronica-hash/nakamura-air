const services = [
  { number: "01", title: "Mantenimiento preventivo", text: "Cuida tu equipo, mejora su rendimiento y ayuda a prevenir fallas inesperadas.", image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=900&q=85" },
  { number: "02", title: "Reparación técnica", text: "Diagnóstico y reparación de equipos de climatización con atención responsable.", image: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=900&q=85" },
  { number: "03", title: "Instalación", text: "Instalaciones pensadas para tu espacio, necesidades y comodidad.", image: "https://images.unsplash.com/photo-1631545806609-8b8e6b2f1c1f?auto=format&fit=crop&w=900&q=85" },
  { number: "04", title: "Limpieza especializada", text: "Limpieza de componentes para mantener un ambiente fresco y un equipo en buenas condiciones.", image: "https://images.unsplash.com/photo-1631545806609-8b8e6b2f1c1f?auto=format&fit=crop&w=900&q=85" },
];

const process = [
  { number: "01", title: "Nos contactas", text: "Cuéntanos qué sucede con tu equipo." },
  { number: "02", title: "Inspeccionamos", text: "Revisamos y determinamos la causa." },
  { number: "03", title: "Te asesoramos", text: "Explicamos la solución y el trabajo recomendado." },
  { number: "04", title: "Lo solucionamos", text: "Realizamos el servicio y comprobamos su funcionamiento." },
];

const gallery = [
  { image: "https://images.unsplash.com/photo-1631545806609-8b8e6b2f1c1f?auto=format&fit=crop&w=1000&q=85", title: "Instalación y climatización" },
  { image: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=800&q=85", title: "Servicio técnico" },
  { image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=85", title: "Mantenimiento" },
];

export default function Home() {
  return (
    <main>
      <header className="navbar">
        <a href="#inicio" className="brand" aria-label="Nakamura Aire, inicio">
          <div className="logo-mark"><span>N</span><i /></div>
          <div className="brand-text"><strong>NAKAMURA</strong><span>AIRE · CLIMATIZACIÓN</span></div>
        </a>
        <nav aria-label="Navegación principal">
          <a href="#nosotros">Nosotros</a><a href="#servicios">Servicios</a><a href="#proceso">Proceso</a><a href="#trabajos">Trabajos</a><a href="#contacto">Contacto</a>
        </nav>
        <a href="#contacto" className="nav-contact">Solicitar atención <span>↗</span></a>
        <details className="mobile-menu">
          <summary aria-label="Abrir menú"><span></span><span></span><span></span></summary>
          <nav aria-label="Menú móvil">
            <a href="#nosotros">Nosotros</a><a href="#servicios">Servicios</a><a href="#proceso">Proceso</a><a href="#trabajos">Trabajos</a><a href="#contacto">Contacto</a>
          </nav>
        </details>
      </header>

      <section id="inicio" className="hero">
        <div className="hero-image" aria-hidden="true"><img src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=1800&q=90" alt="" /></div>
        <div className="hero-overlay" />
        <div className="hero-content">
          <div className="hero-copy">
            <div className="eyebrow"><span className="eyebrow-dot" /> CONFORT PARA TU ESPACIO</div>
            <h1>Respira mejor.<br/><span>Vive cómodo.</span></h1>
            <p className="hero-subtitle">Climatización con respaldo técnico.</p>
            <p className="hero-description">Instalación, mantenimiento y reparación de aire acondicionado. Soluciones profesionales para que disfrutes de un ambiente fresco y confortable.</p>
            <div className="hero-buttons"><a href="#contacto" className="button primary">Solicita tu servicio <span>↗</span></a><a href="#servicios" className="button outline">Conoce lo que hacemos</a></div>
            <div className="hero-trust"><span>✓ Atención personalizada</span><span>✓ Diagnóstico técnico</span><span>✓ Trabajo responsable</span></div>
          </div>
        </div>
        <div className="hero-side-note">NAKAMURA AIRE <span>·</span> CLIMATIZACIÓN</div>
      </section>

      <section id="nosotros" className="intro section">
        <div className="section-kicker">01 / QUIÉNES SOMOS</div>
        <div className="intro-grid">
          <div><p className="eyebrow blue">SERVICIO Y CONFIANZA</p><h2>El clima ideal.<br/><span>La atención que mereces.</span></h2></div>
          <div className="intro-text"><p>En Nakamura Aire brindamos soluciones de climatización para hogares, comercios y espacios de trabajo. Nuestro compromiso es atender cada necesidad con criterio técnico, comunicación clara y cuidado por tu equipo.</p><a href="#contacto" className="text-link">Conversemos sobre tu equipo <span>→</span></a></div>
        </div>
        <div className="benefits">
          <div><span>01</span><strong>Atención cercana</strong><p>Escuchamos tus necesidades y te orientamos.</p></div>
          <div><span>02</span><strong>Evaluación técnica</strong><p>Revisamos antes de recomendar una solución.</p></div>
          <div><span>03</span><strong>Trabajo cuidadoso</strong><p>Nos importa el equipo y el espacio donde trabajamos.</p></div>
          <div><span>04</span><strong>Comunicación clara</strong><p>Te explicamos cada paso del servicio.</p></div>
        </div>
      </section>

      <section id="servicios" className="services section">
        <div className="section-kicker">02 / SERVICIOS</div>
        <div className="section-heading"><div><p className="eyebrow blue">SOLUCIONES DE CLIMATIZACIÓN</p><h2>Todo para mantener<br/><span>el aire a tu favor.</span></h2></div><p className="heading-aside">Servicio especializado para cuidar tu sistema, recuperar su funcionamiento y disfrutar de mayor confort.</p></div>
        <div className="services-grid">{services.map(service => <article className="service-card" key={service.number}><div className="service-image"><img src={service.image} alt={service.title} loading="lazy"/><span>{service.number}</span></div><div className="service-info"><h3>{service.title}</h3><p>{service.text}</p><a href="#contacto">Consultar servicio <span>↗</span></a></div></article>)}</div>
      </section>

      <section id="proceso" className="process section">
        <div className="section-kicker">03 / CÓMO TRABAJAMOS</div>
        <div className="section-heading"><div><p className="eyebrow blue">SENCILLO Y TRANSPARENTE</p><h2>Un proceso claro,<br/><span>de principio a fin.</span></h2></div><p className="heading-aside">Te acompañamos desde el primer contacto hasta la verificación del servicio realizado.</p></div>
        <div className="process-grid">{process.map(item=><div className="process-item" key={item.number}><span className="process-number">{item.number}</span><h3>{item.title}</h3><p>{item.text}</p></div>)}</div>
      </section>

      <section id="trabajos" className="gallery section">
        <div className="section-kicker">04 / EXPERIENCIA EN CAMPO</div>
        <div className="section-heading"><div><p className="eyebrow blue">NUESTROS TRABAJOS</p><h2>Confort que se<br/><span>construye con cuidado.</span></h2></div><p className="heading-aside">Esta galería se actualizará con fotografías de instalaciones y servicios realizados por nuestro equipo.</p></div>
        <div className="gallery-grid">{gallery.map((item,i)=><article className="gallery-card" key={item.title}><img src={item.image} alt={item.title} loading="lazy"/><div className="gallery-caption"><span>0{i+1} / {item.title}</span><b>↗</b></div></article>)}</div>
      </section>

      <section className="partners section">
        <div className="section-kicker">05 / RESPALDO</div>
        <p className="eyebrow blue">NUESTRO ECOSISTEMA</p><h2>Experiencia técnica.<br/><span>Servicio con propósito.</span></h2>
        <p className="partners-description">Seguimos construyendo alianzas y fortaleciendo nuestro servicio para brindarte soluciones integrales.</p>
        <div className="partner-note"><span className="partner-symbol">N</span><div><strong>NAKAMURA</strong><small>Servicio técnico y soluciones</small></div></div>
      </section>

      <section id="contacto" className="contact">
        <div className="contact-main"><p className="eyebrow"><span className="eyebrow-dot green"/> ESTAMOS PARA AYUDARTE</p><h2>¿Tu aire necesita<br/><span>atención?</span></h2><p>Cuéntanos qué necesitas. Te ayudaremos a encontrar la solución adecuada para tu equipo de climatización.</p><a href="mailto:contacto@nakamuraaire.com" className="button primary">Solicitar información <span>↗</span></a><small className="contact-note">Pronto añadiremos nuestro WhatsApp y canales directos de atención.</small></div>
        <div className="contact-details"><div><span>ÁREA DE SERVICIO</span><strong>Guayaquil, Ecuador</strong></div><div><span>SERVICIOS</span><strong>Instalación · Mantenimiento · Reparación</strong></div><div><span>ATENCIÓN</span><strong>Agenda tu revisión</strong></div></div>
      </section>

      <footer><a href="#inicio" className="footer-brand"><div className="logo-mark"><span>N</span><i/></div><div><strong>NAKAMURA</strong><span>AIRE · CLIMATIZACIÓN</span></div></a><p>Confort, eficiencia y servicio técnico.</p><span>© {new Date().getFullYear()} Nakamura Aire. Todos los derechos reservados.</span></footer>
    </main>
  );
}
