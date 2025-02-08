
function Loader() {
    return (
        <div className='h-full w-screen flex flex-col items-center justify-center'>
          <span className='text-indigo-500 text-xl mb-6'>Загружаем данные</span>
          <div className=" w-10 h-10 animate-spin rounded-[50%] border-t-indigo-500 border-[5px] border-solid border-neutral-300"></div>
      </div>
    );
  }
  
  export default Loader;
  