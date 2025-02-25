import PageError from '@/components/layout/PageError';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import { useDashboard } from '@/services/dashboard/useDashboard';
import { useEffect } from 'react';
import DashboardGraphs from './sections/dashboard-graphs/DashboardGraphs';
import DashboardStats from './sections/dashboard-stats/DashboardStats';

const DashboardLoader = ({ filters }) => {
  const { isFetching, error, data, refetch } = useDashboard(filters);

  useEffect(() => {
    refetch(filters);
  }, [filters, refetch]);

  return (
    <div className='flex-1 flex flex-col'>
      {isFetching && <LoadingSpinner />}

      {!isFetching && !!data && (
        <div className='grid gap-5'>
          <DashboardStats data={data.stats} />
          <DashboardGraphs data={data} />
        </div>
      )}

      {!isFetching && error && <PageError message={error.message} />}
    </div>
  );
};

export default DashboardLoader;
