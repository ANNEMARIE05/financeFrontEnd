import React from "react"
import { Link } from "react-router-dom"
import "../css/accueil.css"
import "../css/mediaQuerie.css"


export default function Accueil() {
    return(
        <>
            <nav>
                <header className="accueilHead">
                    <h2>Invest</h2> 
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
        </>
    )
}