import React, { Component } from 'react';
import main from './Navigation.module.css';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom'
import Begin from '../begin/Begin'
import ArticleLiterature from '../literature/ArticleLiterature'
import ArticleHistory from '../History/ArticleHistory'

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

                    <NavLink to='/'>Початкова</NavLink>
                    <NavLink to='/history'>Історія</NavLink>
                    <NavLink to='/about'>Опис об'єкта</NavLink>
                    <NavLink to='/draft'>Креслення</NavLink>
                    <NavLink to='/literature'>Література</NavLink>
                </div>
                <div id='begin'>
                    <Switch>
                        <Route exact path='/' component={Begin}></Route>
                        <Route exact path='/history' component={ArticleHistory}></Route>
                        <Route exact path='/literature' component={ArticleLiterature}></Route>
                    </Switch>
                </div>


            </Router>
        );
    }
}



export default Navigation