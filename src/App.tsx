import Header from 'components/Header/Header';
import Loader from 'components/Loader/Loader';
import React, { lazy, Suspense, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

const SignUpPage = lazy(() => import('pages/SignUpPage/SignUpPage'));
const SignInPage = lazy(() => import('pages/SignInPage/SignInPage'));
const ProjectPage = lazy(() => import('pages/ProjectPage/ProjectPage'));
const HomePage = lazy(() => import('pages/HomePage/HomePage'));

const NotFoundPage = lazy(() => import('pages/NotFoundPage/NotFoundPage'));

function App() {
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
