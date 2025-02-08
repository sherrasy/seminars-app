import Card from '../card/card';
import Modal from '../modals/modal';
import DeleteModalBody from '../modals/delete-modal-body';
import { useState } from 'react';
import EditModalBody from '../modals/edit-modal-body';
import Loader from '../loader/loader';

function App() {
  const cards = [
    {
      id: 1,
      title: 'Новинки Kosmoteros',
      description: 'Обзор новых средств и методик от Kosmoteros.',
      date: '01.02.2025',
      time: '10:00',
      photo: 'https://picsum.photos/id/1/750/730',
    },
  ];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState('');
  const isLoading = false;
  const handleOpenModal = (type: string) => {
    setIsModalOpen(true);
    setModalType(type);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setModalType('');
  };
  return (
    <div className='w-screen h-dvh flex flex-col items-center bg-slate-50 p-10'>
      <h1 className='text-indigo-600 font-bold mb-4'>Семинары</h1>
      {isLoading ? (
        <Loader />
      ) : (
        <div className='flex flex-wrap gap-10 justify-center'>
          {cards.map((card) => (
            <Card key={card.id} card={card} handleOpenModal={handleOpenModal} />
          ))}
        </div>
      )}
        <Modal
          isOpen={isModalOpen}
          onClose={() => handleCloseModal()}
          hasCloseBtn={true}
        >
          {modalType === 'delete' && <DeleteModalBody />}
          {modalType === 'edit' && <EditModalBody />}
        </Modal>
    </div>
  );
}

export default App;
