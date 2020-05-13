import React, { Component } from 'react';
import main from './Navigation.module.css';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom'
import Begin from '../begin/Begin'
import ArticleHistory from '../History/ArticleHistory'
import About from '../about/About'
import Draft from '../draft/Draft'
import ArticleLiterature from '../literature/ArticleLiterature'


class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "navicProGarmin"
        }
    }
    fun = () => {
        if (this.state.title === "navicProGarmin") {
            this.setState({ title: "hide" });
        } else {
            this.setState({ title: "navicProGarmin" });
        }

        console.log("lll")
    }
    render() {
        return (
            <Router>
                <div className={main.nav} id="nav">
                    <ul >
                        <li className={main.liNav}><NavLink to='/'>Початкова</NavLink></li>
                        <li className={main.liNav}><NavLink to='/history'>Історія</NavLink></li>
                        <li className={main.liNav}><NavLink to='/about'>Опис об'єкта</NavLink></li>
                        <li className={main.liNav}><NavLink to='/draft' >Креслення</NavLink></li>
                        <li className={main.liNav}><NavLink to='/literature'>Література</NavLink></li>
                    </ul>
                </div>
                <div id='begin'>
                    <Switch>
                        <Route exact path='/' component={Begin} ><Begin /></Route>
                        <Route exact path='/history' component={ArticleHistory} ><ArticleHistory about={this.props.about} /></Route>
                        <Route exact path='/about' component={About}></Route>
                        <Route exact path='/draft' component={Draft}></Route>
                        <Route exact path='/literature' component={ArticleLiterature} ></Route>
                    </Switch>
                </div>


            </Router >
        );
    }
}



export default Navigation