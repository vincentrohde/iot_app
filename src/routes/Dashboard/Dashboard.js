import React, { Component } from 'react';

import Navigation from '../../components/Navigation/Navigation';
import Lane from '../../components/Lane/Lane';
import './Dashboard.scss';
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

    constructor(props)
    {
        super();
        this.probs = props;
    }

    render()
    {
        return (
            <div className="DashboardPage wavy-gradient">
                <div className="Navigation-container">
                    <Navigation />
                </div>
                <div className="Lane-container">
                    <h2 className="title">Räume</h2>
                    <Lane information={this.state}/>
                    <Lane information={this.state}/>
                    <Lane information={this.state}/>
                </div>
            </div>
        )
    }
};

export default Dashboard;