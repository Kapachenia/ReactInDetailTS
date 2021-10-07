import React, {useState} from "react";

type PropsType = {
    // on: boolean
    // setOn: any
}

function UncontrolledOnOff(props: PropsType) {

    const [on, setOn] = useState<any>(false)

    const onStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        padding: "2px",
        backgroundColor: on ? "green" : "white"
    }

    const offStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "2px",
        padding: "2px",
        backgroundColor: on ? "white" : "red"
    }

    const indicatorStyle = {
        width: "10px",
        height: "10px",
        borderRadius: "5px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        backgroundColor: on ?  "green" : "red"
    }

    return (
        <div>
            <div onClick={() => setOn(true)} style={onStyle}>On</div>
            <div onClick={() => setOn(false)} style={offStyle}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    )
}

export default UncontrolledOnOff