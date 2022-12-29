import React from 'react'
import './login.css'
import { Link } from "react-router-dom";

function Login() {
    return (
        <div className='Login-div'>
            <div>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIzatkCO5Vql7DIbJQnQ1mcYatxKI1HHG8D71NWB5drjP7j2FjoRAzBSO_G2yadoceTPw&usqp=CAU' className='LogImage' />
            </div>
            <div className='Welcome-div'>Welcome to ChatBuck</div>
            <p className='descDiv'>Connecting you to Ethereum and the Decentralized Web</p>
            <div className='Happy-div'>We are happy to see you</div>
            <div className='BtnDiv'><button className='startedBtn'> <Link to="AccountCreate" style={{ color: "white", textDecoration: "none" }}>Get started</Link></button></div>
        </div>
    )
}

export default Login