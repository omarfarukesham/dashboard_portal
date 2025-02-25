import OrderIcon from '@/assets/icons/OrderIcon';
import PaymentCountIcon from '@/assets/icons/PaymentCountIcon';
import TakaIcon from '@/assets/icons/TakaIcon';
import StatCard from './StatCard';

const DashboardStats = ({ data }) => {
  const { orderCount, payments, paymentCount } = data;

  return (
    <div className='grid md:grid-cols-3 gap-5'>
      <StatCard
        icon={OrderIcon}
        label='Order'
        value={orderCount?.total}
        bottomText={`Success: ${orderCount?.success}, Failed: ${orderCount?.failed}`}
      />

      <StatCard
        icon={TakaIcon}
        label='Payments'
        value={payments?.total}
        bottomText={`Paid: ${payments?.paid}, Due: ${payments?.due}`}
      />

      <StatCard
        icon={PaymentCountIcon}
        label='Payment Count'
        value={paymentCount?.total}
        bottomText={`COD: ${paymentCount?.cod}, Online: ${paymentCount?.online}`}
      />
    </div>
  );
};

export default DashboardStats;
