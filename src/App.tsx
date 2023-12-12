import Header from 'components/Header/Header';
import Loader from 'components/Loader/Loader';
import React, { lazy, Suspense, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

const SignUpPage = lazy(() => import('pages/SignUpPage/SignUpPage'));
const SignInPage = lazy(() => import('pages/SignInPage/SignInPage'));
const ProjectsPage = lazy(() => import('pages/ProjectsPage/ProjectsPage'));
const NotFoundPage = lazy(() => import('pages/NotFoundPage/NotFoundPage'));

function App() {
    return (
        <>
            <Header />
            <Suspense fallback={<Loader />}>
                <Routes>
                    <Route path="signin" element={<SignInPage />} />
                    <Route path="signup" element={<SignUpPage />} />
                    <Route path="projects" element={<ProjectsPage />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </Suspense>
        </>
    );
}

export default App;
