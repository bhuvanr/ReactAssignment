import React from 'react'
import '../Styles/App.css'
import TodoHead from '../Components/todohead'
import TodoInput from '../Components/todoInput'
import TodoRows from '../Components/todoRows'

class ToDoList extends React.Component {
    constructor() {
        super();
        this.state = {
            notes: [],
        }
    }

    //Onclicking Submit Button
    submitNote = (e,todo,time) => {
        let newNote = {
            todo: todo,
            estTime: time,
            startTime: 0,
            endTime: 0
        }
        this.setState({
            notes : [...this.state.notes, newNote]
        })
    }

    //Getting current time in milliseconds
    getTimeMilli = () => {
        var d = new Date();
        return d.getTime();
    }


    //Onclick Of starting a ToDO
    start = (e) => {
        let time = this.getTimeMilli();
        this.setState({
            notes: this.state.notes.map((el, i) => (i == e.target.name ? Object.assign({}, el, { startTime: time }) : el))
        })
    }

    //Onclick of ending the ToDO
    end = (e) => {
        let time = this.getTimeMilli();
        if (this.state.notes[e.target.name].startTime != 0) {
            this.setState({
                notes: this.state.notes.map((el, i) => (i == e.target.name ? Object.assign({}, el, { endTime: time }) : el))
            })
        }
        else {
            alert("Please Start the task first")
        }
    }


    //get estimated time average
    getEstAvg = () =>{
       let totalEst =  this.state.notes.reduce((total, current)=> {
           console.log(total,current.estTime)
             return total + Number(current.estTime); 
            }, 0)
        return Math.round(totalEst/this.state.notes.length*100)/100
    
    }

    //get total time average
    getTotAvg = () =>{
        let todos = this.state.notes.slice();
        let count = 0;
        let sumTotal = 0;
      for(var i=0; i<todos.length; i++){
          if(todos[i].endTime !== 0){
              count = count + 1;
              sumTotal = sumTotal + (todos[i].endTime-todos[i].startTime)
          }
      }
      if(count != 0){
          console.log(count, sumTotal, (sumTotal/count)/60000)
        return Math.round(((sumTotal/count)/60000)*100)/100
      }
    }


    render() {
        const todo = this.state.notes.map((element, index) => {
            return (
                <TodoRows key = {index} 
                element = {element} 
                index={index} 
                notes={this.state.notes} 
                start={(e)=>{this.start(e)}} 
                end ={(e)=>{this.end(e)}}
                />
            )
        })

        return (
            <div className="container">
                <div className="scores-block1 clearfix">
                    <div className="bg-white shadow-sm Assessment_Results">
                        <TodoInput submitNote = {(e,todo,time)=>this.submitNote(e,todo,time)}/>
                        {
                        this.state.notes.length !== 0 && 
                        <div>
                        <table className="table" style={{ marginTop: "2rem" }}>
                           <TodoHead />
                            <tbody >
                                {todo}
                            </tbody>
                        </table>
                        <div style={{textAlign : "center"}}> Average Estimated Time(minutes) : {this.getEstAvg()}</div>
                        {this.getTotAvg() != null && <div style={{textAlign : "center", marginTop : "1rem"}}> Average Total Time(minutes) : {this.getTotAvg()}</div>}
                        {this.getTotAvg() != null && <div style={{textAlign : "center", marginBottom : "4rem", marginTop : "1rem"}}> Deviation(minutes) : {this.getTotAvg() - this.getEstAvg()}</div>}                        
                        </div>
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default ToDoList;