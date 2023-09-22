import React from "react";
import '../css/footer.css'


export default function Footer() {
    return(
        <>
            <div className="footer">
                <div className="AccueilFooter">
                    <div>
                        <h3>INVEST</h3>
                        <p>
                            Obtenez Les Résultats. Trouvez 
                            Les. Souscrire un credit en ligne 
                            Et Les Dernières Informations 
                            Ici! Trouver Des Souscrire un 
                            credit en ligne.
                        </p>

                    
                    </div>
                    <div>
                        <h3>LIENS</h3>
                        <p><i class="fa-brands fa-whatsapp"></i>Whatsapp</p>
                        <p><i class="fa-brands fa-youtube"></i>Youtube</p>
                        <p><i class="fa-brands fa-facebook"></i>FaceBook</p>
                        <p><i class="fa-brands fa-github"></i>Github</p>
                    </div>
                    <div>
                        <h3>CONTACTS</h3>
                        <p>Telephone : +225 0102030405</p>
                        <p>Email : invest@gmail.com</p>
                        <p>Localisation : Abidjan Ci</p>
                    </div>
                    <div>
                        <h3>MESSAGES</h3>
                        <input type="text" placeholder="email" /><br />
                        <textarea placeholder="Ecrire ici"></textarea><br />
                        <button>Envoyer</button>

                    </div>
                </div>
                
            </div>
            <footer>
                <p>© 2023 Coporigth : invest.com</p>    
            </footer>
        </>
    )
}