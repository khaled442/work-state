import React, { Component } from 'react'

export class Count extends Component {
    constructor(props) {
        super(props)
    console.log("constructor()")
        this.state = {
             count:0
        }
    }
    
    // state = {
    //     count:0
    // }
    componentDidMount(){
        console.log("componentDidMount()")
        setInterval(() => {
            this.increment()
            
        }, 1000);
    }
    componentDidUpdate(){
        console.log("componentDidUpdate()")
    }
    componentWillUnmount(){
        console.log("componentWillUnmount()")
    }
    
    increment= (() =>{
        this.setState({count :this.state.count + 1})
    })
    decrement= (() =>{
        if (this.state.count > 0) {
            this.setState({count :this.state.count - 1})
        }else {
            console.log('Be carfull')
        }
        
    })
    
    render() {
        console.log("render()")
        return (
            <div>
                <button onClick={this.increment}>+</button>
                <h1>{this.state.count}</h1>
                <button onClick={this.decrement}>-</button>
            </div>
        )
    }
}

export default Count
