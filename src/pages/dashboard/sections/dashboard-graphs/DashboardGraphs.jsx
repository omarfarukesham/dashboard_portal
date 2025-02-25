import OrderNumbers from './OrderNumbers';
import OrderPaymentNumbers from './OrderPaymentNumbers';
import OrderPayments from './OrderPayments';

const DashboardGraphs = ({ data }) => {
  return (
    <div className='grid md:grid-cols-2 gap-5'>
      <OrderNumbers data={data.orderNumbers} />
      <OrderPayments data={data.orderPayments} />
      <OrderPaymentNumbers data={data.orderPaymentNumbers} />
    </div>
  );
};

export default DashboardGraphs;
