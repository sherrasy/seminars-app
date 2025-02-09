import { useEffect, useRef } from 'react';

type ModalProps = {
  isOpen: boolean;
  hasCloseBtn?: boolean;
  onClose?: () => void;
  children: React.ReactNode;
};

const Modal = ({ isOpen, hasCloseBtn, onClose, children }: ModalProps) => {
  const modalRef = useRef<HTMLDialogElement>(null);

  const handleCloseModal = () => {
    if (onClose) {
      onClose();
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDialogElement>) => {
    if (event.key === 'Escape') {
      handleCloseModal();
    }
  };

  useEffect(() => {
    const modalElement = modalRef.current;
    if (!modalElement) return;
    if (isOpen) {
      modalElement.showModal();
    } else {
      modalElement.close();
    }
  }, [isOpen]);

  return (
    <dialog className='rounded-xl p-2 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' ref={modalRef} onKeyDown={handleKeyDown}>
      {hasCloseBtn && (
        <button className='hover:text-neutral-700 relative left-[92%] px-2' aria-label='modal-close-btn' onClick={handleCloseModal}>
          X
        </button>
      )}
      {children}
    </dialog>
  );
};

export default Modal;
