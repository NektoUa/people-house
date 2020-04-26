import React, { Component } from 'react';
import Literature from './Literature'
import book from './book'

export default class ArticleLiterature extends Component {
    render() {
        return (
            <div>
                <Literature bk={book} />
            </div>
        )
    }
}