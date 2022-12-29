import React from 'react'
import './AccountCreate.css'
import { Link } from "react-router-dom";

function AccountCreate() {
    return (
        <div className='AccountCreateDiv'>
            <div className='New-to-MM'>New to Meta Mask?</div>
            <div className='Set-div'>
                <div className='FirstSelectDiv'>
                    <img src='https://cdn-icons-png.flaticon.com/512/724/724933.png' alt='' className="FirstImg" />
                    <p>No , Already have an Secret Recovery Phrase</p>
                    <p>Import your existing wallet using a secret Recovery Phrase</p>
                    <div className='BtnDivImport'><button className='startedBtndiv'><Link to="/SecretFormFilling" style={{ color: "white", textDecoration: "none" }}>Import Wallet</Link></button></div>

                </div>
                <div className='FirstSelectDiv'>
                    <img src='https://cdn-icons-png.flaticon.com/512/1828/1828925.png' alt='' className="FirstImg1" />
                    <p>Yes , let's get set up</p>
                    <p>That will create a new wallet and Secret Recovery Phrase</p>
                    <div className='BtnDivImport'><button className='startedBtndiv'>create wallet</button></div>
                </div>
            </div>
        </div>
    )
}

export default AccountCreate