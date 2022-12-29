import React from 'react'
import './Recovery.css'
import { Link } from "react-router-dom";

function RecoveryPhase() {
    return (
        <div className='R_Main_Div'>
            <div className='R-inner_div-text'>Secret Recovery Phrase</div>
            <div className='Inner_Info'>Your secret recovery Phrase makes it easy to back up and restore your account</div>
            <div className='Inner_Info'>Warning: Never disclose your secret Recovery Phrase. Anyone this phrase can take your Ether forever</div>
            <div className='Option_Rdiv'>
                couple inflict wash month vendor radio differ stumble update whip water glass
            </div>
            <div className='RButton'>
                <button className='Inner_rbutton1'>Remind me later</button>
                <button className='Inner_rbutton2'> <Link to="/MainScreen" style={{ color: "white", textDecoration: "none" }}>Next</Link></button>
            </div>
        </div>
    )
}

export default RecoveryPhase