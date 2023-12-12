import AppLogoSvg from 'components/AppLogo/AppLogoSvg';
import React from 'react';

import {
    menuItemAnimation,
    menuListAnimation,
    menuWrapperAnimation,
} from 'utils/animations';
import {
    headerItemsIfLoggedIn,
    headerLinkItems,
    headerSignItems,
} from 'utils/constants';
import {
    MenuWrapper,
    MenuLink,
    MenuList,
    MenuItem,
    MenuImageWrapper,
} from './Menu.style';
import MenuSvg from './MenuSvg';

interface MenuNavigationProps {
    toggleMenu: () => void;
}

function MenuNavigation({ toggleMenu }: MenuNavigationProps) {
    return (
        <MenuWrapper variants={menuWrapperAnimation}>
            <MenuImageWrapper>
                <AppLogoSvg />
            </MenuImageWrapper>
            <MenuList variants={menuListAnimation}>
                {headerLinkItems.map(({ id, text, link, color }) => (
                    <MenuItem
                        key={id}
                        color={color}
                        variants={menuItemAnimation}
                    >
                        <MenuLink to={link} end onClick={toggleMenu}>
                            {text}
                        </MenuLink>
                    </MenuItem>
                ))}
            </MenuList>
        </MenuWrapper>
    );
}

export default MenuNavigation;
