import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import "../css/inscription.css"
import { Link } from "react-router-dom";
import { API_IP } from "../config/api";



export default function Register() {
    const navigate = useNavigate();
    const [nom, setNom] = useState('');
    const [email, setEmail] = useState("");
    const [contact, setContact] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("")

    const createClient = (e) =>{
        e.preventDefault();
        if(nom !== ''){
            axios.post(`${API_IP}client`, {nom, prenom, email, phone: contact , password})
            .then((response) => {
                if(response.status === 201){
                    localStorage.setItem("userToken", response.data.token)
                    localStorage.setItem("email", response.data.message.email)
                    console.log("Reponse : ", response.data)
                    navigate('/', {replace: true})
                }else {
                    setError('Email ou mot de passe incorrect')
                }
            })
            .catch((error) => console.log(error))
        }else{
            setError('Renseigner tous les champs !!')
        }
    }
    return(
        <>
            <body className="body">
                <form action="" className="registre" method='post' onSubmit={(e) => createClient(e)}>
                    <div className="inscrire">
                        <div className="entete">
                            <h1>Inscription</h1>
                            <Link to={"/login"}><h1>Vous êtes déjà inscrite ? Connectez-vous ici.</h1></Link>
                        </div>
                        <div className="inpt">
                            <label htmlFor="">Nom & Prenom</label>
                            <input type="text" onChange={(e) => setNom(e.target.value)} id='nom' placeholder="Entrez votre nom ici"  />
                            <label htmlFor="">Email</label>
                            <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="@gmail.com" id='email' />
                            <label htmlFor="">Numero</label>
                            <input type="text" onChange={(e) => setContact(e.target.value)} placeholder="+225" id='contact'/>
                            <label htmlFor="">Mot de passe</label>
                            <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="******" id='password' />
                            <Link to={"/login"} ><button type='submit'>S'incrire</button></Link>
                            <div className="h5 text-danger">{error}</div>
                        </div>
                    </div>
                </form>
           </body>
        </>
    )
}