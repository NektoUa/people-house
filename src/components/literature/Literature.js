import React, { Component } from 'react';

import main from './Main.module.css';
import Form from './form/form'


class Literature extends Component {
    constructor(props) {
        super(props);
        this.state = {
            book: this.props.book,
            // addBook: this.props.addBook
        }
    }
    handleAddBook = (data) => {
        const nextBook = [...this.state.book, data]
        // this.props.addBook(data)
        this.setState({ book: nextBook })

    }

    render() {
        const books = this.state.book;
        const bookList = books.map((elem) => {
            return <li key={elem.author}>{elem.author} {elem.title} / {elem.publish}. - {elem.year}</li>
        });
        return (
            <div className={main.lit} id="begin">
                <h2>Де можна прочитати про пам'ятку</h2>
                <ol>
                    {bookList}
                </ol>
                <Form onAddBook={this.handleAddBook} addBook={this.props.addBook} />
            </div >
        );
    }
}



export default Literature;
