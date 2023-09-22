import React from "react";
import Header from "../components/clientHeader";
import "../css/historiqueClients.css"
import Footer from "../components/footer";


export default function HistoriqueClient() {
    return(
        <>
            <Header />
            <div className="containerHistorique">
                <h1>Aucune transaction</h1>
            </div>
            <div className="vide"></div>
            <Footer/>
        </>
    )
}