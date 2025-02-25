import LoadingSpinner from '@/components/ui/LoadingSpinner';
import useTokenFromURL from '@/hooks/useTokenFromURL';
import Error from '@/pages/error/Error';
import authService from '@/services/auth/authService';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  const tokenCheckingFromURL = useTokenFromURL();

  if (tokenCheckingFromURL) {
    return <LoadingSpinner text='Accessing token' />;
  }

  if (!tokenCheckingFromURL && !authService.getToken()) {
    return <Error />;
  }

  return (
    <div className='flex h-screen overflow-hidden'>
      <div className='flex-1 h-full w-full md:w-[calc(100%-250px)]'>
        <Suspense fallback={<LoadingSpinner text='Loading your content' />}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
};

export default MainLayout;
