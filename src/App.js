import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Navigate
} from "react-router-dom";

import './App.css';
import AdminAuthLayout from './layouts/admin-auth';
import UserAuthLayout from './layouts/user-auth';

// this is where you put routing to views
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="admin/*" element={<AdminAuthLayout />} />
          <Route path="user/*" element={<UserAuthLayout />} />
          <Route path="*" element={<Navigate to="user/sign-in" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
