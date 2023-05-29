import React from 'react';
import { BrowserRouter as BRouter, Routes, Route } from 'react-router-dom';
import Login from './screens/Login';
import SignUp from './screens/SignUp';

const Router = () => {
  return (
    <div>
      <BRouter>
        <Routes>
          <Route
            path='/'
            element={<Login />}
          />
          <Route
            path='signup'
            element={<SignUp />}
          />
        </Routes>
      </BRouter>
    </div>
  );
};

export default Router;
