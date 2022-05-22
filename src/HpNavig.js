import React from 'react'
import { useNavigate } from "react-router-dom";
export default function HpNavig() {

    const navigate = useNavigate();

    function backToHome() {
        navigate("/");
    }

    return (
        <div style={{ position: "relative", top: "5%" }}>
            <button type="button" onClick={backToHome} style={{ backgroundColor: "rgb(255, 255, 255)", border: "none", }}>
                ← Atpakaļ uz sākumlapu
            </button>
        </div>
    )
}
