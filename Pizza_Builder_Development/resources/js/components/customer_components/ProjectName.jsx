import React from 'react';
import { Link } from 'react-router-dom';

const ProjectName = ( props ) => {
    return (
        <div className="menu-customer__top">
            <Link to='/' >
                <h4 className="menu-customer__project-name">PIZZA</h4>
                <h4 className="menu-customer__project-name">PIZZA</h4>
            </Link>
        </div>
    )
}

export default ProjectName;
