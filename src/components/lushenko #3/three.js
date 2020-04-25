import React from 'react'

export default class Lush extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: 'Hello',
            text2: 555,
            first_name: '',
            age: 0,
        }

    }
    myInput = (e) => {
        console.log(e.target.name)
        this.setState({ text: e.target.value })
    }

    submitForm = (e) => {
        e.preventDefault();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.submitForm}>
                    <input onChange={this.myInput} name="text" />
                    <input type="number" name="age" onChange={this.myInput} />
                    <p>{this.state.text}</p>
                    <input type="submit" />
                </form>
            </div>

        )
    }
}

//                 <button onClick={this.showText}>Push1</button>
{/* <input onInput={this.showText2} />
<div onMouseMove={this.move}>lorem</div>
<p>{this.state.text}</p>
<p>{this.state.text2}</p>

showText() {
    console.log('work');
    console.log(this);
    this.setState({
        text: "hi",
    });
}
showText2(e) {
    this.setState({ text2: e.target.value });
    console.log(e.target.value);
}
move(e) {
    console.log(e.target.textContent);
}
this.showText = this.showText.bind(this);
        this.showText2 = this.showText.bind(this); */}