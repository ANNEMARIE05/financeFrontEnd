import React from "react"
import { Link } from "react-router-dom"
import "../css/accueil.css"
import "../css/mediaQuerie.css"


export default function Accueil() {
    return(
        <>
            <div className="Accueilmenu">
            <nav>
                <header className="accueilHead">
                    <i class="fa-solid fa-bars"></i>
                    <h1>Invest</h1> 
                    <div className="headerP">
                        <p>Accueil</p>
                        <p>A Propos</p>
                        <p>Blogs</p>
                        <p>Contacts</p>
                    </div> 

                    <div className="headerBtn">
                        <Link to={"/register"}><button>S'inscrire</button></Link>
                        <Link to={"/login"}><button>Se connecter</button></Link>
                    </div>

                </header>
            </nav> 
            <div className="AccueilmenuTest">
                <h1>
                    Obtenez Les Résultats. Trouvez 
                    Les. Souscrire un credit en ligne 
                    Et Les Dernières Informations 
                    Ici! Trouver Des Souscrire un 
                    credit en ligne.
                </h1>
            </div>
            </div>  
        </>
    )
}