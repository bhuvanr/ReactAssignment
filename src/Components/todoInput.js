import React from 'react'


class TodoInput extends React.Component {
    constructor() {
        super();
        this.state = {
            todo: '',
            time: ''
        }
    }


    //On Handling Input Boxes
    handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        this.setState({
            [name]: value
        })
    }


    //reset States on SubmitTodo
    resetState = () => {
        this.setState({
            todo: '',
            time : ''
        })
    }
    
    render() {
        const validator = this.state.todo.trim() === '' || this.state.time.trim() === '' || Number(this.state.time.trim()) <= 0
        return (
            <div style={{ textAlign: "center" }}>
                <div className="form-group row" >
                    <label className="col-sm-3 col-form-label">Todo :  </label>
                    <div className="col-sm-6">
                        <input className="form-control" type="text" name="todo" placeholder="Add Todo" onChange={(e) => { this.handleInput(e) }} value={this.state.todo} />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-3 col-form-label">Estimated Time (minutes) : </label>
                    <div className="col-sm-6">
                        <input className="form-control" type="number" min="0" name="time" placeholder="Estimated time" onChange={(e) => { this.handleInput(e) }} value={this.state.time} />
                    </div>
                </div>
                {validator ?
                    <button title="Please add todo and valid estimated time" disabled className="btn btn-lg" type="button" variant="contained" >
                        Submit
                                    </button>
                    : <button onClick={(e)=>{this.props.submitNote(e,this.state.todo, this.state.time); this.resetState();}} className="btn btn-primary btn-lg" type="button" variant="contained" color="primary">
                        Submit
                    </button>
                }
            </div>
        )
    }

}

export default TodoInput;