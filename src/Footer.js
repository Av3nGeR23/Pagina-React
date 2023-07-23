import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div class="footer-container">
      <div class="footer-section">
        <h3>Contacto</h3>
        <p>Teléfono: +56993427198</p>
        <p>Email: a.gajardo23@hotmail.com</p>
      </div>
      <div class="footer-section">
        <h3>Enlaces</h3>
        <ul>
          <li><a href="https://www.linkedin.com/in/andres-gm92/">LinkedIn</a></li>
          <li><a href="https://github.com/Av3nGeR23?tab=repositories">Github</a></li>

        </ul>
      </div>
      <div class="footer-section">
        <h3>Redes sociales</h3>
        <ul class="social-media">
          <li><a href="https://www.facebook.com/AndresGajardo23/"><i class="fab fa-facebook-f"></i> Facebook</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <p>Todos los derechos reservados &copy; 2023 | Andres Gajardo</p>
    </div>
    </footer>
  );
};

export default Footer;
