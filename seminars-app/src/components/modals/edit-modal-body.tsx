import { useEffect, useRef } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

export interface SeminarForm {
  id?:number
  name: string
}

function EditModalBody() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors,
    reset
  } = useForm<SeminarForm>({ mode: 'onBlur', reValidateMode: 'onSubmit' });
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleSeminarSubmit: SubmitHandler<SeminarForm> = (data) => {
    console.log(data)
    reset();
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
    <div className='flex flex-col items-center px-10 py-8'>
      <h2 className='text-indigo-600 font-bold text-xl mb-4'>Редактировать семинар</h2>
      <form onSubmit={handleSubmit(handleSeminarSubmit)}>
      <div className='flex flex-col gap-5'>
        <label className='flex justify-between items-center gap-5 '>
          <span >Название</span>
          <input
            placeholder='Название семинара'
            className="bg-transparent p-1.5 border-b-neutral-600 border-[none] border-b border-solid"
            type='text'
            autoComplete='off'
            {...register('name', {
              required: 'Заполните поле',
            })}
          />
        </label>
        {errors.name && <p className='text-sm text-amber-600 relative h-px self-end m-0 bottom-3.5'> {errors.name.message}</p>}
        <button type='submit' className='px-2 py-1 text-sm bg-amber-600 border-2 border-amber-900 rounded-lg hover:bg-amber-500 hover:cursor-pointer'>
          Сохранить
        </button>
      </div>
    </form>
    </div>
  );
}

export default EditModalBody;
