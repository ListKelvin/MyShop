const LoadingScreen = () => {
  return (
    <div className="w-full h-full z-40  justify-center items-center flex flex-col gap-4 absolute inset-0  backdrop-blur-md  shadow-md rounded-lg">
      <span className="loader"></span>
    </div>
  );
};

export default LoadingScreen;
