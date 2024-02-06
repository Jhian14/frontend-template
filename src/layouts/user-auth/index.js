import React from 'react';
import {
  Routes,
  Route,
} from "react-router-dom";

import UserLayout from '../user';
import UserSignIn from '../../views/user/sign-in';

const UserAuthLayout = () => {
  return (
    <div>
      <Routes>
        <Route path="/sign-in" element={<UserSignIn />} />
        <Route path="/home/*" element={<UserLayout />} />
        <Route path="/*" element={<h1>404 - Not Found</h1>} />
      </Routes>
    </div>

  )
}

export default UserAuthLayout