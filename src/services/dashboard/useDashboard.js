import { ENDPOINTS } from '@/configuration/endpoints';
import { useQuery } from '@tanstack/react-query';
import dashboardService from './dashboardService';
import dummyData from './dummayData';

export const useDashboard = (filters) => {
  return useQuery({
    queryKey: [ENDPOINTS.dashboard, JSON.stringify(filters)],
    queryFn: () => dashboardService.getDashboard(filters),
    select: () => dummyData,
  });
};
