import React, { Component } from 'react'

export default class HandleEvent extends Component {
    
    showMessage = () => {
        alert('0902889710');
    }
    
    showTitle = (tenLop) => {
        console.log(`Hello ${tenLop}`);
    }
    render() {
        const name = 'Thành';
        const handleClick = (event) => {
            alert('Hello cybersoft');
        }
        return (
            <div>
                Xử lý sự kiện trong react
                <br></br>
                <button id="btnClick" onClick={handleClick}>Click me !!!</button>

                <button onClick={() =>{
                    alert(`hello ${name}`);
                    this.showTitle('ThanhDepZai');
                }}>show Message</button>
            </div>
        )
    }
}

