import React from "react";
import "../css/inscription.css"
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios';
import { API_IP } from '../config/api';


export default function Login() {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const login = () => {
        setIsLoading(true)
        const url=`${API_IP}auth/login`;
        console.log(url)
        axios.post(url, {email, password})
        .then((response)=>{
			if(response.status === 200){
                localStorage.setItem("userToken", response.data.token)
                localStorage.setItem("email", response.data.client.email)
				console.log("Reponse : ", response.data)
                navigate('/historiqueClient', {replace: true})
            }else {
				setError('Email ou mot de passe incorrect')
            }
			setIsLoading(false);           
        })
        .catch((error) => {
            console.log(error.response);
        });
        setIsLoading(false)
    }
    const connect = (e) =>{
        e.preventDefault();
        setError('')
        if(email === '' || password === ''){
            setError("Nom d'utilisateur ou mot de passe requis")
        }else{
            login();
        }
    }

    return(
        <>
            <body className="body">
                <form action="" className="registre" onSubmit={(e) => connect(e)}>
                    <div className="inscrire">
                        <div className="entete">
                            <h1>Connexion</h1>
                            <p className='h6 text-danger'>{error}</p>
                            <h1 className="texte">Se connecter pour continuer</h1>
                        </div>
                        <div className="inpt">
                            <label htmlFor="">Email</label>
                            <input type="email" placeholder="aa@gmail.com" onChange={(e) => setEmail(e.target.value)} required/>
                            <label htmlFor="">Mot de passe</label>
                            <input type="password" placeholder="******" onChange={(e) => setPassword(e.target.value)} required/>

                            {
                                isLoading ? <h6 className='text-danger'>Chargement....</h6>
                                : <div>
                                    <button type="submit">Se connecter</button>
                                    <Link to={"/register"} className="liens"><p>Pas un compte ? S’incrire ici</p></Link>
                                    <Link to={"/plateformeAdmin"} className="liens"><p>JE SUIS UN ADMIN</p></Link>
                                </div>
                            }

                            
                        </div>
                    </div>
                </form>
           </body>
        </>
    )
}