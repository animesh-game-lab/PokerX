import { Routes, Route } from 'react-router-dom';
import Table from "../pages/Table.jsx";
import PricingPage from "../pages/PricingPage.jsx";
import HomePage from "../pages/HomePage.jsx";

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="*" element={<h1>404: Page Not Found</h1>} />
        </Routes>
    );
}

export default AppRoutes;