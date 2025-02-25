import { CATALOG_SERVICE_BASE_URL } from '@/configuration/config';
import { ENDPOINTS } from '@/configuration/endpoints';
import httpService from '../http/httpService';

const config = {
  baseURL: CATALOG_SERVICE_BASE_URL,
};

const dashboardService = {
  getDashboard: (filters) => {
    return httpService.get(ENDPOINTS.dashboard, {
      ...config,
      params: filters,
    });
  },
};

export default dashboardService;
