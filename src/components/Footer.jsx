import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Contacto</h3>
          <p>francoarmani107@gmail.com</p>
          <p>+549 291 5716099</p>
        </div>
        <div className="footer-section">
          <h3>Enlaces</h3>
          <ul>
            <li>
              <a href="#inicio">Inicio</a>
            </li>
            <li>
              <a href="#acerca">Acerca</a>
            </li>
            <li>
              <a href="#products">Productos</a>
            </li>
            <li>
              <a href="#contacto">Contacto</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Redes Sociales</h3>
          <ul className="social-links">
            <li>
            <a href="https://www.instagram.com/fran.armani_/">Instagram</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/franco-armani-993a36234/">LinkedIn</a>
            </li>
            <li>
              <a href="https://samuraidesigns.framer.ai">PortFolio</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 CoderClock. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
