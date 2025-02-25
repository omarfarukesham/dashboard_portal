const orderNumbers = [
  {
    name: 'Day 1',
    total: 2400,
    success: 4000,
    failed: 2400,
  },
  {
    name: 'Day 2',
    total: 1398,
    success: 3000,
    failed: 2210,
  },
  {
    name: 'Day 3',
    total: 9800,
    success: 2000,
    failed: 2290,
  },
  {
    name: 'Day 4',
    total: 3908,
    success: 2780,
    failed: 2000,
  },
  {
    name: 'Day 5',
    total: 4800,
    success: 1890,
    failed: 2181,
  },
  {
    name: 'Day 6',
    total: 3800,
    success: 2390,
    failed: 2500,
  },
  {
    name: 'Day 7',
    total: 4300,
    success: 3490,
    failed: 2100,
  },
];

const orderPayments = [
  {
    name: 'Day 1',
    total: 1139800,
    paid: 1000000,
    due: 122100,
  },
  {
    name: 'Day 2',
    total: 1240000,
    paid: 900000,
    due: 124000,
  },
  {
    name: 'Day 3',
    total: 1390800,
    paid: 1078000,
    due: 120000,
  },
  {
    name: 'Day 4',
    total: 1500000,
    paid: 1000000,
    due: 122900,
  },
  {
    name: 'Day 5',
    total: 1480000,
    paid: 1089000,
    due: 421810,
  },
  {
    name: 'Day 6',
    total: 1430000,
    paid: 1349000,
    due: 121000,
  },
  {
    name: 'Day 7',
    total: 1380000,
    paid: 1230090,
    due: 75000,
  },
];

const orderPaymentNumbers = [
  {
    name: 'Day 1',
    total: 100,
    cod: 80,
    online: 20,
  },
  {
    name: 'Day 2',
    total: 250,
    cod: 200,
    online: 50,
  },
  {
    name: 'Day 3',
    total: 140,
    cod: 100,
    online: 40,
  },
  {
    name: 'Day 4',
    total: 400,
    cod: 350,
    online: 50,
  },
  {
    name: 'Day 5',
    total: 240,
    cod: 190,
    online: 50,
  },
  {
    name: 'Day 6',
    total: 333,
    cod: 270,
    online: 63,
  },
  {
    name: 'Day 7',
    total: 563,
    cod: 326,
    online: 237,
  },
];

const stats = {
  orderCount: {
    total: 1500,
    success: 1000,
    failed: 500,
  },
  payments: {
    total: 100000,
    paid: 50000,
    due: 50000,
  },
  paymentCount: {
    total: 15000,
    cod: 800,
    online: 700,
  },
};

const dummyData = {
  stats,
  orderNumbers,
  orderPayments,
  orderPaymentNumbers,
};
export default dummyData;
