import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

const OrderPaymentNumbers = ({ data }) => {
  return (
    <ResponsiveContainer
      className='bg-white py-5 rounded-lg shadow-sm'
      width='100%'
      height={300}
    >
      <LineChart data={data}>
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='name' />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type='monotone'
          dataKey='total'
          stroke='#000'
          strokeWidth={2}
          activeDot={{ r: 8 }}
        />
        <Line type='monotone' dataKey='cod' stroke='#666666' strokeWidth={2} />
        <Line
          type='monotone'
          dataKey='online'
          stroke='#06477A'
          strokeWidth={2}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default OrderPaymentNumbers;
