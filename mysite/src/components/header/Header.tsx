import React from 'react';
import { Container } from 'react-bootstrap';
import Typical from 'react-typical';

const Header = () => {
    return (
        <div id="header">
        <Typical
          steps={['Leo', 1000, 'Motherfucker!', 500]}
          loop={Infinity}
          wrapper="p"
        />
        </div>
    )
}

export default Header;