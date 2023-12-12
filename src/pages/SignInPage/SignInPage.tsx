import React, { memo } from 'react';
import { useNavigate } from 'react-router-dom';

import useSignInUser from 'hooks/useSignInUser';

import { setErrorNotificationPopupOpen } from 'redux/slices/userSlice';

import { backButtonAnimation } from 'utils/animations';

import AuthForm from 'components/AuthForm/AuthForm';
import Loader from 'components/Loader/Loader';
import Button from 'components/Button/Button';
import PopupNotification from 'components/PopupNotification/PopupNotification';

import {
    FormDescriptionText,
    FormDescriptionWrapper,
    FormHeader,
    FormWrapper,
    LinkWrapper,
    MainWrapper,
    StyledLink,
    StyledPrevIcon,
    Title,
} from 'styles/styles';
import defaultTheme from 'styles/theme';

function SignInPage() {
    const {
        isErrorNotificationPopupOpen,
        isLoadingAuth,
        signInErrorMessage,
        onSubmit,
    } = useSignInUser();
    const navigate = useNavigate();

    return (
        <MainWrapper>
            <FormWrapper>
                <FormHeader>
                    <Button
                        type="button"
                        width="30px"
                        animation={backButtonAnimation}
                        backgroundColor={defaultTheme.colors.transparent}
                        disabled={isLoadingAuth}
                        callback={() => navigate(-1)}
                    >
                        <StyledPrevIcon $isDisabled={isLoadingAuth} />
                    </Button>
                </FormHeader>
                <Title>Sign In</Title>
                <AuthForm
                    keyPrefix="signIn"
                    onSubmit={onSubmit}
                    isLoadingAuth={isLoadingAuth}
                />
                <FormDescriptionWrapper>
                    <FormDescriptionText>or</FormDescriptionText>
                </FormDescriptionWrapper>
                <LinkWrapper>
                    <StyledLink to="/signup">
                        Still dont have an account? Sing Up
                    </StyledLink>
                </LinkWrapper>
            </FormWrapper>
            {isLoadingAuth && <Loader />}
            {signInErrorMessage && (
                <PopupNotification
                    isPopupShown={isErrorNotificationPopupOpen}
                    setPopupShown={setErrorNotificationPopupOpen}
                    text="Incorrect login or password!"
                    backgroundColor={defaultTheme.colors.pink}
                />
            )}
        </MainWrapper>
    );
}

export default memo(SignInPage);
