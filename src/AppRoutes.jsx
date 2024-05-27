import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout'
import Homepage from './pages/home/Homepage.jsx';
import { AppProvider } from './AppContext';



const AppRoutes = () => {
    return (
        <AppProvider>
            
        <Router>
            <Layout>
                <Routes>
                <Route path="/" element={<Homepage/>} />
                <Route path="/:lang" element={<Homepage/>} /> </Routes>
            </Layout>
        </Router>
        </AppProvider>
    );
};

export default AppRoutes;