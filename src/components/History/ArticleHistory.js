import React, { Component } from 'react';
// import ArticleList from './ArticleList'
import History from './History'

export default class ArticleHistory extends Component {
    // constructor(props) {
    //     super(props);
    //     this.about = this.props.about
    // }
    render() {
        const info = this.props.about.map(elem =>
            <article key={elem.id}><History elem={elem} /></article>
        )
        return (
            <div>
                {info}

            </div >
        )
    }
}