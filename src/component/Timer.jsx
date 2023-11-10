import React, { Component } from 'react'

class Timer extends Component{
    state = { 
        date:new Date()
    };

    dateUpdate(){
        setInterval(()=>{
            this.setState({date:new Date()});
        }, 100);
    }

    render(){
        return ( 
            <div className='date'>
                <p>{this.state.date.toLocaleTimeString()}</p>
                {this.dateUpdate()}
            </div>
        );
    }
}

export default Timer;