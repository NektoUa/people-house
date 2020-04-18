import React, { Component } from 'react';
// import main from './Main.module.css';

class History extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: true
        }
    }
    handleClick = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
        console.log('fff');
    }
    render() {
        const istoria = this.props.historia;
        // const ButtonPlus = <button type="button" onClick={this.handleClick}>{this.state.isOpen ? 'Згорнути' : 'Розгорнути'}</button>;
        const historyList = istoria.map((elem, index) => {
            return (
                <div key={index} >
                    <h2 className={elem.id} key={istoria.period}> {elem.period}</h2>
                    <button type="button" onClick={this.handleClick} key={istoria.id}>{this.state.isOpen ? 'Згорнути' : 'Розгорнути'}</button>
                    {/* {ButtonPlus} */}
                    {this.state.isOpen && <p key={istoria.id}>{elem.text}</p>}
                </div >
            )
        })
        return (
            <div id="begin" >
                {/* <h2>Де можна прочитати про пам'ятку</h2> */}
                < div >
                    {historyList}
                </div>
            </div >
        );
    }
}


export default History

//  <p key={istoria.id}>{elem.text}</p>