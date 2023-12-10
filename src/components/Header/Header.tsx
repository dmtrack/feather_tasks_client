import React, { memo, useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
    headerSignItems,
    headerLinkItems,
    headerItemsIfLoggedIn,
} from 'utils/constants';

import AppLogo from 'components/AppLogo/AppLogo';
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

    const stickyHeader = useCallback(() => {
        if (window.scrollY > 0) {
            setSticky(true);
        } else {
            setSticky(false);
        }
    }, []);

    return (
        <HeaderWrapper sticky={isSticky}>
            <HeaderContainer>
                <HeaderContainerElements>
                    <AppLogo />
                    {headerLinkItems.map(({ id, text, link, color }) => (
                        <HeaderLink to={link} key={id} end>
                            <HeaderLinkElement color={color}>
                                Ссылка
                            </HeaderLinkElement>
                        </HeaderLink>
                    ))}
                </HeaderContainerElements>
            </HeaderContainer>
        </HeaderWrapper>
    );
}

export default memo(Header);
