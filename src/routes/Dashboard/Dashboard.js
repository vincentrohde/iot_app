import React, { Component } from 'react';

import Navigation from '../../components/Navigation/Navigation';
import Lane from '../../components/Lane/Lane';
import '../Page.scss';

class Dashboard extends Component {

    state = {
        chairs: [],
        rooms: [
            {
                id: 101,
                name: 'Physik'
            }
        ]
    }

    constructor(props) {
        super();
        this.probs = props;
    }

    render() {
        return (
            <div className="Page">
                    <Navigation />
                    <Lane information={this.state}/>
            </div>
        )
    }
};

export default Dashboard;