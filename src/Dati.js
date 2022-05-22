import React from 'react'
import "./dati.css"
import "./home.css"
import { useNavigate } from "react-router-dom";
import HpNavig from './HpNavig';
import { useState, useEffect } from 'react';
export default function Dati() {

    const [fullTable, setFullTable] = useState(false);
    const [index, setIndex] = useState(8);


    const vielas = require('./vielas.json');
    const navigate = useNavigate();




    useEffect(() => {

        if (fullTable) {
            setIndex(Object.keys(vielas).length);
        } else {
            setIndex(8);
        }

    }, [fullTable])



    return (
        <>

            <div style={{ paddingTop: "100px", left: "20%", position: "absolute" }}>

                <HpNavig />

                <h1>PUBLISKĀ DATUBĀZE</h1>
                <h3>Šajā datubāzē tu vari apskatīt pieejamās vielas un aprīkojumu</h3>
                <div>
                    <input type="text" placeholder='Search' className='div2-input'></input>
                    <div className='dati-divb'>
                        <button className='div2-button1' type="button" onClick={() => {
                            setFullTable(!fullTable);
                        }}>Rādīt visu</button>
                    </div>
                    <div className='dati-divb'>
                        <button className="div2-button2" type="button">Rādīt vielas</button>
                    </div>
                    <div className='dati-divb'>
                        <button className="div2-button2" type="button">Rādīt aprīkojumu</button>
                    </div>
                </div>
                <div className='table-div'>
                    <ul>
                        <li style={{ width: "50px" }}>ID</li>
                        <li style={{ width: "200px" }}>Nosaukums</li>
                        <li style={{ width: "100px" }}>tips</li>
                        <li style={{ width: "100px" }}>Apakštips</li>
                        <li style={{ width: "50px" }}>Skaits</li>
                        <li style={{ width: "50px" }}>Svars</li>
                        <li style={{ width: "80px" }}>Mērvienība</li>
                        <li style={{ width: "400px" }}>Komentāri</li>

                    </ul>
                </div>
                {vielas.filter((item, idx) => idx < index).map(function (key, val) {

                    return (<>
                        <div>
                            <p style={{ width: "50px" }}>{key.id}</p>
                            <p style={{ width: "200px" }}>{key.nosaukums}</p>
                            <p style={{ width: "100px" }}>{key.tips}</p>
                            <p style={{ width: "100px" }}>{key.apakstips}</p>
                            <p style={{ width: "50px" }}>{key.skaits}</p>
                            <p style={{ width: "50px" }}>{key.daudzums}</p>
                            <p style={{ width: "80px" }}>{key.mervienibas}</p>
                            <p style={{ width: "400px" }}>{key.komentari}</p>
                        </div>
                    </>
                    );
                })}
            </div>

        </>
    )

}
