import { useState } from "react";
import styles from "./create-challeng.module.css";

export function CreateChallenge() {
  const [formData, setFormData] = useState({
    image: "",
    title: "",
    description: "",
    liveDemo: "",
    sourceCode: "",
    tech: "",
    completedAt: "",
  });
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const apiKey = import.meta.env.VITE_API_KEY;

    if (!apiKey) {
      setError("API Key no configurada en las variables de entorno.");
      return;
    }

    try {
      const response = await fetch("http://localhost:3001/api/challenges", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          ...formData,
          tech: formData.tech.split(",").map((t) => t.trim()),
          completedAt: new Date(formData.completedAt).toISOString(),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Error desconocido");
      }

      alert("Challenge creado exitosamente!");
      setFormData({
        image: "",
        title: "",
        description: "",
        liveDemo: "",
        sourceCode: "",
        tech: "",
        completedAt: "",
      });
      setError("");
    } catch (err) {
      setError(
        `Error: ${err instanceof Error ? err.message : "Error desconocido"}`
      );
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Crear Nuevo Challenge</h2>
      {error && <p className={styles.error}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="image"
          value={formData.image}
          onChange={handleChange}
          placeholder="Imagen URL"
          required
          className={styles.formInput}
        />
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Título"
          required
          className={styles.formInput}
        />
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Descripción"
          required
          className={styles.formTextarea}
        />
        <input
          type="text"
          name="liveDemo"
          value={formData.liveDemo}
          onChange={handleChange}
          placeholder="Live Demo URL"
          required
          className={styles.formInput}
        />
        <input
          type="text"
          name="sourceCode"
          value={formData.sourceCode}
          onChange={handleChange}
          placeholder="Código Fuente URL"
          required
          className={styles.formInput}
        />
        <input
          type="text"
          name="tech"
          value={formData.tech}
          onChange={handleChange}
          placeholder="Tecnologías (separadas por coma)"
          required
          className={styles.formInput}
        />
        <input
          type="date"
          name="completedAt"
          value={formData.completedAt}
          onChange={handleChange}
          required
          className={styles.formInput}
        />
        <button type="submit" className={styles.formButton}>
          Crear Challenge
        </button>
      </form>
    </div>
  );
}
