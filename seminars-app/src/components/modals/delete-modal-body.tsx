function DeleteModalBody() {
  return (
    <div className='flex flex-col items-center p-10'>
      <h2 className='text-indigo-600 font-bold text-xl'>Удалить семинар</h2>
      <p className='my-3 text-lg'> Вы уверены? Это действие необратимо</p>
      <button className='px-2 py-1 text-sm bg-amber-600 border-2 border-amber-900 rounded-lg hover:bg-amber-500 hover:cursor-pointer mt-4'>
        Подтвердить
      </button>
    </div>
  );
}

export default DeleteModalBody;
