import React from "react"
import "../css/clientHeader.css"
import { Link } from "react-router-dom"


export default function Header() {
    return(
        <>
            <nav className="clientNav">
                <div className="clientnavbar">
                    <div><h1>Invest</h1></div>
                    <div className="clientUL">
                       <ul>
                        <li><Link to={'/historiqueClient'}>Historique</Link></li>
                        <li><Link to={'/depotClient'}>Depot</Link></li>
                        <li><Link to={'/retraitClient'}>Retrait</Link></li>
                        <li><Link to={'/infoClient'}>Info</Link></li>
                       </ul>
                    </div>
                    <div><h1>Anne Marie</h1></div>
                </div>
            </nav>
        </>
    )
}