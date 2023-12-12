import React, { memo, useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
    headerSignItems,
    headerLinkItems,
    headerItemsIfLoggedIn,
} from 'utils/constants';
import AppLogo from 'components/AppLogo/AppLogo';
import { useAppDispatch, useAppSelector } from 'hooks/useRedux';
import {
    getLoggedIn,
    getLogoutUserPopupOpen,
} from 'redux/selectors/userSelectors';
import { setLoggedOut, setLogoutUserPopupOpen } from 'redux/slices/userSlice';
import Button from 'components/Button/Button';
import PopupWarning from 'components/PopupWarning/PopupWarning';

import Menu from './Menu/Menu';
import {
    HeaderWrapper,
    HeaderContainer,
    HeaderContainerElements,
    HeaderLink,
    HeaderLinkElement,
} from './Header.style';

function Header() {
    const navigate = useNavigate();
    const [isSticky, setSticky] = useState(false);
    const isLogoutUserPopupOpen = useAppSelector(getLogoutUserPopupOpen);
    const isLoggedIn = useAppSelector(getLoggedIn);

    const dispatch = useAppDispatch();

    const stickyHeader = useCallback(() => {
        if (window.scrollY > 0) {
            setSticky(true);
        } else {
            setSticky(false);
        }
    }, []);

    const openLogoutUserPopup = useCallback((id: string) => {
        if (id === 'signOut') {
            dispatch(setLogoutUserPopupOpen(true));
        }
    }, []);

    const signOut = useCallback(() => {
        dispatch(setLoggedOut());
        dispatch(setLogoutUserPopupOpen(false));
        navigate('/');
    }, []);

    return (
        <HeaderWrapper sticky={isSticky}>
            <HeaderContainer>
                <HeaderContainerElements>
                    <AppLogo />
                    {headerLinkItems.map(({ id, text, link, color }) => (
                        <HeaderLink to={link} key={id} end>
                            <HeaderLinkElement color={color}>
                                {text}
                            </HeaderLinkElement>
                        </HeaderLink>
                    ))}
                </HeaderContainerElements>
                <HeaderContainerElements>
                    {(isLoggedIn ? headerItemsIfLoggedIn : headerSignItems).map(
                        ({ id, text, link, color, backgroundColor }) => (
                            <HeaderLink
                                to={link}
                                key={id}
                                id={id}
                                onClick={() => openLogoutUserPopup(id)}
                                end
                            >
                                <Button
                                    type="button"
                                    width="130px"
                                    color={color}
                                    backgroundColor={backgroundColor}
                                >
                                    {text}
                                </Button>
                            </HeaderLink>
                        ),
                    )}
                    <Menu />
                </HeaderContainerElements>
            </HeaderContainer>
            <PopupWarning
                text="Are you sure you want to sign out?"
                actionOnYes={signOut}
                isPopupShown={isLogoutUserPopupOpen}
                setPopupShown={setLogoutUserPopupOpen}
            />
        </HeaderWrapper>
    );
}

export default memo(Header);
