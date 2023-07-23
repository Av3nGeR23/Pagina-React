import Footer from './Footer';
import React from 'react';

const About =() => {
  return <div>
      <section id="quienes-somos">
        <h2>Quienes somos</h2>
        <div className="divquiensomos">
          <div className="MGCSquiensomos">
            <p>En MGCS SOLUTIONS, somos una empresa líder en el campo del soporte técnico de computadoras. Nuestro equipo está compuesto por profesionales altamente capacitados y apasionados por la tecnología.</p>
            <p>En conjunto, nuestro equipo de profesionales combina habilidades técnicas, experiencia y un compromiso inquebrantable con la satisfacción del cliente. Trabajamos arduamente para garantizar que cada interacción con nuestros clientes sea positiva, y nos enorgullece proporcionar soluciones confiables y eficientes en el campo del soporte técnico de computadoras.</p>
            <p>Confía en MGCS SOLUTIONS para satisfacer todas tus necesidades de soporte técnico. Estamos aquí para ayudarte a resolver cualquier problema tecnológico y brindarte la tranquilidad que necesitas.</p>
          </div>
  
          <div className="Tabla">
            <table>
              <caption style={{ fontWeight: 'bold' }}>Información sobre nuestra empresa o equipo.</caption>
              <thead>
                <tr>
                  <th className="Nombre">Nombre</th>
                  <th className="Titulo">Titulo</th>
                  <th className="Especialidad">Especialidad</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="Nombre">Andres Gajardo</td>
                  <td className="Titulo">31</td>
                  <td className="Especialidad">Mantenciones GPU y PC</td>
                </tr>
                <tr>
                  <td className="Nombre">Hector Cano</td>
                  <td className="Titulo">33</td>
                  <td className="Especialidad">Formateos y configuraciones</td>
                </tr>
                <tr>
                  <td className="Nombre">Guido Soto</td>
                  <td className="Titulo">33</td>
                  <td className="Especialidad">Armado y Configuracion</td>
                </tr>
                <tr>
                  <td className="Nombre">Matias Mendoza</td>
                  <td className="Edad">27</td>
                  <td className="Especialidad">Mantencion PC y Notebook</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      
    </div>;
  
}
export default About;


