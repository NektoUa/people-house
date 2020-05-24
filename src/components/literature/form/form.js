import React, { Component } from 'react';

import form from './Form.module.css';

export default class Form extends Component {
    state = {
        author: '',
        title: '',
        publish: '',
        year: '',
        id: '',
        check: true,
    }
    validate = () => {
        const { author, title, publish, year, check } = this.state
        if (author.trim() && title.trim() && publish.trim() && year.trim && check) {
            return true
        }
        return false
    }
    onBtnClickHandler = (e) => {
        e.preventDefault()
        const { author, title, publish, year } = this.state
        this.props.onAddBook({
            id: +new Date(),
            author,
            title,
            publish,
            year
        })
    }
    handleChange = (e) => {
        const { id, value } = e.currentTarget
        this.setState({ [id]: e.currentTarget.value })
    }
    onCheckboxChange = (e) => {
        this.setState({ check: e.currentTarget.checked })
    }
    render() {
        const { author, title, publish, year, check } = this.state
        return (
            <form className="add" id={form.add}>
                <label for="author">Прізвище автора</label>
                <input
                    onChange={this.handleChange}
                    type='text'
                    className='add__author'
                    id='author'
                    placeholder='Автор'
                    value={author}
                />
                <label for="title">Назва роботи</label>
                <input
                    onChange={this.handleChange}
                    type='text'
                    className='add__title'
                    id='title'
                    placeholder='Введіть назву'
                    value={title}
                />
                <label for="publish">Де видано</label>
                <input
                    onChange={this.handleChange}
                    type='text'
                    className='add__publish'
                    id='publish'
                    placeholder='Видавництво'
                    value={publish}
                />
                <label for="year">Рік видання</label>
                <input
                    onChange={this.handleChange}
                    type='number'
                    className='add__year'
                    id='year'
                    placeholder='Рік'
                    value={year}
                />

                <label className='add__checkrule'>
                    <input type='checkbox' onChange={this.onCheckboxChange} /> Я згоден з правилами
        </label>
                <button
                    className={form.btn}
                    onClick={this.onBtnClickHandler}
                    disabled={!this.validate()}>
                    Додати
        </button>
            </form>
        )
    }
}