import React, { useCallback } from 'react';
import { AnimatePresence } from 'framer-motion';
import { ActionCreatorWithPayload } from '@reduxjs/toolkit/dist/createAction';

import { useAppDispatch } from 'hooks/useRedux';

import { popupAnimation } from 'utils/animations';

import defaultTheme from 'styles/theme';

import Button from 'components/Button/Button';

import { MdClose } from 'react-icons/md';

import {
    Background,
    Popup,
    PopupText,
    PopupButtons,
    CloseButtonWrapper,
    PopupWrapper,
} from './PopupWarning.style';

interface PopupWarningProps {
    text: string;
    isPopupShown: boolean;
    setPopupShown: ActionCreatorWithPayload<boolean>;
    actionOnYes: () => void;
}

function PopupWarning({
    text,
    isPopupShown,
    setPopupShown,
    actionOnYes,
}: PopupWarningProps) {
    const dispatch = useAppDispatch();

    const closePopup = useCallback(() => {
        dispatch(setPopupShown(false));
    }, []);

    return (
        <AnimatePresence>
            {isPopupShown && (
                <PopupWrapper $variants={popupAnimation}>
                    <Background onClick={closePopup} />
                    <Popup>
                        <PopupText>{text}</PopupText>
                        <PopupButtons>
                            <Button
                                type="button"
                                width="60px"
                                color={defaultTheme.colors.text}
                                backgroundColor={
                                    defaultTheme.colors.backgroundGrey
                                }
                                callback={actionOnYes}
                            >
                                yes
                            </Button>
                            <Button
                                type="button"
                                width="60px"
                                color={defaultTheme.colors.text}
                                backgroundColor={
                                    defaultTheme.colors.backgroundGrey
                                }
                                callback={closePopup}
                            >
                                no
                            </Button>
                        </PopupButtons>
                        <CloseButtonWrapper>
                            <Button
                                type="button"
                                width="30px"
                                backgroundColor={
                                    defaultTheme.colors.transparent
                                }
                                callback={closePopup}
                            >
                                <MdClose />
                            </Button>
                        </CloseButtonWrapper>
                    </Popup>
                </PopupWrapper>
            )}
        </AnimatePresence>
    );
}

export default PopupWarning;
