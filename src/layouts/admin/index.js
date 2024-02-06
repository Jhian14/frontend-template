import React from 'react';
import {
    Routes,
    Route
} from "react-router-dom";
import AdminProfile from '../../views/admin/profile';

const AdminLayout = () => {

    return (
        <div>
            <Routes>
                <Route path="/" element={<AdminProfile />} />
                <Route path="/*" element={<h1>404 - Not Found</h1>} />
            </Routes>
        </div>
    )
}

export default AdminLayout