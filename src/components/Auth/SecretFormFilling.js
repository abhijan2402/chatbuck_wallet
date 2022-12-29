import React from 'react'
import './SecretFormFilling.css'
import TextField from '@mui/material/TextField';
import { Link } from "react-router-dom";

function SecretFormFilling() {
    return (
        <div className='SF_MainDiv'>
            <h1 className='SF_MainDivText'>Import a wallet with secret recovery Phrase</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?</p>
            <div>
                <h3 className='SF_H3'> Secret recovery Phrase</h3>
                <p className='SF_Para'>You can paste your entire secret recovery phrase into any field</p>
                <div className='Input_SField'>
                    <input type="text" placeholder="hey" className='InnerInputField' />
                    <input type="text" placeholder="hey" className='InnerInputField' />
                    <input type="text" placeholder="hey" className='InnerInputField' />
                    <input type="text" placeholder="hey" className='InnerInputField' />
                    <input type="text" placeholder="hey" className='InnerInputField' />
                    <input type="text" placeholder="hey" className='InnerInputField' />
                    <input type="text" placeholder="hey" className='InnerInputField' />
                    <input type="text" placeholder="hey" className='InnerInputField' />
                    <input type="text" placeholder="hey" className='InnerInputField' />
                </div>
            </div>
            <div>
                <h3 className='SF_H3'> Secret recovery Phrase</h3>
                <p className='SF_Para'>You can paste your entire secret recovery phrase into any field</p>
                <div className='Input_SField'>
                    <input type="text" placeholder="hey" className='InnerInputField' />
                    <input type="text" placeholder="hey" className='InnerInputField' />
                    <input type="text" placeholder="hey" className='InnerInputField' />
                    <input type="text" placeholder="hey" className='InnerInputField' />
                    <input type="text" placeholder="hey" className='InnerInputField' />
                    <input type="text" placeholder="hey" className='InnerInputField' />
                    <input type="text" placeholder="hey" className='InnerInputField' />
                    <input type="text" placeholder="hey" className='InnerInputField' />
                    <input type="text" placeholder="hey" className='InnerInputField' />
                </div>
            </div>
            <div className='InnerDivForm_SF'>
                <TextField id="outlined-basic" label="New password (8 character min)" variant="outlined" className='SF_InputFieldPass' />
            </div>
            <div className='InnerDivForm_SF'>
                <TextField id="outlined-basic" label="New password (8 character min)" variant="outlined" className='SF_InputFieldPass' />
            </div>
            <div className='PassBtnSF'>
                <button className='PassBtntextSF'><Link to="/CreatePassword" style={{ color: "white", textDecoration: "none" }}>Create</Link></button>
            </div>

        </div >
    )
}

export default SecretFormFilling