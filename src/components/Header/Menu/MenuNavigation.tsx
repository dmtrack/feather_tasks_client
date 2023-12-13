import AppLogoSvg from 'components/AppLogo/AppLogoSvg';
import { useAppDispatch, useAppSelector } from 'hooks/useRedux';
import React from 'react';
import { getLoggedIn } from 'redux/selectors/userSelectors';
import { setLogoutUserPopupOpen } from 'redux/slices/userSlice';

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

interface MenuNavigationProps {
    toggleMenu: () => void;
}

function MenuNavigation({ toggleMenu }: MenuNavigationProps) {
    const dispatch = useAppDispatch();
    const isLoggedIn = useAppSelector(getLoggedIn);

    const toggleMenuOnClick = (id: string) => {
        if (id === 'signOut') {
            dispatch(setLogoutUserPopupOpen(true));
        }

        toggleMenu();
    };

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
                {(isLoggedIn ? headerItemsIfLoggedIn : headerSignItems).map(
                    ({ id, text, link }) => (
                        <MenuItem key={id} variants={menuItemAnimation}>
                            <MenuLink
                                to={link}
                                end
                                onClick={() => toggleMenuOnClick(id)}
                            >
                                {text}
                            </MenuLink>
                        </MenuItem>
                    ),
                )}
            </MenuList>
        </MenuWrapper>
    );
}

export default MenuNavigation;
