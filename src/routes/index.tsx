import { Routes as RRDRoutes, Route } from 'react-router-dom';

import { Home } from '../pages/Home';
import { Login } from '../pages/Login';

export function Routes() {
  return (
    <RRDRoutes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
    </RRDRoutes>
  );
}