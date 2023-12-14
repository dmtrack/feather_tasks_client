import React, { memo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProtectedRoute from 'pages/ProtectedRoute/ProtectedRoute';
import { useAppDispatch, useAppSelector } from 'hooks/useRedux';
import useCreateColumn from 'hooks/useCreateColumn';
import useDeleteColumn from 'hooks/useDeleteColumn';
import useGetAllColumns from 'hooks/useGetAllColumns';
import useEditColumnTitle from 'hooks/useEditColumnTitle';

import {
    setCreateColumnPopupOpen,
    setDeleteColumnPopupOpen,
} from 'redux/slices/columnSlice';
import { getLoadingTasksList } from 'redux/selectors/taskSelectors';

import PopupWarning from 'components/PopupWarning/PopupWarning';
import NoResultsContainer from 'components/NoResultsContainer/NoResultsContainer';
import Loader from 'components/Loader/Loader';
import Button from 'components/Button/Button';
import Columns from 'components/Columns/Columns';
import PopupWithFormColumnTask from 'components/PopupWithFormColumn/PopupWithFormColumn';
import { getUser } from 'redux/selectors/userSelectors';
import defaultTheme from 'styles/theme';
import { MainWrapper } from 'styles/styles';
import {
    ProjectButtonWrapper,
    ProjectContainer,
    ProjectControls,
    ProjectControlsWrapper,
    ProjectTitle,
} from './ProjectPage.style';

function ProjectPage() {
    const isLoadingGetAllTasks = useAppSelector(getLoadingTasksList);
    const dispatch = useAppDispatch();
    const user = useAppSelector(getUser);
    const { columnList, isLoadingColumnList } = useGetAllColumns();

    const { isCreateColumnPopupOpen, isLoadingCreateColumn, onSubmit, id } =
        useCreateColumn(columnList);
    const { isLoadingDeleteColumn, isDeleteColumnPopupOpen, deleteColumn } =
        useDeleteColumn();
    const { isLoadingEditColumnTitle } = useEditColumnTitle();
    const isLoadingProjectPage = [
        isLoadingColumnList,

        isLoadingDeleteColumn,
        isLoadingCreateColumn,
        isLoadingEditColumnTitle,
        isLoadingGetAllTasks,
    ].some((loader) => loader);

    const [buttonText, setButtonText] = useState('New column');
    const [buttonWidth, setButtonWidth] = useState('130px');
    const navigate = useNavigate();
    const ref = useRef<HTMLElement | null>(null);

    return (
        <ProtectedRoute>
            <MainWrapper ref={ref}>
                <ProjectControls>
                    <ProjectControlsWrapper>
                        <ProjectTitle>{`hey, ${user?.name}`}</ProjectTitle>
                    </ProjectControlsWrapper>
                    <ProjectButtonWrapper>
                        <Button
                            type="button"
                            width={buttonWidth}
                            backgroundColor={defaultTheme.colors.transparent}
                            color={defaultTheme.colors.primaryColor}
                            callback={() =>
                                dispatch(setCreateColumnPopupOpen(true))
                            }
                        >
                            add column
                        </Button>
                    </ProjectButtonWrapper>
                </ProjectControls>

                <ProjectContainer>
                    {columnList?.length ? (
                        <Columns />
                    ) : (
                        <NoResultsContainer
                            text="projectPage.emptyContainerText"
                            buttonText="projectPage.emptyContainerButton"
                            setPopupShown={setCreateColumnPopupOpen}
                        />
                    )}
                </ProjectContainer>

                <PopupWarning
                    isPopupShown={isDeleteColumnPopupOpen}
                    setPopupShown={setDeleteColumnPopupOpen}
                    text="deleteColumn"
                    actionOnYes={deleteColumn}
                />
                <PopupWithFormColumnTask
                    isPopupShown={isCreateColumnPopupOpen}
                    setPopupShown={setCreateColumnPopupOpen}
                    keyPrefix="editColumnForm"
                    title="newColumnTitle"
                    onSubmit={onSubmit}
                />
                {isLoadingProjectPage && <Loader />}
            </MainWrapper>
        </ProtectedRoute>
    );
}

export default memo(ProjectPage);
