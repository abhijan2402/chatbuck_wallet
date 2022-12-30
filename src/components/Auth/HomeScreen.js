import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './HomeScreen.css';

function HomeScreen() {

    useEffect(() => {


    }, [])

    const Check = () => {
        fetch('https://43e2-103-170-153-72.in.ngrok.io/wallet', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
                "Accept": "application/json"
            },
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                // Handle data
            })
            .catch((err) => {
                console.log(err.message);
            });
    }

    const Check1 = () => {
        fetch('https://3237-103-170-153-72.in.ngrok.io/', {
            method: 'get',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
                "Accept": "application/json",
                "access-control-allow-headers": "Content-Type",
                "access-control-allow-origin": "*",
                "content-type": "application/json"
            },
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                // Handle data
            })
            .catch((err) => {
                console.log(err.message);
            });
    }


    const AddAccountinner = async () => {
        await axios({
            method: 'get',
            url: 'https://3237-103-170-153-72.in.ngrok.io/transaction',
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                "Accept": "application/json"
            }

        }).then(function (response) {
            console.log("hi")
            console.log("response", JSON.stringify(response))
            // ReceiveMsg();
        }).catch((e) => {
            console.log(e);
        });
    }

    const getToddies = async () => {
        console.log("do")
        try {
            await axios.get('https://3237-103-170-153-72.in.ngrok.io/',
                {
                    headers: {
                        "Access-Control-Allow-Methods": "get",
                        'x-rapidapi-host': 'https://ac6a-103-170-153-30.in.ngrok.io/',
                        "Access-Control-Allow-Origin": "*",
                        "Access-Control-Allow-Headers": "*"
                    }
                })
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
            <button onClick={getToddies}>axios</button>
            <button onClick={Check}>wallet</button>
            <button onClick={Check1}>blockchain</button>


        </div>
    )
}

export default HomeScreen