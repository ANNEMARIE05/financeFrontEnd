import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

function Login() {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });
  const { email, password } = inputValue;
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };
  // Fonction Pour les Toast
  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-left",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:3000/api/user/",
        {
          ...inputValue,
        },
        { withCredentials: true }
      );
      console.log(data);
      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          navigate("/");
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
    }
    setInputValue({
      ...inputValue,
      email: "",
      password: "",
    });
  };

  return (
    <body className='inscrireBody'>
        <div className="inscription">
      <h1>Connexion</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nom d'utilisateur:</label>
          <input
            type="email"
            name="email"
            value={email}
            placeholder="Entrer Votre Email"
            onChange={handleOnChange}
            required
          />
        </div>
        <div>
          <label>Mot de passe:</label>
          <input
             type="password"
             name="password"
             value={password}
             placeholder="Enter your password"
             onChange={handleOnChange}
            required
          />
        </div>
        <div>
          <button type="submit">Connexion</button>
        </div>
        <p className='connectLink'><Link to="/register">Pas encore inscrit ? Inscris-toi !</Link></p>
        <p className='connectLink'><Link to="/historiqueClient">client</Link></p>
        <p className='connectLink'><Link to="/plateformeAdmin">Admin</Link></p>
      </form>
    </div>
    </body>
  );
}

export default Login;