import { observer } from 'mobx-react';
import { useEffect, useRef } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import seminarsStore from '../../store/seminars-data';
import { SeminarForm } from '../../types/seminar-form.interface';
import { AppMessage, FormFieldName, LabelName } from '../../utils/constant';

type EditModalBodyProps = {
  handleCloseModal: () => void;
};

const EditModalBody = observer(({ handleCloseModal }: EditModalBodyProps) => {
  const { updateSeminar, getCurrentSeminar, isPosting, hasError } =
    seminarsStore;
  const seminar = getCurrentSeminar();
  if (!seminar) {
    return (
      <div className='text-red-900 text-xl text-center h-20 leading-16'>
        <span className='inline-block align-middle leading-normal w-2/3'>
          {AppMessage.ErrorLoadingSeminar}
        </span>
      </div>
    );
  }
  const formatDate = (dateString: string) => {
    const [day, month, year] = dateString.split('.');
    return `${year}-${month}-${day}`;
  };
  const formattedDate = formatDate(seminar.date);

  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors,
  } = useForm<SeminarForm>({
    mode: 'onBlur',
    reValidateMode: 'onSubmit',
    defaultValues: { ...seminar, date: formattedDate },
  });

  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleSeminarSubmit: SubmitHandler<SeminarForm> = async ({
    title,
    description,
    date,
    time,
  }) => {
    const [year, month, day] = date.split('-');
    const newDate = `${day}.${month}.${year}`;
    await updateSeminar({ title, description, date: newDate, time });
    if (!hasError) {
      handleCloseModal();
    }
  };

  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      timerRef.current = setTimeout(() => {
        clearErrors('root');
      }, 4000);
    }
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [errors]);
  return (
    <div className='flex flex-col items-center px-10 pt-4 pb-8'>
      <h2 className='text-indigo-600 font-bold text-xl mb-4'>
        Редактировать семинар
      </h2>
      <form onSubmit={handleSubmit(handleSeminarSubmit)}>
        <div className='flex flex-col gap-5'>
          <label className='flex justify-between items-center gap-5 '>
            <span className='text-amber-600'>{LabelName.Title}</span>
            <input
              placeholder='Название семинара'
              className='bg-transparent p-1.5 border-b-neutral-600 border-[none] border-b border-solid w-[12.0625rem]'
              type='text'
              autoComplete='off'
              {...register(FormFieldName.Title, {
                required: 'Заполните поле',
              })}
            />
          </label>
          {errors.title && (
            <p className='text-sm text-amber-600 relative h-px self-end m-0 bottom-3.5'>
              {errors.title.message}
            </p>
          )}
          <label className='flex justify-between items-center gap-5 '>
            <span className='text-amber-600'>{LabelName.Description}</span>
            <textarea
              placeholder='Описание семинара'
              className='bg-transparent p-1.5 border-b-neutral-600 border-[none] border-b border-solid w-[12.0625rem] resize-none'
              autoComplete='off'
              {...register(FormFieldName.Description, {
                required: 'Заполните поле',
              })}
            />
          </label>
          {errors.title && (
            <p className='text-sm text-amber-600 relative h-px self-end m-0 bottom-3.5'>
              {errors.title.message}
            </p>
          )}
          <label className='flex justify-between items-center gap-5 '>
            <span className='text-amber-600'>{LabelName.Date}</span>
            <input
              className='bg-transparent p-1.5 border-b-neutral-600 border-[none] border-b border-solid w-[12.0625rem]'
              type='date'
              autoComplete='off'
              {...register(FormFieldName.Date, {
                required: 'Заполните поле',
              })}
            />
          </label>
          {errors.date && (
            <p className='text-sm text-amber-600 relative h-px self-end m-0 bottom-3.5'>
              {errors.date.message}
            </p>
          )}
          <label className='flex justify-between items-center gap-5 '>
            <span className='text-amber-600'>{LabelName.Time}</span>
            <input
              className='bg-transparent p-1.5 border-b-neutral-600 border-[none] border-b border-solid w-[12.0625rem]'
              type='time'
              autoComplete='off'
              {...register(FormFieldName.Time, {
                required: 'Заполните поле',
              })}
            />
          </label>
          {errors.time && (
            <p className='text-sm text-amber-600 relative h-px self-end m-0 bottom-3.5'>
              {errors.time.message}
            </p>
          )}
          <button
            type='submit'
            disabled={isPosting}
            className='px-2 py-1 text-sm bg-amber-600 border-2 border-amber-900 rounded-lg hover:bg-amber-500 hover:cursor-pointer disabled:cursor-default disabled:bg-neutral-200 '
          >
            Сохранить
          </button>
          {hasError && (
            <p className='text-sm text-red-900 relative h-px self-end m-0 bottom-3.5'>
              {AppMessage.ErrorUpdate}
            </p>
          )}
        </div>
      </form>
    </div>
  );
});

export default EditModalBody;
