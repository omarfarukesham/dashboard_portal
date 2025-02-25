import PageContainer from '@/components/layout/PageContainer';
import PageHeader from '@/components/layout/PageHeader';
import DashboardBody from './DashboardBody';

const Dashboard = () => {
  return (
    <PageContainer className='flex flex-col gap-5 overflow-auto'>
      <PageHeader title='Dashboard' backButton={false} />
      <DashboardBody />
    </PageContainer>
  );
};

export default Dashboard;
