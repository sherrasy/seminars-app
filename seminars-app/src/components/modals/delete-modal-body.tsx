import { observer } from 'mobx-react';
import seminarsStore from '../../store/seminars-data';

type DeleteModalBodyProps = {
  handleCloseModal:()=>void;
}

const DeleteModalBody = observer(({handleCloseModal}:DeleteModalBodyProps) => {
  const { deleteSeminar, isPosting, hasError } = seminarsStore;
  const handleDelete = async()=>{
  await deleteSeminar();
    if(!hasError){
      handleCloseModal()
    }
  }
  return (
    <div className='flex flex-col items-center px-10 pt-4 pb-8'>
      <h2 className='text-indigo-600 font-bold text-xl'>Удалить семинар</h2>
      <p className='my-3 text-lg'> Вы уверены? Это действие необратимо</p>
      <button
        disabled={isPosting}
        className='px-2 py-1 mt-4 text-sm bg-amber-600 border-2 border-amber-900 rounded-lg hover:bg-amber-500 hover:cursor-pointer disabled:cursor-default disabled:bg-neutral-200 '
        onClick={handleDelete}
      >
        Подтвердить
      </button>
      {hasError && (
        <p className='text-sm text-red-900 relative h-px '>
          Произошла ошибка. Попробуйте снова
        </p>
      )}
    </div>
  );
});

export default DeleteModalBody;
