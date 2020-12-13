import React, {useState, useEffect } from 'react';
import classnames from 'classnames';
import {BetterNavMenu} from '../navbar/BetterNavMenu';

const Header = () => {
    const [previousScrollPos, setPreviousScrollPos] = useState({
        prevScrollPos: window.pageXOffset,
        visible: true
    });

    useEffect(() => {
        const handleScroll = () => {
            const { prevScrollPos } = previousScrollPos;
        
            const currentScrollPos = window.pageYOffset;
            const visible = prevScrollPos > currentScrollPos || window.pageYOffset === 0;
        
            setPreviousScrollPos({
                prevScrollPos: currentScrollPos,
                visible
            });
        };
        
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    })

    return (
        <div id="header" className={classnames('navbar', {
            'navbar-hidden': !previousScrollPos.visible})}>
            <BetterNavMenu />
        </div>
    )
}

export default Header;