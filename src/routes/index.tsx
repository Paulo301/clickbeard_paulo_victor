import { Routes as RRDRoutes, Route } from 'react-router-dom';

import { Home } from '../pages/Home';

export function Routes() {
  return (
    <RRDRoutes>
      <Route path="/" element={<Home />} />
    </RRDRoutes>
  );
}