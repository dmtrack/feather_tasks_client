import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const AppLogoWrapper = styled.div`
    width: 150px;

    @media (max-width: 375px) {
        width: 140px;
    }
`;

const AppLogoLink = styled(NavLink)`
    text-decoration: none;

    color: ${({ theme }) => theme.colors.text};
`;

const AppLogoText = styled.p`
    font-size: ${({ theme }) => theme.fontSizes.h4};
    font-weight: ${({ theme }) => theme.fontsWeight.bold};
`;

const LogoWrapper = styled.div`
    display: flex;
    align-items: center;
    padding-left: 2px;

    @media (max-width: 375px) {
        padding-left: 0;
    }
`;

export { AppLogoWrapper, AppLogoLink, AppLogoText, LogoWrapper };
