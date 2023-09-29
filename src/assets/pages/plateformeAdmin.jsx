import React from "react";
import { Link } from "react-router-dom";
import "../css/plateformeAdmin.css"


export default function PlateformeAdmin() {
    return(
    <>
        <div className="cardPlateforme">
            <div className="plateformeCard1">
                <h2>Invest</h2>
                <div className="emoji">
                    <Link><i class="fa-solid fa-house"></i></Link><br />
                    <Link><i class="fa-solid fa-user"></i></Link><br />
                    <Link><i class="fa-solid fa-wallet"></i></Link><br />
                    <Link><i class="fa-solid fa-list"></i></Link><br />
                    <Link><i class="fa-solid fa-gear"></i></Link>
                </div>
                <div className="deconnexion">
                    <Link><i class="fa-solid fa-arrow-right-from-bracket"></i></Link>
                </div>
            </div>
            <div className="plateformeCard2">
                <div className="cardAdmin">
                    <h1>Bienvenue cher admin</h1>
                </div>
                <div className="plateCard">
                    <div>
                        <h1>CLIENTS</h1>
                        <p>20</p>
                    </div>
                    <div>
                        <h1>SOLDES</h1>
                        <p>1230000 FCFA</p>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}