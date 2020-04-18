import React, { Component } from 'react';
import main from './Main.module.css';


class Literature extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "navicProGarmin",
            show: "TrTrTr"
        }
    }
    // showForm = () => {
    //     this.setState({ show: "hide" })
    // }
    render() {
        const books = this.props.bk;
        const bookList = books.map((elem) => {
            return <li key={elem.author}>{elem.author} {elem.title} / {elem.publish}. - {elem.year}</li>
        });
        return (
            <div className={main.lit} id="begin">
                <h2>Де можна прочитати про пам'ятку</h2>
                <ol>
                    {bookList}
                </ol>
                {/* <button type="button" onClick={showForm}>Додати</button> */}
                <p>{this.state.show}</p>
            </div >
        );
    }
}



export default Literature;
