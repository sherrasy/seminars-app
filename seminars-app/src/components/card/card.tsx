import { LazyLoadImage } from 'react-lazy-load-image-component';
import Pen from '../../assets/pen.svg?react';
import Trash from '../../assets/trash.svg?react';
import seminarsStore from '../../store/seminars-data';
import { Seminar } from '../../types/seminar.interface';

type CardProps = {
  card: Seminar;
  handleOpenModal: (type:string) => void;
};

function Card({ card, handleOpenModal }: CardProps) {
  const { id, title, description, date, time, photo } = card;
  const {setSeminarId} = seminarsStore;
  const handleOpenEditModal=() => {handleOpenModal('edit'); setSeminarId(id)}
  const handleOpenDeleteModal=() => {handleOpenModal('delete'); setSeminarId(id)}
  return (
    <div className='border rounded-sm border-indigo-100 w-xs h-[9.375rem] md:h-[11.875rem] md:w-sm p-2 md:p-4 relative'>
      <div className='flex items-center gap-x-[10px]  '>
        <div className='min-w-[6.25rem] md:min-w-[9.375rem] h-[6.0625rem] md:h-[9.125rem] border border-slate-300 rounded-md'>
          <LazyLoadImage
            src={photo}
            className='max-w-[6.25rem] md:max-w-[9.375rem] rounded-md object-contain'
            alt='seminar-photo'
          />
        </div>
        <div className='flex flex-col justify-between '>
          <div className='flex flex-col h-auto overflow-auto'>
            <h2 className='text-center font-bold text-base text-amber-600 w-[190px] truncate'>
              {title}
            </h2>
            <p className='text-center text-sm mb-1 text-neutral-600 border-b'>
              {date} {time}
            </p>
            <p className=' my-1 text-neutral-900 text-sm max-h-[58px] md:max-h-[98px] overflow-auto'>{description}</p>
          </div>
          <div className='flex gap-x-[10px] absolute bottom-1 right-1'>
            <Pen
              className='size-6 p-1 border rounded-sm border-indigo-100 hover:cursor-pointer hover:bg-indigo-100 bg-indigo-50'
              onClick={handleOpenEditModal}
            />
            <Trash
              className='size-6 p-1 border rounded-sm border-indigo-100 hover:cursor-pointer hover:bg-indigo-100 bg-indigo-50'
              onClick={handleOpenDeleteModal}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
