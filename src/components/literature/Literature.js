import React, { Component } from 'react';
import main from './Main.module.css';
import Form from './form/form'


class Literature extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bk: this.props.bk,
        }
    }
    handleAddBook = (data) => {
        const nextBook = [data, ...this.state.bk]
        this.setState({ bk: nextBook })
    }

    render() {
        const books = this.state.bk;
        const bookList = books.map((elem) => {
            return <li key={elem.author}>{elem.author} {elem.title} / {elem.publish}. - {elem.year}</li>
        });
        return (
            <div className={main.lit} id="begin">
                <h2>Де можна прочитати про пам'ятку</h2>
                <ol>
                    {bookList}
                </ol>
                <Form onAddBook={this.handleAddBook} />
            </div >
        );
    }
}



export default Literature;
