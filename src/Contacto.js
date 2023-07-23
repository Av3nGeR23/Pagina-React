import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    fecha: '',
    Telefono: '',
    num: '',
    opciones: 'opcion1',
    texto: '',
    checkbox: false,
  });

  useEffect(() => {
    const savedFormData = localStorage.getItem('formData');
    if (savedFormData) {
      setFormData(JSON.parse(savedFormData));
    }
  }, []);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    const newValue = type === 'checkbox' ? checked : value;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: newValue,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem('formData', JSON.stringify(formData));
    alert('Formulario enviado y datos guardados en localStorage');
    // Aquí puedes enviar los datos a un servidor si lo deseas.
  };

  return (
    <section id="contacto">
      <h2 className="text-center">Contacto</h2>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h2>¡Gracias por contactar nuestro equipo de soporte técnico!</h2>
            <p>Estamos aquí para ayudarte con cualquier pregunta, problema o inquietud que puedas tener.</p>
            <p>Nuestro objetivo es brindarte una asistencia excepcional y resolver tus problemas de manera rápida y eficiente. Por favor, completa el siguiente formulario de contacto y uno de nuestros representantes de soporte se pondrá en contacto contigo a la brevedad:</p>
            <p>Agradecemos tu paciencia y te aseguramos que haremos todo lo posible para proporcionarte una solución satisfactoria. ¡Estamos ansiosos por ayudarte y esperamos poder resolver tus inquietudes pronto!</p>
            <p>Atentamente,<br />El equipo de soporte técnico</p>
          </div>

          <div className="col-md-6">
            <div className="formulario">
              <form onSubmit={handleSubmit}>
                <label htmlFor="nombre">Nombre:</label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                />

                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                  onChange={handleChange}
                  required
                />

                <label htmlFor="fecha">Fecha de solicitud:</label>
                <input
                  type="date"
                  id="fecha"
                  name="fecha"
                  value={formData.fecha}
                  onChange={handleChange}
                  required
                />

                <label htmlFor="Telefono">Telefono:</label>
                <input
                  type="text"
                  id="Telefono"
                  name="Telefono"
                  value={formData.Telefono}
                  onInput={handleChange}
                  required
                />

                <label htmlFor="num">Edad:</label>
                <input
                  type="number"
                  id="num"
                  name="num"
                  value={formData.num}
                  onChange={handleChange}
                  required
                />

                <label htmlFor="opciones">Servicio:</label>
                <select id="opciones" name="opciones" value={formData.opciones} onChange={handleChange}>
                  <option value="opcion1">Formateo</option>
                  <option value="opcion2">Mantencion</option>
                  <option value="opcion3">Reparacion</option>
                </select>

                <label htmlFor="texto">Observaciones:</label>
                <textarea
                  id="texto"
                  name="texto"
                  value={formData.texto}
                  onChange={handleChange}
                  required
                ></textarea>

                <input
                  type="checkbox"
                  id="checkbox"
                  name="checkbox"
                  checked={formData.checkbox}
                  onChange={handleChange}
                />
                <label htmlFor="checkbox">Acepto los términos y condiciones</label>

                <input type="submit" value="Enviar" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacto;
