import React, { useState } from 'react'
import './MainScreen.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Popover from '@mui/material/Popover';

function MainScreen() {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };
    const [Assests, setAssests] = useState(true)
    const [Activities, setActivities] = useState(false)
    const [border, setborder] = useState("1px solid red")
    const [border1, setborder1] = useState("1px solid green")
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose1 = () => {
        setAnchorEl(null);
    };
    const open1 = Boolean(anchorEl);
    const id = open1 ? 'simple-popover' : undefined;

    const Main = () => {
        console.log("hello1")
        setAssests(true)
        setActivities(false)
    }
    const Main1 = () => {
        console.log("hello123")
        setActivities(true)
        setAssests(false)
    }
    return (
        <>

            <div>
                <div style={{ borderBottom: "3px solid lightgrey" }}>
                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                        <h2>Main Account</h2>
                        <img src='https://cdn-icons-png.flaticon.com/128/9182/9182845.png' className='MSImgSize1' onClick={handleClick} />

                    </div>
                    <h3>4564546564646</h3>
                </div>
                <div>
                    <div> 0 ETH</div>
                    <h5>$ 0.00 USD</h5>
                </div>
                <div className='MSoptiondiv'>
                    <div className='MSinnerdiv'>
                        <img src='https://cdn-icons-png.flaticon.com/128/4208/4208397.png' className='MSImgSize' />
                        <p className='MSPara'>Buy</p>
                    </div>
                    <div className='MSinnerdiv' onClick={handleOpen}>
                        <img src='https://cdn-icons-png.flaticon.com/128/3682/3682321.png' className='MSImgSize' />
                        <p className='MSPara'>Send</p>
                    </div>
                    <div className='MSinnerdiv'>
                        <img src='https://cdn-icons-png.flaticon.com/128/5972/5972857.png' className='MSImgSize' />
                        <p className='MSPara'>Snap</p>
                    </div>
                </div>
                <div className='MSActivity'>
                    <div className='MSActivityInnerDiv' style={{ borderBottom: Assests ? "3px solid blue" : "3px solid lightgrey" }} onClick={Main}>Assests</div>
                    <div className='MSActivityInnerDiv' style={{ borderBottom: Activities ? "3px solid blue" : "3px solid lightgrey" }} onClick={Main1}>Activity</div>
                </div>
                <div>
                    {
                        Assests ? <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehende voluptates voluptas?</h4> : <h4>Lorem ipsum dolor sit amet, consectetur adiuptas?</h4>
                    }

                </div>
            </div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} style={{ borderRadius: "5px" }}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Send money
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <TextField id="outlined-basic" label="Amount" variant="outlined" style={{ width: "100%", margin: "5% 0%" }} />
                        <TextField id="outlined-basic" label="Enter BlockChain Key" variant="outlined" style={{ width: "100%", margin: "5% 0%" }} />
                        <Button variant="contained" style={{ width: "100%", padding: "10px", margin: "5% 0%" }}>Send Money</Button>
                    </Typography>
                </Box>
            </Modal>
            <Popover
                id={id}
                open={open1}
                anchorEl={anchorEl}
                onClose={handleClose1}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
            >
                <Typography sx={{ p: 2 }}>Private Key :466546546546</Typography>
                <Typography sx={{ p: 2 }}>Public key : 54556556566</Typography>
                <Typography sx={{ p: 2 }}>BlockChain key : 54556556566</Typography>
            </Popover>
        </>
    )
}

export default MainScreen