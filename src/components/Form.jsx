import { useState } from "react";

const Form = () => {
  const handleSubmit = (e) => e.preventDefault();

  const [formFields, setFormFields] = useState({
    fullName: "",
    email: "",
    message: "",
    getOffers: false,
  });

  const { fullName, email, message, getOffers } = formFields; // Desestructuración del objeto formFields para poder usar directamente el nombre de las propiedades en lugar de formFields.propiedad

  const handleChange = (e) => {
    const { name, type, checked, value } = e.target; // Desestructuración del objeto e.target para poder usar directamente el nombre de las propiedades en lugar de e.target.propiedad

    setFormFields({
      ...formFields, // El spread operator sirve para hacer un copia de todo lo que ya tiene el objeto formFields, en lugar de copiarlo todo de nuevo. En la linea siguiente lo que estamos haciendo es solo modificar la propiedad del input que cambió
      // Los corchetes sirven para llamar a propiedades de objetos que tengan nombres con puntos o con guiones
      [name]: type === "checkbox" ? checked : value, // El operador ternario se usa en este caso porque para los checkbox se utiliza el "checked" en vez del "value"
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Controlled form</h2>

      <div className="mb-3">
        <label className="form-label">
          Name
          <input
            type="text"
            name="fullName"
            placeholder="John Doe"
            className="form-control"
            value={fullName}
            onChange={handleChange}
          />
        </label>
      </div>

      <div className="mb-3">
        <label className="form-label">
          Email
          <input
            type="text"
            name="email"
            placeholder="johndoe@gmail.com"
            className="form-control"
            value={email}
            onChange={handleChange}
          />
        </label>
      </div>

      <div className="mb-3">
        <label className="form-label">
          Message
          <textarea
            name="message"
            placeholder="Write your message here."
            className="form-control"
            value={message}
            onChange={handleChange}
          ></textarea>
        </label>
      </div>

      <div className="form-check mb-3">
        <input
          type="checkbox"
          name="getOffers"
          id="getOffers"
          checked={getOffers}
          className="form-check-input"
          onChange={handleChange}
        />
        <label htmlFor="getOffers" className="form-label">
          I want to receive special offers via email
        </label>
      </div>

      <input type="submit" value="Send message" className="btn btn-dark" />
    </form>
  );
};

export default Form;
