import React from 'react';
import './CTAButton.scss';
import { Link } from 'react-router-dom';

const CTAButton = (props) => {
    const title = props.title || 'Los';
    const linkTo = props.link || '/';

    return (
        <Link className="CTAButton" to={linkTo}>{title}</Link>
    );
}

export default CTAButton;
