import React from 'react';

import Rooms from '../../components/Rooms/Rooms';

import './Lane.scss';

const Lane = (props) => {
    const { information } = props;

    return (
        <div className="Lane">
            <Rooms rooms={information.rooms} />
        </div>
    )
};

export default Lane;