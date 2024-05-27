import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout'
import Homepage from './pages/home/Homepage.jsx';
import { AppProvider } from './AppContext';
import i18n from './i18n.js';
import { I18nextProvider } from 'react-i18next';


const AppRoutes = () => {
    return (
        <AppProvider>
            <I18nextProvider i18n={i18n}>
        <Router>
            <Layout>
                <Routes>
                <Route path="/" element={<Homepage/>} />
                <Route path="/:lang" element={<Homepage/>} /> </Routes>
            </Layout>
        </Router>
        </I18nextProvider>
        </AppProvider>
    );
};

export default AppRoutes;