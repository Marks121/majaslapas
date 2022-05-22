import React from 'react'
import HomeFlyer from './HomeFlyer'
import HpNavig from './HpNavig';
import "./home.css";
import "./pieslegties.css"
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';

export default function () {

    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmation, setConfirmation] = useState("");
    const [matches, setMatches] = useState(false);


    const navigate = useNavigate();

    function handleEmail(event) {
        setEmail(event.target.value);

    }

    function handleUsername(event) {
        setUsername(event.target.value);

    }

    function handlePassword(event) {
        setPassword(event.target.value);

    }

    function handleConfirm(event) {
        setConfirmation(event.target.value);

    }


    function validateEmail(email) {
        let mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (email.match(mailFormat)) {
            return true;
        }
        return false;
    }

    useEffect(() => {
        if (confirmation !== password) {
            document.getElementById("submit").disabled = true;
        } else {

            document.getElementById("submit").disabled = false;

        }
    }, [confirmation, password])


    return (
        <>
            <HomeFlyer />
            <div className='div2'>
                <HpNavig />
                <form className='div2-form' style={{ top: "20%" }} action="/">
                    <label>
                        Tavs Email:
                        <br />
                        <input type="email" placeholder="Email adrese" name="email" required className='div2-input' onChange={handleEmail}></input>
                    </label>
                    <br />
                    <br />
                    <label>
                        Tavs Lietotājvārds:
                        <br />
                        <input type="text" placeholder="Lietotājvārds" name="lietotajvards" required className='div2-input' onChange={handleUsername}></input>
                    </label>
                    <br />
                    <br />
                    <label>
                        Tava parole:
                        <br />
                        <input type="password" placeholder="Parole" name="password" required className='div2-input' onChange={handlePassword}></input>
                    </label>
                    <br />
                    <br />
                    <label>
                        Tava parole atkārtoti:
                        <br />
                        <input type="password" placeholder="Parole atkārtoti" name="password2" required className='div2-input' onChange={handleConfirm}></input>
                    </label>
                    <br />
                    <br />
                    <button type="submit" className='div2-button1' id="submit" onClick={() => {
                        if (password !== "" && username !== "" && validateEmail(email)) {
                            let user = {
                                "name": username,
                                "password": password
                            }

                            localStorage.setItem("user", JSON.stringify(user));
                            document.getElementById("submit").disabled = false;
                        }
                    }}>Reģistrēties</button>

                </form>

            </div>

        </>
    )
}
