import { useState } from 'react';
import CardList from '../card-list/card-list';
import DeleteModalBody from '../modals/delete-modal-body';
import EditModalBody from '../modals/edit-modal-body';
import Modal from '../modals/modal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState('');
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
      <CardList handleOpenModal={handleOpenModal}/>
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
