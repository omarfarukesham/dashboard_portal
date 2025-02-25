import { DASHBOARD_REPORT_RANGE } from '@/configuration/constants';
import { useState } from 'react';
import DashboardFilters from './DashboardFilters';
import DashboardLoader from './DashboardLoader';

const DashboardBody = () => {
  const [filters, setFilters] = useState({
    reportRange: DASHBOARD_REPORT_RANGE.thisWeek,
  });

  return (
    <div className='flex-1 flex flex-col gap-5'>
      <DashboardFilters filters={filters} setFilters={setFilters} />
      <DashboardLoader filters={filters} />
    </div>
  );
};

export default DashboardBody;
