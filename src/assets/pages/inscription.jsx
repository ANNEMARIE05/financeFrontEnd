import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import "../css/inscription.css"


function Register() {
  const navigate = useNavigate();

  // State pour recevoir la valeur de notre inputs
  const [inputValue, setInputValue] = useState({
    username: "",
    email: "",
    password: "",
    contact: "",
  });
  const { username, email, password, contact } = inputValue;

  // Event Pour remplire les inputs
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    // Fonction de mise ajour des valeur a chaque saisir
    setInputValue({ ...inputValue, [name]: value });
  };

  // Cretation des sesssion de message
  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-right",
    });

  // Creation du bouton submit
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "https://finance-backend-mt66.onrender.com/user/",
        {
          ...inputValue,
        },
        { withCredentials: true }
      );

      const { success, message } = data;

      if(success){
        console.log("connecter");
        handleSuccess(message);
        setTimeout(() => {
          navigate("/login");
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
    }
    setInputValue({
      ...inputValue,
      username: "",
      email: "",
      password: "",
      contact: "",
    });
  };

  return (
   <body className='inscrireBody'>
       <div className='inscription'>
      <h1>Inscription</h1>
      <Link to={"/login"} className='inscrireLink'><p>Deja un compte ? se connecter ici</p></Link>
      <form onSubmit={handleOnSubmit}>
        <div>
        <label>Nom & Prenom</label>
          <input
            type="text"
            name="username"
            value={username}
            placeholder="Entrer Votre Nom"
            onChange={handleOnChange}
            required
          />
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={email}
            placeholder="Entrer Votre Email"
            onChange={handleOnChange}
            required
          />
          <label>Numero</label>
          <input
            type="number"
            name="contact"
            value={contact}
            placeholder="ENtrer Votre Numero de contact"
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
          <button type="submit">S'inscrire</button>
        </div>
      </form>
    </div>
   </body>
  );
}

export default Register;