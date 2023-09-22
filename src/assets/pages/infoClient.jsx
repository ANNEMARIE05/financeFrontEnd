import React from "react";
import { Link } from "react-router-dom";
import "../css/infoClient.css"
import Header from "../components/clientHeader";
import Footer from "../components/footer";


export default function InfoClient() {
    return (
        <>
            <Header/>
            <div className="solde">
                <h1>MON SOLDE</h1>
                <h1>O FCFA</h1>
            </div>
            <div className="info">
                <h1>Mes informations personnels</h1>
                
                <div className="mesInfo">
                    <h3>Nom : <span>ANNE</span></h3>
                    <h3>Date de naissance : <span>ANNE</span></h3>
                    <h3>Email : <span>ANNE</span></h3>
                    <h3>Numero : <span>ANNE</span></h3>
                </div>
            </div>
            <div className="deco">
                <Link to={"/login"}><h1>Deconnexion</h1></Link>
            </div>
            <Footer/>
        </>
    )
}