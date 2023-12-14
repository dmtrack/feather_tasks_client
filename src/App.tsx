import Header from 'components/Header/Header';
import Loader from 'components/Loader/Loader';
import { useAppSelector } from 'hooks/useRedux';
import React, { lazy, Suspense, useEffect, useState } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { getAuthUser } from 'redux/selectors/userSelectors';

const SignUpPage = lazy(() => import('pages/SignUpPage/SignUpPage'));
const SignInPage = lazy(() => import('pages/SignInPage/SignInPage'));
const ProjectPage = lazy(() => import('pages/ProjectPage/ProjectPage'));
const HomePage = lazy(() => import('pages/HomePage/HomePage'));

const NotFoundPage = lazy(() => import('pages/NotFoundPage/NotFoundPage'));

function App() {
    const navigate = useNavigate();
    const location = useLocation();
    const routeId = location.pathname.split('/')[2];

    const authUser = useAppSelector(getAuthUser);
    const authId = authUser?._id;

    useEffect(() => {
        if (location.pathname.includes('projects') && authId !== routeId) {
            navigate('/');
        }
    }, [routeId]);

    return (
        <>
            <Header />
            <Suspense fallback={<Loader />}>
                <Routes>
                    <Route path="signin" element={<SignInPage />} />
                    <Route path="signup" element={<SignUpPage />} />
                    <Route path="/" element={<HomePage />} />
                    <Route path="projects/:id" element={<ProjectPage />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </Suspense>
        </>
    );
}

export default App;
