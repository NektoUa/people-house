import React, { Component } from 'react';
import ArticleList from './ArticleList'
import about from './about'

export default class ArticleHistory extends Component {
    render() {
        return (
            <div>
                <ArticleList about={about} />
            </div>
        )
    }
}