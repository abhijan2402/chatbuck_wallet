import React, { useState } from 'react'
import './recoverArray.css'
function RecoverArray() {
    const LanguageArray = [];
    const MainArray = []
    const [newArray1, setnewArray1] = useState([])
    const [SelectedTech] = useState([])
    const [myStyle, setMyStyle] = useState(false);


    const data = [
        { id: 1, name: "couple", selected: false },
        { id: 2, name: "differ", selected: false },
        { id: 3, name: "guess", selected: false },
        { id: 4, name: "inflict", selected: false },
        { id: 5, name: "month", selected: false },
        { id: 6, name: "radio", selected: false },
        { id: 7, name: "stumble", selected: false },
        { id: 8, name: "update", selected: false },
        { id: 9, name: "vendor", selected: false },
        { id: 10, name: "wash", selected: false },
        { id: 11, name: "wash", selected: false },
        { id: 12, name: "wash", selected: false },
    ];
    const NewArray = (user) => {
        // console.log("hi")
        // console.log(user)
        MainArray.push(user)
        console.log(MainArray)

        // setnewArray1(MainArray)
        // console.log(newArray1)
        // console.log(MainArray)
        // const done = MainArray
        // setnewArray1()
        // console.log(newArray1)
        // setnewArray(MainArray)
        // console.log(newArray)
        // const done = MainArray;
        // setnewArray(done)
    }
    const UpdateClicked = (id) => {
        console.log(id)
        setMyStyle(prevState => ({
            ...myStyle,
            [id]: !prevState[id]
        }))
        const rowToChange = data.findIndex(item => {
            return item.id === id;
        });
        if (data[rowToChange].selected == false) {
            // console.log("i am in if")
            data[rowToChange].selected = !data[rowToChange].selected;
            DataFilter();
        }
        else {
            // console.log("i am in else")
            data[rowToChange].selected = false
        }

        // console.log(data);

    }
    const DataFilter = () => {
        SelectedTech.push(...data.filter(datas => {
            return datas.selected === true;
        }))
        let i = 0;
        for (i = 0; i < SelectedTech.length; i++) {
            LanguageArray.push(SelectedTech[i].Language)
        }
        // console.log(SelectedTech)
    }
    return (
        <>
            <div className='Main_divRA'>
                <div className='RA_div'>Confirm your Secret Recovery Phrase</div>
                <div className='RA_div_text'>Please select each phrase in order to make sure it is correct</div>
                <div className='userData' style={{ border: "0.8px solid grey", marginTop: "3%", marginBottom: "2%", borderRadius: "10px" }} >
                    {
                        SelectedTech.length == 0 ? <h1>nothing selected</h1> :
                            SelectedTech.map((item) => (
                                <div className="user" style={{ backgroundColor: "skyblue", color: "white" }}>{item.name}</div>
                            ))
                    }
                </div>
                <div className='userData'>
                    {
                        data.map((user) => (
                            <div className="user" style={{
                                backgroundColor: myStyle[`${user.id}`]
                                    ? "skyblue"
                                    : "white"
                            }} onClick={() => { UpdateClicked(user.id) }}>{user.name}</div>
                        ))
                    }
                </div>
                <div className='RABtndiv'><button className='RABtn'>Confirm</button></div>
            </div>
        </>
    )
}

export default RecoverArray