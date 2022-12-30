import React, { useEffect, useState } from 'react'
import './Recovery.css'
import { Link } from "react-router-dom";
const SetArray = [];
// let SetArray1 = []

function RecoveryPhase() {
    const [newArray, setnewArray] = useState([])
    const [updatedarray, setupdatedarray] = useState([])
    let i = 0;
    useEffect(() => {
        for (i = 0; i < 12; i++) {
            if (i < 12) {
                console.log(makeid(5));
            }
            else {
                return;
            }
        }
        setDataToAsync();
        // console.log(SetArray1)

    }, [])
    const setDataToAsync = async () => {
        try {
            const value1 = await localStorage.getItem('RecoveryData1')
            const value2 = await localStorage.getItem('RecoveryData2')
            const value3 = await localStorage.getItem('RecoveryData3')
            const value4 = await localStorage.getItem('RecoveryData4')
            const value5 = await localStorage.getItem('RecoveryData5')
            const value6 = await localStorage.getItem('RecoveryData6')
            const value7 = await localStorage.getItem('RecoveryData7')
            const value8 = await localStorage.getItem('RecoveryData8')
            const value9 = await localStorage.getItem('RecoveryData9')
            const value10 = await localStorage.getItem('RecoveryData10')
            const value11 = await localStorage.getItem('RecoveryData11')
            const value12 = await localStorage.getItem('RecoveryData12')


            if (value1 == null && value2 == null && value3 == null && value4 == null && value5 == null && value6 == null && value7 == null && value8 == null && value9 == null && value10 == null && value11 == null && value12 == null) {
                const d1 = SetArray[0]
                await localStorage.setItem('RecoveryData1', d1)
                const d2 = SetArray[1]
                await localStorage.setItem('RecoveryData2', d2)
                const d3 = SetArray[2]
                await localStorage.setItem('RecoveryData3', d3)
                const d4 = SetArray[3]
                await localStorage.setItem('RecoveryData4', d4)
                const d5 = SetArray[4]
                await localStorage.setItem('RecoveryData5', d5)
                const d6 = SetArray[5]
                await localStorage.setItem('RecoveryData6', d6)
                const d7 = SetArray[6]
                await localStorage.setItem('RecoveryData7', d7)
                const d8 = SetArray[7]
                await localStorage.setItem('RecoveryData8', d8)
                const d9 = SetArray[8]
                await localStorage.setItem('RecoveryData9', d9)
                const d10 = SetArray[9]
                await localStorage.setItem('RecoveryData10', d10)
                const d11 = SetArray[10]
                await localStorage.setItem('RecoveryData11', d11)
                const d12 = SetArray[11]
                await localStorage.setItem('RecoveryData12', d12)
            }
            else {
                console.log("manu")
                const SetArray1 = []
                console.log(SetArray1)
                const data0 = await localStorage.getItem('RecoveryData1')
                SetArray1.push(data0)
                const data1 = await localStorage.getItem('RecoveryData2')
                SetArray1.push(data1)
                const data2 = await localStorage.getItem('RecoveryData3')
                SetArray1.push(data2)
                const data3 = await localStorage.getItem('RecoveryData4')
                SetArray1.push(data3)
                const data4 = await localStorage.getItem('RecoveryData5')
                SetArray1.push(data4)
                const data5 = await localStorage.getItem('RecoveryData6')
                SetArray1.push(data5)
                const data6 = await localStorage.getItem('RecoveryData7')
                SetArray1.push(data6)
                const data7 = await localStorage.getItem('RecoveryData8')
                SetArray1.push(data7)
                const data8 = await localStorage.getItem('RecoveryData9')
                SetArray1.push(data8)
                const data9 = await localStorage.getItem('RecoveryData10')
                SetArray1.push(data9)
                const data10 = await localStorage.getItem('RecoveryData11')
                SetArray1.push(data10)
                const data11 = await localStorage.getItem('RecoveryData12')
                SetArray1.push(data11)
                console.log(SetArray1)
                const newData = SetArray1;
                setupdatedarray(newData)
                console.log(updatedarray)

                // console.log("I am user vakue", userID)
            }
        } catch (e) {
            console.log(e)
        }
    }
    function makeid(length) {
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        SetArray.push(result)
        setnewArray(SetArray);
        // console.log(SetArray)
        // console.log(newArray)

        return result;
    }



    return (
        <div className='R_Main_Div'>
            <div className='R-inner_div-text'>Secret Recovery Phrase</div>
            <div className='Inner_Info'>Your secret recovery Phrase makes it easy to back up and restore your account</div>
            <div className='Inner_Info'>Warning: Never disclose your secret Recovery Phrase. Anyone this phrase can take your Ether forever</div>
            {/* <div className='Option_Rdiv'>
                couple inflict wash month vendor radio differ stumble update whip water glass
            </div> */}
            <div className='Option_Rdiv'>
                {
                    updatedarray.length == 0 ? <h1>nothing selected</h1> :
                        updatedarray.map((item) => (
                            <div className="user" style={{ color: "black", display: "inline-block" }}>{item}</div>
                        ))
                }

            </div>
            <div className='RButton'>
                <button className='Inner_rbutton1'>Remind me later</button>
                <button className='Inner_rbutton2'> <Link to="/MainScreen" style={{ color: "white", textDecoration: "none" }}>Next</Link></button>
            </div>
        </div>
    )
}

export default RecoveryPhase