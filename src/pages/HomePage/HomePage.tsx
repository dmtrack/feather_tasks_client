import React, { memo } from 'react';
import { useAppSelector } from 'hooks/useRedux';

import {
    getAuthUser,
    getLoggedIn,
    getUser,
} from 'redux/selectors/userSelectors';

import { MainWrapper } from 'styles/styles';

import { mainPageElements, mainPageList } from 'utils/constants';

import Button from 'components/Button/Button';
import BoardSvg from './SvgElements/BoardSvg';
import ComputerSvg from './SvgElements/ComputerSvg';

import {
    TextSection,
    ColumnSection,
    TextWrapper,
    Title,
    Text,
    Link,
    ImageWrapper,
    MainPageElement,
    ElementTitle,
    SubTitle,
} from './HomePage.style';

function HomePage() {
    const isLoggedIn = useAppSelector(getLoggedIn);
    const user = useAppSelector(getAuthUser);

    return (
        <MainWrapper>
            <TextSection>
                <TextWrapper>
                    <Title>All your tasks now automated</Title>
                    <Text>
                        Feather tasks is a simple and convenient way to organize
                        your day
                    </Text>
                    <Link
                        to={isLoggedIn ? `/projects/${user?._id}` : '/signup'}
                    >
                        <Button type="button">
                            {isLoggedIn ? `To tasks` : `Sign Up`}
                        </Button>
                    </Link>
                </TextWrapper>
                <ImageWrapper>
                    <BoardSvg />
                </ImageWrapper>
            </TextSection>
            <SubTitle>Everything is under control</SubTitle>
            <ColumnSection>
                {mainPageElements.map((el) => (
                    <MainPageElement
                        key={el.id}
                        $backgroundColor={el.backgroundColor}
                    >
                        {el.icon}
                        <ElementTitle>{el.title}</ElementTitle>
                        <p>{el.text}</p>
                    </MainPageElement>
                ))}
            </ColumnSection>
        </MainWrapper>
    );
}

export default memo(HomePage);
