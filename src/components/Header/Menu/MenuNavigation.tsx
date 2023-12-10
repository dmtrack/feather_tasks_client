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
            <MenuList variants={menuListAnimation}>
                {headerLinkItems.map(({ id, text, link, color }) => (
                    <MenuItem
                        key={id}
                        color={color}
                        variants={menuItemAnimation}
                    >
                        <MenuLink to={link} end onClick={toggleMenu}>
                            Ссылка
                        </MenuLink>
                    </MenuItem>
                ))}
            </MenuList>
            <MenuImageWrapper>
                <MenuSvg />
            </MenuImageWrapper>
        </MenuWrapper>
    );
}

export default MenuNavigation;
