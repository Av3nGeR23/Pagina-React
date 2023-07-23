 function Gallery() {
    return (
      <div id="gallery-container" className="gallery-container">
        <img src="https://portalinnova.cl/wp-content/uploads/2023/04/7-caracteristicas-que-todo-notebook-gamer-debe-tener-90555.jpg.jpg" alt="computadora" />
        <img src="https://cdn.shopify.com/s/files/1/0527/1620/8326/files/como-armar-una-pc-gamer-gama-alta_480x480.webp?v=1658779084" alt="pc" />
        <img src="https://assets-prd.ignimgs.com/2022/04/12/msigamingztriortx3080-1649781136521.jpg?width=1920" alt="GPU" />
        <img src="https://smartnetworksolutions.us/wp-content/uploads/2021/09/SERVICIO-E-1080x664.jpg" alt="soporte" />
      </div>
    );
  }

const Home = () =>{
    return (
      <section id="home">
        <div id="home-container">
          <div className="Bienvenido">
            <h1 style={{textAlign: 'center'}}>Bienvenido a nuestro servicio de soporte técnico para computadoras!</h1>
            <div className="parrafohome">
              <p>En nuestro sitio web, encontrarás soluciones y asistencia experta para resolver cualquier problema que puedas tener con tu computadora. Ya sea que necesites ayuda para solucionar errores, configurar software, optimizar el rendimiento de tu equipo o cualquier otra consulta técnica, estamos aquí para ayudarte.</p>
              
              <p>Nuestro equipo de técnicos altamente capacitados está listo para brindarte la mejor atención y orientación. Nos esforzamos por ofrecer soluciones eficientes y personalizadas para satisfacer tus necesidades específicas.</p>
              
              <p>Explora nuestros recursos, guías y artículos informativos para obtener consejos útiles y técnicas avanzadas. Si no encuentras lo que buscas, no dudes en ponerte en contacto con nosotros a través de nuestro formulario de contacto o chat en vivo. Estamos comprometidos a brindarte un servicio excepcional y una experiencia sin complicaciones.</p>
              
              <p>¡Gracias por confiar en nosotros como tu fuente confiable de soporte técnico para computadoras!</p>
            </div>
            <Gallery /> 
          </div>
        </div>
      </section>
    );
  }
export default Home;


