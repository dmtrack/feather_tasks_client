import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyle from 'styles/Global';
import './index.css';
import { ThemeProvider } from 'styled-components';
import defaultTheme from 'styles/theme';
import App from './App';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement,
);
root.render(
    <React.StrictMode>
        <ThemeProvider theme={defaultTheme}>
            <GlobalStyle />

            <App />
        </ThemeProvider>
    </React.StrictMode>,
);
