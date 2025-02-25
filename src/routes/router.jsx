/* eslint-disable react-refresh/only-export-components */
import MainLayout from '@/components/layout/MainLayout';
import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
const Error = lazy(() => import('@/pages/error/Error'));
const Dashboard = lazy(() => import('@/pages/dashboard/Dashboard'));

const router = createBrowserRouter([
  {
    path: '',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Dashboard />,
      },
    ],
  },
  {
    path: '*',
    element: <Error />,
  },
]);

export default router;
