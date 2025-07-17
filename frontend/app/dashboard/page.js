

import React, { Suspense } from 'react';
import DashboardClient from './DashboardClient';

const DashboardPage = () => {
  return (
    <Suspense fallback={<div>Loading Dashboard...</div>}>
      <DashboardClient />
    </Suspense>
  );
};

export default DashboardPage;
