import React, { memo } from 'react';

import { useAppDispatch, useAppSelector } from 'hooks/useRedux';

import ProtectedRoute from 'components/ProtectedRoute/ProtectedRoute';
import Button from 'components/Button/Button';
import Loader from 'components/Loader/Loader';
import NoResultsContainer from 'components/NoResultsContainer/NoResultsContainer';
import { getUser } from 'redux/selectors/userSelectors';

import defaultTheme from 'styles/theme';
import { MainWrapper } from 'styles/styles';
import {
    ProjectsControls,
    ProjectsTitle,
    ProjectsContainer,
} from './ProjectsPage.style';

function ProjectsPage() {
    const dispatch = useAppDispatch();
    const user = useAppSelector(getUser);

    // const selectedProject = useAppSelector(getSelectedProject);
    // const { projects, isProjectsListLoading } = useGetAllProject();
    // const { isDeleteProjectPopupOpen, isLoadingDeleteProject, deleteProject } =
    //     useDeleteProject(selectedProject);
    // const { isEditProjectPopupOpen, isLoadingEditProject, editOnSubmit } =
    //     useEditProject(selectedProject);

    // const isLoadingProjectsPage = [
    //     isProjectsListLoading,
    //     isLoadingCreateProject,
    //     isLoadingEditProject,
    //     isLoadingDeleteProject,
    // ].some((loader) => loader);

    // const searchedProjects = useAppSelector(getSearchedProjects);

    return (
        <ProtectedRoute>
            <MainWrapper>
                <ProjectsControls>
                    <ProjectsTitle>{`Your tasks, ${user?.name}`}</ProjectsTitle>
                    {/* <SearchBar
                        defaultProjects={projects}
                        isDefaultProjectsLoading={isProjectsListLoading}
                    /> */}
                    {/* <Button
                        type="button"
                        width="130px"
                        backgroundColor={defaultTheme.colors.transparent}
                        color={defaultTheme.colors.primaryColor}
                        callback={() =>
                            dispatch(setCreateProjectPopupOpen(true))
                        }
                    >
                        {t('newProjectButton')}
                    </Button> */}
                </ProjectsControls>
                <ProjectsContainer>ert</ProjectsContainer>
                {/* <PopupWarning
                    isPopupShown={isDeleteProjectPopupOpen}
                    setPopupShown={setDeleteProjectPopupOpen}
                    actionOnYes={deleteProject}
                    text="deleteProject"
                />
                <PopupWithForm
                    isPopupShown={isCreateProjectPopupOpen}
                    setPopupShown={setCreateProjectPopupOpen}
                    keyPrefix="editProjectForm"
                    formTitleText="newProjectTitle"
                    onSubmit={onSubmit}
                    maxDescriptionLength={80}
                />
                <PopupWithForm
                    isPopupShown={isEditProjectPopupOpen}
                    setPopupShown={setEditProjectPopupOpen}
                    keyPrefix="editProjectForm"
                    formTitleText="editTitle"
                    selectedItem={selectedProject}
                    onSubmit={editOnSubmit}
                    setSelectedItem={setSelectedProject}
                    maxDescriptionLength={80}
                /> */}
                {/* {isLoadingProjectsPage && <Loader />} */}
            </MainWrapper>
        </ProtectedRoute>
    );
}

export default memo(ProjectsPage);
