import React, { useState } from 'react';
import axios from 'axios';
import { API_IP } from '../config/api';

function Connexion() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post( `${API_IP}/connexion`, formData);

      if (response.status === 200) {
        // L'utilisateur est connecté avec succès
        // Redirigez l'utilisateur ou effectuez d'autres actions nécessaires
      }
    } catch (error) {
      console.error('Erreur de connexion', error);
    }
  };

  return (
    <div>
      <h2>Connexion</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nom d'utilisateur:</label>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Mot de passe:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <button type="submit">Connexion</button>
        </div>
      </form>
    </div>
  );
}

export default Connexion;