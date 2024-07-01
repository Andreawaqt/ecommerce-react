function hero() {
  return (
    <>
      <header
        id="header"
        className="header d-flex align-items-center sticky-top"
      >
        <div className="container position-relative d-flex align-items-center justify-content-between">
          <a
            href="index.html"
            className="logo d-flex align-items-center me-auto me-xl-0 text-decoration-none"
          >
            <h1 className="sitename text-decoration-none">Qt's</h1>
            <span>.</span>
          </a>

          <nav id="navmenu" className="navmenu">
            <ul>
              <li>
                <a href="#hero" className="text-decoration-none">
                  Inicio
                  <br />
                </a>
              </li>
              <li>
                <a href="#menu" className="text-decoration-none">
                  Tienda
                </a>
              </li>
              <li>
                <a href="#contacto" className="text-decoration-none">
                  Contacto
                </a>
              </li>
            </ul>
            <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
          </nav>

          <a className="btn-getstarted" href="#tienda">
            Compra ya
          </a>
        </div>
      </header>

      <main className="main">
        <section id="hero" className="hero section">
          <div className="container">
            <div className="row gy-4 justify-content-center justify-content-lg-between">
              <div className="col-lg-5 order-2 order-lg-1 d-flex flex-column justify-content-center">
                <h1 data-aos="fade-up">
                  La última moda
                  <br />
                  Porque tu lo vales
                </h1>
                <p data-aos="fade-up" data-aos-delay="100">
                  Somos una tienda online enfocada a proporcionarte la mejor
                  experiencia de compra
                </p>
                <div className="d-flex" data-aos="fade-up" data-aos-delay="200">
                  <a href="#tienda" className="btn-get-started">
                    Compra ya
                  </a>
                </div>
              </div>
              <div
                className="col-lg-5 order-1 order-lg-2 hero-img"
                data-aos="zoom-out"
              >
                <img
                  src="/img/collection-banner.jpg"
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
export default hero;
