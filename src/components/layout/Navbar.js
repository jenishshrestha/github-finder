import React from 'react';
import PropTypes from 'prop-types';

const Navbar = ({ title }) => {
    return (
        <nav className="navbar bg-primary">
            <h1>
                {title}
            </h1>
        </nav>
    );
}

//setting default Props
Navbar.defaultProps = {
    title: 'Github Finder'
};

// props validation
Navbar.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Navbar
