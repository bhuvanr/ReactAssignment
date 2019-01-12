import React from 'react'


const todoRows = (props) => {

    return(
        <tr>
                    
        <td style={{ textAlign: "center" }}>{props.element.todo}</td>

        <td style={{ textAlign: "center" }}>{props.element.estTime}</td>

        {
        props.notes[props.index].startTime === 0 ? 
        <td style={{ textAlign: "center" }}>
             <div style={{ width: "100%" }}>
                <button name={props.index} className="btn btn-primary btn-sm" type="button" variant="contained" color="primary" onClick={(e) => props.start(e)}>Start</button>
            </div>
        </td> 
        : 
        <td style={{ textAlign: "center" }}>{getFormatTime(props.notes[props.index].startTime)}</td>
        }

        {
        props.notes[props.index].endTime === 0 ? 
        <td style={{ textAlign: "center" }}>
            <div style={{ width: "100%" }}> 
                <button name={props.index} className="btn btn-primary btn-sm" type="button" variant="contained" color="primary" onClick={(e) => props.end(e)}>End</button> 
            </div>
        </td> 
        : 
        <td style={{ textAlign: "center" }}>{getFormatTime(props.notes[props.index].endTime)}</td>
        }

        {
        props.notes[props.index].endTime !== 0 ? 
        <td style={{ textAlign: "center" }}>{getFormatTime(props.notes[props.index].endTime - props.notes[props.index].startTime)}</td> 
        : 
        <td style={{ textAlign: "center" }}>--:--:--</td>
        }

    </tr>
    )
}

//Getting Current time in format HH:MM:SS
const getFormatTime = (timiInMilliseconds) => {
    return new Date(timiInMilliseconds).toISOString().substr(11,8)
}


export default todoRows;