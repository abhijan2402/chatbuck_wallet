import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react'
import FormControl, { useFormControl } from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
// import Box from '@mui/material/Box';
import FormHelperText from '@mui/material/FormHelperText';
// import PageviewRoundedIcon from '@mui/icons-material/PageviewRounded';
import axios from 'axios';
import './HomeScreen.css';
function MyFormHelperText() {
    const { focused } = useFormControl() || {};

    const helperText = React.useMemo(() => {
        if (focused) {
            return 'This field is being focused';
        }

        return 'Helper text';
    }, [focused]);

    return <FormHelperText>{helperText}</FormHelperText>;
}

function HomeScreen() {

    const [user, setUser] = useState([]);

    const fetchData1 = async () => {
        console.log()
        return await axios.get("https://ac6a-103-170-153-30.in.ngrok.io/")
            .then((response) => console.log(response));
    }
    const fetchData = async () => {
        return await fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((data) => console.log(data));
    }
    console.log(fetchData)
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then(function (response) {
                return response.json();
            }).then(function (data) {
                console.log(data);
            });
        fetchData();
    }, [])

    const AddAccountinner = async () => {
        console.log("hi")
        await fetch({
            method: 'get',
            url: 'https://ac6a-103-170-153-30.in.ngrok.io/',
            headers: {
                // "Content-Type": "application/json",
                "Accept": "application/json,text/plain, */*"
            }

        }).then(function (response) {
            console.log(response)
            console.log("response123", response.data)
            const data = response.data;
            // setchatBuckUsers(data)
        })
    }
    const getToddies = async () => {
        console.log("do")
        try {
            await axios.post('https://ac6a-103-170-153-30.in.ngrok.io/')
                .then((response) => {
                    console.log("hi")
                    console.log(response)
                    console.log(response.json())
                })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <div className='UpperDiv'>
                <div className='HSMAindiv'>
                    <input type="text" className='HSInput' placeholder='Search for the tarnsaction' />
                    {/* <img src="https://cdn-icons-png.flaticon.com/512/954/954591.png" className='HSIcon' /> */}
                </div>
            </div>
            <div className='HSMainDiv'>
                <h3>Transaction details</h3>
                <div className='TransactionDiv'>
                    <div className='InnerTransactionDiv1'> <p>hi</p></div>
                    <div className='InnerTransactionDiv2'><p>d4654 </p></div>
                    <div className='InnerTransactionDiv3'> <p>Validated by nbcdn4</p></div>
                </div>
                <div className='TransactionDiv'>
                    <div className='InnerTransactionDiv1'> <p>hi</p></div>
                    <div className='InnerTransactionDiv2'><p>d4654 </p></div>
                    <div className='InnerTransactionDiv3'> <p>Validated by nbcdn4</p></div>
                </div>
                <div className='TransactionDiv'>
                    <div className='InnerTransactionDiv1'> <p>hi</p></div>
                    <div className='InnerTransactionDiv2'><p>d4654 </p></div>
                    <div className='InnerTransactionDiv3'> <p>Validated by nbcdn4</p></div>
                </div>
            </div>
            <button onClick={AddAccountinner}>VCclicdsibc</button>
        </div>
    )
}

export default HomeScreen