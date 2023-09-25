import React, { useState } from 'react';
import { API_IP } from '../config/api';
import axios from 'axios';


function Inscription() {
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
      const response = await axios.post(`${API_IP}/inscription`, formData);

      if (response.status === 201) {
        // Redirigez l'utilisateur vers la page de connexion ou effectuez d'autres actions nécessaires
      }
    } catch (error) {
      console.log('Erreur lors de l\'inscription', error);
    }
  };

  return (
    <div>
      <h2>Inscription</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
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
          <button type="submit">S'inscrire</button>
        </div>
      </form>
    </div>
  );
}

export default Inscription;