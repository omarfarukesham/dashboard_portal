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

const OrderNumbers = ({ data }) => {
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
          stroke='#111940'
          strokeWidth={2}
          activeDot={{ r: 8 }}
        />
        <Line
          type='monotone'
          dataKey='success'
          stroke='#82ca9d'
          strokeWidth={2}
        />
        <Line
          type='monotone'
          dataKey='failed'
          stroke='#EF4800'
          strokeWidth={2}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default OrderNumbers;
