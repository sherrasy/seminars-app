import { Seminar } from '../../types/card.interface';
import Pen from '../../assets/pen.svg?react';
import Trash from '../../assets/trash.svg?react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

type CardProps = {
  card: Seminar;
};
function Card({ card }: CardProps) {
  const { title, description, date, time, photo } = card;
  return (
    <div className='border rounded-sm border-indigo-100 w-md p-4'>
      <div className='flex gap-x-[10px]'>
        <div className='min-w-[12.5rem] border border-slate-300 rounded-md'>
        <LazyLoadImage
          src={photo}
          className='max-w-[12.5rem] h-[12.125rem] rounded-md object-contain'
          alt='seminar-photo'
        /></div>
        <div className='flex flex-col justify-between'>
          <div className='flex flex-col'>
            <h2 className='text-center font-bold text-lg mb-2 text-amber-600'>
              {title}
            </h2>
            <p className='text-center text-sm mb-2'>
              {date} {time}
            </p>
            <p className='border-t py-2'>{description}</p>
          </div>
          <div className='flex justify-end gap-x-[10px]'>
            <Pen className='size-6 p-1 border rounded-sm border-indigo-100 hover:cursor-pointer hover:bg-indigo-100 bg-indigo-50' />
            <Trash className='size-6 p-1 border rounded-sm border-indigo-100 hover:cursor-pointer hover:bg-indigo-100 bg-indigo-50' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
