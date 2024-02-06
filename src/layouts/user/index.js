import React from 'react';
import {
    Routes,
    Route
} from "react-router-dom";
import UserProfile from '../../views/user/profile';

const UserLayout = () => {

    return (
        <div>
            <Routes>
                <Route path="/" element={<UserProfile />} />
                <Route path="/*" element={<h1>404 - Not Found</h1>} />
            </Routes>
        </div>
    )
}

export default UserLayout