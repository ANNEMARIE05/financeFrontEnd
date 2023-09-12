import React from "react";
import "../css/inscription.css"
import { Link } from "react-router-dom";


export default function Register() {
    return(
        <>
            <body className="body">
                <div className="registre">
                    <div className="inscrire">
                        <div className="entete">
                            <h1>Connexion</h1>
                            <Link to={"/login"}><h1>Vous êtes déjà inscrite ? Connectez-vous ici.</h1></Link>
                        </div>
                        <div className="inpt">
                            <label htmlFor="">Nom & Prenom</label>
                            <input type="text" placeholder="Entrez votre nom ici" id="" />
                            <label htmlFor="">Date de naissance</label>
                            <input type="date" name="" id="" />
                            <label htmlFor="">Email</label>
                            <input type="email" placeholder="@gmail.com" id="" />
                            <label htmlFor="">Numero</label>
                            <input type="text" placeholder="+225" id="" />
                            <label htmlFor="">Mot de passe</label>
                            <input type="password" placeholder="******" id="" />
                            <Link to={"/login"} ><button>S'incrire</button></Link>
                        </div>
                    </div>
                </div>
           </body>
        </>
    )
}