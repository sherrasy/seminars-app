import { observer } from 'mobx-react';
import seminarsStore from '../../store/seminars-data';
import Card from '../card/card';
import Loader from '../loader/loader';
import { AppMessage } from '../../utils/constant';

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
        {AppMessage.ErrorLoadingList}
      </p>
    );
  }

  if (!seminars || seminars.length === 0) {
    return (
      <p className='text-amber-900 text-2xl self-center'>
        {AppMessage.EmptyList}
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
