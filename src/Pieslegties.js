import React from 'react'
import HomeFlyer from "./HomeFlyer";
import "./pieslegties.css";
import "./home.css"
import HpNavig from './HpNavig';
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
export default function TEST() {

    const [currentName, setCurrentName] = useState("");
    const [currentPassword, setCurrentPassword] = useState("");
    const [matches, setMatches] = useState(false);
    const [errormsg, setErrormsg] = useState(false);
    const [registered, setRegistered] = useState(false);
    const navigate = useNavigate();

    function checkName(event) {
        setCurrentName(event.target.value);
    }

    function checkPassword(event) {
        setCurrentPassword(event.target.value);
    }

    function sudzibas() {

        navigate("/sudzibas");
    }

    useEffect(() => {

        try {

            let obj = localStorage.getItem("user");
            let objParsed = JSON.parse(obj);

            if (obj !== null) {

                setRegistered(true);
            }

            if (objParsed.name === currentName && objParsed.password === currentPassword) {

                setMatches(true);
            }

        } catch (error) {
            setRegistered(false);
        } finally {

            if (!registered && errormsg) {
                navigate("/registresanas")
            }
        }

    }, [currentName, currentPassword, errormsg, registered])




    return (
        <>
            <HomeFlyer />
            <div className='div2'>
                <HpNavig />
                <h1 className='div2-headline'>
                    Pieslēgties
                </h1>

                <p className="div2-subheadline">
                    Ķīmijas laboratorijas uzskaites sistēmai
                </p>

                <form className='div2-form'>
                    <label>
                        Lietotajvards:
                        <br />
                        <input type="text" name="name" required className='div2-input' placeholder='Tavs Lietotājvārds' onChange={checkName} />
                    </label>
                    <br /><br />
                    <label>
                        Parole:
                        <br />
                        <input type="password" name="password" required className='div2-input' placeholder='Tava Parole' onChange={checkPassword} />
                    </label>
                    <br /><br />
                    <button className='div2-button1' onClick={() => {
                        if (matches && registered) {
                            navigate("/dati");
                        } else {
                            setErrormsg(true);
                        }
                    }}>Pieslēgties</button >
                </form>

                <h1 style={{ position: "relative", top: "8%", color: "rgb(211,211,211)" }}>______________________________________________</h1>
                <p style={{ position: "relative", top: "5%", border: "none" }}>Neesi vēl reģistrējies?
                    <a style={{ paddingLeft: "5px", textDecoration: "none" }} href="/registresanas">Izveidot profilu</a>
                </p>
                <div className="div2-buttondiv2" style={{ top: "37%" }}>
                    <button type="button" className="div2-button3" onClick={sudzibas}>
                        Ziņot Par Kļūdu
                    </button>
                </div>
            </div>

        </>
    )
}
