import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import axios from 'axios';
import { connect, actions, subscribe } from "../stores/Store";

import DashboardPage from '../routes/Dashboard/Dashboard';
import CreateOrderPage from '../routes/CreateOrder/CreateOrder';
import IntroPage from '../routes/IntroPage/IntroPage';
import RoomOverview from "../routes/RoomOverview/RoomOverview";

class AppRouter extends Component {

    constructor(props) {
        super();
        this.props = props;
        //this.server = 'http://10.51.7.199:4000';
        this.initializeListener();
    }

    componentWillMount() {
        this.getStateFromServer();
    }

    initializeListener() {
        const subscriber = this.addStoreListener();
    }

    getStateFromServer() {

        axios.get(this.server)
            .then(res => {
                const { data } = res;
                actions.addState(data);
            })
            .catch(error => {
                const data = {
                    orders: [
                        {
                            id: 1,
                            name: "Block",
                            chairCount: 4,
                            positions: []
                        }
                    ],
                    rooms: [
                        {
                            id: 5,
                            name: 'Sport',
                            orders: [1, 2, 3]
                        },
                        {
                            id: 3,
                            name: 'Biologie',
                            orders: [1, 2, 3]
                        }
                    ]
                };

                actions.addState(data);

                //console.log('Fallback State added.');
                //console.log('Error occurred in Server request: ', error);
            });
    }

    addStoreListener() {
        subscribe((action, state) => {
            if(action !== 'updateChairs') {
                const newState = {
                    orders: state.orders,
                    rooms: state.rooms
                }

                axios.post(this.server, newState)
                    .then(function (res) {
                        const { data } = res;
                        console.log(data);
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            }
        });
    }

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={DashboardPage} />
                    <Route exact path="/intro" component={IntroPage} />
                    <Route exact path="/create" component={CreateOrderPage} />
                    <Route exact path="/room/:id" component={RoomOverview} />
                    <Redirect to="/" />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default connect(state => ({ context: state }))(AppRouter);
