import React from 'react';

import {
    AppLogoWrapper,
    AppLogoLink,
    AppLogoText,
    LogoWrapper,
} from './AppLogo.style';

import AppLogoSvg from './AppLogoSvg';

function AppLogo() {
    return (
        <AppLogoWrapper>
            <AppLogoLink to="/">
                <LogoWrapper>
                    <AppLogoSvg />
                    <AppLogoText>tasks</AppLogoText>
                </LogoWrapper>
            </AppLogoLink>
        </AppLogoWrapper>
    );
}

export default AppLogo;
