import React from 'react';
import { ActionCreatorWithPayload } from '@reduxjs/toolkit/dist/createAction';

import { useAppDispatch } from 'hooks/useRedux';

import defaultTheme from 'styles/theme';

import Button from 'components/Button/Button';

import { Container, Title } from './NoResultsContainer.style';

interface NoResultsProps {
    text: string;
    buttonText: string;
    setPopupShown: ActionCreatorWithPayload<boolean>;
}

function NoResultsContainer({
    text,
    buttonText,
    setPopupShown,
}: NoResultsProps) {
    const dispatch = useAppDispatch();

    return (
        <Container>
            <Title>It seems you dont have any tasks yet</Title>
            <Button
                type="button"
                backgroundColor={defaultTheme.colors.transparent}
                color={defaultTheme.colors.grey}
                callback={() => dispatch(setPopupShown(true))}
            >
                Click here to create a new column for your tasks
            </Button>
        </Container>
    );
}

export default NoResultsContainer;
