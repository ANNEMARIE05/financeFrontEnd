import React from "react"
import { Link } from "react-router-dom"
import "../css/accueil.css"
import "../css/mediaQuerie.css"
import Footer from "../components/footer"
import photo2 from "../images/photo2.png"
import photo3 from "../images/photo3.png"
import photo4 from "../images/photo4.png"

export default function Accueil() {
    return(
        <>
            <div className="Accueilmenu">
                <nav>
                    <header className="accueilHead">
                        <i class="fa-solid fa-bars"></i>
                        <h1>Invest</h1> 
                        <div className="headerP">
                            <p id="accueil">Accueil</p>
                            <p id="apropos">A Propos</p>
                            <p id="blog">Blogs</p>
                            <p id="contact">Contacts</p>
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
            <div className="commencer">
                <div className="cardCommencerImage1">
                    <img src={photo2} alt="" />
                    <div className="commencerTexte">
                        <h1>
                            Obtenez Les Résultats. Trouvez 
                            Les. Souscrire un credit en ligne 
                            Et Les Dernières Informations 
                            Ici! Trouver Des Souscrire un 
                            credit en ligne.
                        </h1>
                        <Link to={"/login"}><button>Commencer maintenant</button></Link>
                    </div>
                </div>
                <div className="cardCommencerImage1 cardCommencerImage2">

                    <div className="commencerTexte">
                        <h1>
                            Obtenez Les Résultats. Trouvez 
                            Les. Souscrire un credit en ligne 
                            Et Les Dernières Informations 
                            Ici! Trouver Des Souscrire un 
                            credit en ligne.
                        </h1>
                        <Link to={"/login"}><button>Commencer maintenant</button></Link>
                    </div>
                    <img src={photo3} alt="" />
                </div>
            </div>
            <div className="accueilApropos">
                <h1>A PROPOS DE NOUS</h1>
                <p>Obtenez Les Résultats. Trouvez 
                    Les. Souscrire un credit en ligne 
                    Et Les Dernières<br /> Informations 
                    Ici! Trouver Des Souscrire un 
                    credit en ligne.
                </p>
                <p>Obtenez Les Résultats. Trouvez 
                    Les. Souscrire un credit <br />en ligne 
                    Et Les Dernières Informations 
                    Ici!<br /> Trouver Des Souscrire un 
                    credit en ligne.
                </p>
            </div>
            <div className="AccueilBlog">
                <h1>Blog</h1>
                <div className="blog">
                    <div className="blogCard">
                        <img src={photo4} alt="" />
                        <div>
                            <h4>ANNE MARIE</h4>
                            
                            <p>11 Septembre 2023</p>
                            <p>
                                Obtenez Les Résultats. Trouvez 
                                Les. Souscrire un credit en ligne 
                                Et Les Dernières Informations 
                                Ici! Trouver Des Souscrire un 
                                credit en ligne.
                            </p>
                        </div>
                    </div>
                    <div className="blogCard">
                        <img src={photo3} alt="" />
                        <div>
                            <h4>ANNE MARIE</h4>
                            
                            <p>11 Septembre 2023</p>
                            <p>
                                Obtenez Les Résultats. Trouvez 
                                Les. Souscrire un credit en ligne 
                                Et Les Dernières Informations 
                                Ici! Trouver Des Souscrire un 
                                credit en ligne.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="NousContacter">
                <h1>NOUS CONTACTER</h1>
            </div>
            <Footer />
        </>
    )
}