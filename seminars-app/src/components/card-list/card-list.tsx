import { observer } from 'mobx-react';
import Card from '../card/card';
import Loader from '../loader/loader';
import seminarsStore from '../../store/seminars-data';

type CardListProps = {
  handleOpenModal: (type: string) => void;
};

const CardList = observer(({ handleOpenModal }: CardListProps) => {
  const { isLoading, seminars, hasLoadingError } = seminarsStore;
  
  if (isLoading) {
    return <Loader />;
  }

  if (hasLoadingError) {
    return (
      <p className='text-red-900 text-2xl self-center'>
        Ошибка загрузки семинаров
      </p>
    );
  }

  if (!seminars || seminars.length === 0) {
    return (
      <p className='text-amber-900 text-2xl self-center'>
        Нет данных о семинарах
      </p>
    );
  }

  return (
    <div className=' w-full gap-10 grid justify-center grid-cols-[repeat(auto-fit,w-xs)] md:grid-cols-[repeat(auto-fit,384px)]'>
      {seminars.map((card) => (
        <Card key={card.id} card={card} handleOpenModal={handleOpenModal} />
      ))}
    </div>
  );
});
export default CardList;
