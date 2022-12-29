import React from 'react'
import './CreatePass.css'
import TextField from '@mui/material/TextField';
import { Link } from "react-router-dom";
function CreatePassword() {
    return (
        <div>
            <div className='PassDiv'>
                Create Password
            </div>
            <div className='FormDiv'>
                <div className='InnerDivForm'>

                    <TextField id="outlined-basic" label="New password (8 character min)" variant="outlined" style={{ width: "100%" }} />
                </div>
                <div className='InnerDivForm'>

                    <TextField id="outlined-basic" label="Confirm password" variant="outlined" style={{ width: "100%" }} />
                </div>
                <div className='PassBtn'>
                    <button className='PassBtntext'> <Link to="/RecoveryPhase" style={{ color: "white", textDecoration: "none" }}>Create</Link></button>
                </div>

            </div>
        </div>
    )
}

export default CreatePassword