import React from "react";
import "../css/inscription.css"
import { Link } from "react-router-dom";
import Register from "./inscription";


export default function Login() {
    return(
        <>
            <body className="body">
                <div className="registre">
                    <div className="inscrire">
                        <div className="entete">
                            <h1>Connexion</h1>
                            <h1 className="texte">Se connecter pour continuer</h1>
                        </div>
                        <div className="inpt">
                            <label htmlFor="">Numero</label>
                            <input type="text" placeholder="+225" id="" />
                            <label htmlFor="">Mot de passe</label>
                            <input type="password" placeholder="******" id="" />
                            <Link to={"/login"}><button>Se connecter</button></Link>
                            <Link to={"/register"} className="liens"><p>Pas un compte ? S’incrire ici</p></Link>
                        </div>
                    </div>
                </div>
           </body>
        </>
    )
}