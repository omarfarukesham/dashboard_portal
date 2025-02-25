const StatCard = ({ label = '', value, bottomText, icon: Icon }) => {
  return (
    <div className='p-5 grid gap-1 bg-white shadow rounded'>
      <div className='flex gap-3'>
        <div className='bg-light flex justify-center items-center h-14 w-14 rounded-full'>
          <Icon className='h-8 w-8' />
        </div>
        <div className='flex-1 grid gap-1 text-right'>
          <div className=' text-gray-7 '>{label.replaceAll('_', ' ')}</div>
          <div className='text-4xl'>{value}</div>
        </div>
      </div>
      <div className='text-label text-right text-gray-7'>{bottomText}</div>
    </div>
  );
};

export default StatCard;
