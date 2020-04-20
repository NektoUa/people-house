import React from 'react';
import History from './History'

export default function ArticleList({ about }) {
    const info = about.map(elem =>
        <article key={elem.id}><History elem={elem} /></article>
    )
    return (
        <div>
            {info}
        </div>
    )
}