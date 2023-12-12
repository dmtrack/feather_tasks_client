import React from 'react';

import { useAppSelector } from 'hooks/useRedux';

import { getLoggedIn } from 'redux/selectors/userSelectors';

import { Container, ProtectedTitle } from './ProtectedRoute.style';

interface ProtectedProps {
    children: JSX.Element;
}

function ProtectedRoute({ children }: ProtectedProps) {
    const isLoggedIn = useAppSelector(getLoggedIn);

    if (!isLoggedIn) {
        return (
            <Container>
                <ProtectedTitle>
                    To see the content of this page sign up or sign in if you
                    have an account
                </ProtectedTitle>
            </Container>
        );
    }
    return children;
}

export default ProtectedRoute;
