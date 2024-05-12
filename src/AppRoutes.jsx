import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout'
import Homepage from './pages/home/Homepage.jsx';

const AppRoutes = () => {
    return (
        <Router>
            <Layout>
                <Routes>
                <Route path="/" element={<Homepage/>} /> </Routes>
            </Layout>
        </Router>
    );
};

export default AppRoutes;