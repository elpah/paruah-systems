import { MoonLoader } from 'react-spinners';

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-[calc(100vh-80px)] w-screen">
      <MoonLoader color="#1d5557" size={50} speedMultiplier={0.8} />
    </div>
  );
};

export default Loader;
