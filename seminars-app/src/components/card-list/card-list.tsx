import { observer } from 'mobx-react';
import Card from '../card/card';
import Loader from '../loader/loader';
import seminarsStore from '../../store/seminars-data';

type CardListProps = {
  handleOpenModal: (type: string) => void;
};

const CardList = observer(({ handleOpenModal }: CardListProps) => {
  const { isLoading, seminars, hasError } = seminarsStore;

  if (isLoading) {
    return <Loader />;
  }

  if (hasError) {
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
    <div className='flex flex-wrap gap-10 justify-center'>
      {seminars.map((card) => (
        <Card key={card.id} card={card} handleOpenModal={handleOpenModal} />
      ))}
    </div>
  );
});
export default CardList;
