import React from 'react'

const TodoHead = () => {
    return (
        <thead >
            <tr >
                <th> <span className="icon-question-circle1" style={{ marginRight: "2px" }} />ToDo</th>
                <th> <span className="icon-clock" style={{ marginRight: "2px" }} />Estimated Time(minutes)</th>
                <th> <span className="icon-clock" style={{ marginRight: "2px" }} />Start Time(HH:MM:SS)</th>
                <th> <span className="icon-clock" style={{ marginRight: "2px" }} />End Time(HH:MM:SS)</th>
                <th> <span className="icon-clock" style={{ marginRight: "2px" }} />Total Time(HH:MM:SS)</th>
            </tr>
        </thead>
    )
}

export default TodoHead;