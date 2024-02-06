import React from 'react';
import {
  Routes,
  Route,
} from "react-router-dom";

import SignInAdmin from '../../views/admin/sign-in';
import AdminLayout from '../admin';

const AdminAuthLayout = () => {
  return (
    <div>
      <Routes>
        <Route path="/sign-in" element={<SignInAdmin />} />
        <Route path="/home/*" element={<AdminLayout />} />
        <Route path="/*" element={<h1>404 - Not Found</h1>} />
      </Routes>
    </div>
  )
}

export default AdminAuthLayout