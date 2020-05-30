import React, { Component } from 'react';

import Auxi from '../Auxi/Auxi';
import classes from './Layout.module.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';

class Layout extends Component {
    render () {
        return (
            <Auxi>
                <Toolbar />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Auxi>
        )
    }
}

export default Layout;