import React from 'react';
import Typical from 'react-typical';
import {BetterNavMenu} from '../navbar/BetterNavMenu';

const Header = () => {
    return (
        <div id="header">
            <BetterNavMenu/>
            <Typical
            steps={['Leo', 1000, 'Full stack developer📚', 1000, 'Tennis fan🎾', 1000, 'Gamer🎮', 1000]}
            loop={Infinity}
            wrapper="h1"
            />
        </div>
    )
}

export default Header;