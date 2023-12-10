import Header from 'components/Header/Header';
import Loader from 'components/Loader/Loader';
import React, { lazy, Suspense, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

const SignUpPage = lazy(() => import('pages/SignUpPage/SignUpPage'));
const SignInPage = lazy(() => import('pages/SignInPage/SignInPage'));

function App() {
    return (
        <div>
            <Header />
            <Suspense fallback={<Loader />}>
                <Routes>
                    <Route path="signin" element={<SignInPage />} />
                    <Route path="signup" element={<SignUpPage />} />
                </Routes>
            </Suspense>
        </div>
    );
}

export default App;
