import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyle from 'styles/Global';
import { ThemeProvider } from 'styled-components';
import defaultTheme from 'styles/theme';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from 'redux/store';
import App from './App';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement,
);
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <ThemeProvider theme={defaultTheme}>
                    <GlobalStyle />

                    <App />
                </ThemeProvider>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>,
);
