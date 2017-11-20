// src/components/CarsMenu.js

import React from 'react';
import { Link } from 'react-router';

export default class CarsMenu extends React.Component {

    render() {

        return (
            <nav className="cars-menu">
                {this.props.cars.map(menuCar => {
                    return <Link key={menuCar.id} to={`/car/${menuCar.id}`} activeClassName="active">
                        {carAthlete.name}
                    </Link>;
                })}
            </nav>
        );
    }
}
