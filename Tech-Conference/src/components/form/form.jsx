import React, { useState } from "react";
import styles from "./form.module.css";

export function OtroForm({ title, fields, onSubmit }) {
  const initialState = fields.reduce((acc, field) => {
    acc[field.name] = "";
    return acc;
  }, {});

  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form className={styles.formContainer} onSubmit={handleSubmit}>
      {title && <h2 className={styles.title}>{title}</h2>}
      
      <div className={styles.fields}>
        {fields.map((field) => (
          <div key={field.name} className={styles.inputGroup}>
            <label htmlFor={field.name} className={styles.label}>
              {field.label} {field.required && "*"}
            </label>
            <input
              id={field.name}
              name={field.name}
              placeholder={field.placeholder || ""}
              type={field.type || "text"}
              value={formData[field.name]}
              onChange={handleChange}
              required={field.required}
              className={styles.input}
            />
          </div>
        ))}
      </div>
      <br></br>
      <button className="counter" type="submit">
        Guardar
      </button>
    </form>
  );
}