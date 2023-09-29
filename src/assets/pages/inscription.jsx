import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import "../css/inscription.css"


function Register() {
  const [formData, setFormData] = useState({
    username: '',
    contact: '',
    email: '',
    password: '',

  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/user/register', formData);

      if (response.data.success()) {
        console.log('Inscription réussie');
        // Redirection vers une page de connexion par exemple
        // history.push('/login');
      } else {
        // L'inscription a échoué, afficher un message d'erreur.
        console.log('Erreur lors de l\'inscription:', response.data.message);
      }
    } catch (error) {
      console.error('Erreur réseau lors de l\'inscription:', error, formData);
    }
  };
  return (
   <body className='inscrireBody'>
       <div className='inscription'>
      <h1>Inscription</h1>
      <Link to={"/login"} className='inscrireLink'><p>Deja un compte ? se connecter ici</p></Link>
      <form onSubmit={handleSubmit}>
        <div>
        <label>Nom & Prenom</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            placeholder="Entrer Votre Nom"
            onChange={handleChange}
            required
          />
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            placeholder="Entrer Votre Email"
            onChange={handleChange}
            required
          />
          <label>Numero</label>
          <input
            type="number"
            name="contact"
            value={formData.contact}
            placeholder="ENtrer Votre Numero de contact"
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
           placeholder="Enter your password"
           onChange={handleChange}
            required
          />
        </div>
        <div>
          <button type="submit">S'inscrire</button>
        </div>
      </form>
    </div>
   </body>
  );
}

export default Register;