import React from "react";
import { Link } from "react-router-dom";
import "../css/retraitClient.css";
import Header from "../components/clientHeader";
import Footer from "../components/footer";


export default function RetraitClient() {
    return(
        <>
            <Header/>
            <div className="containerRetrait">
                <div>
                    <label htmlFor="text">Moyen de payement</label>
                    <select name="" id="">
                        <option value="">Moyen de payement</option>
                        <option value="">Orange</option>
                        <option value="">MTN</option>
                        <option value="">Moov</option>
                    </select>
                    <label htmlFor="text">Montant</label>
                    <input type="text" name="" id="" />
                </div>
                <div>
                <label htmlFor="text">Numero</label>
                    <input type="text" name="" id="" />
                    <Link><button>Valider</button></Link>
                </div>
            </div>
            <Footer/>
        </>
    )
}