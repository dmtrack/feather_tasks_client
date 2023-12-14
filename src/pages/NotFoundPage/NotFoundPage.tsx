import React, { memo, useEffect } from 'react';

import Button from 'components/Button/Button';

import { MainWrapper, Title } from 'styles/styles';
import { useNavigate } from 'react-router-dom';
import { NotFoundText, NotFoundLink, NotFoundIcon } from './NotFoundPage.style';

function NotFoundPage() {
    const navigate = useNavigate();
    useEffect(() => {
        setTimeout(() => {
            navigate('/');
        }, 3000);
    }, []);

    return (
        <MainWrapper>
            <NotFoundIcon />
            <Title>Something went wrong!</Title>
            <NotFoundText>
                Unfortunately, this page does not exist.
            </NotFoundText>
            <NotFoundLink to="/">
                <Button type="button" width="210px">
                    Back home
                </Button>
            </NotFoundLink>
        </MainWrapper>
    );
}

export default memo(NotFoundPage);
