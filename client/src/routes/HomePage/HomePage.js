import React, { Component } from 'react';

import Example from '../../components/Example/Example';
import CTAButton from '../../components/CTAButton/CTAButton';

class HomePage extends Component {
    constructor(props) {
        super();
        this.props = props;
    }

    componentDidMount() {
        document.title = 'IOT APP';
    }

    render() {
        return (
            <div className="Page">
                <Example />
                <CTAButton />
            </div>
        )
    }
};

export default HomePage;