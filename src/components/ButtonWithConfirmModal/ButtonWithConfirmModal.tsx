import { useState, useEffect, useRef } from 'react';
import cls from './ButtonWithConfirmModal.module.scss';

interface ButtonWithConfirmModalProps {
  buttonText: string;
  modalTitle: string;
  modalDescription: string;
  confirmText?: string;
  cancelText?: string;
  onConfirm: () => void;
}

const ButtonWithConfirmModal = ({
  buttonText,
  modalTitle,
  modalDescription,
  confirmText = 'Підтвердити',
  cancelText = 'Скасувати',
  onConfirm,
}: ButtonWithConfirmModalProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsModalOpen(false);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    if (isModalOpen && modalRef.current) {
      modalRef.current.focus();
    }
  }, [isModalOpen]);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      setIsModalOpen(false);
    }
  };

  const handleConfirm = () => {
    onConfirm();
    setIsModalOpen(false);
  };

  return (
    <>
      <button className={cls.button} onClick={() => setIsModalOpen(true)}>
        {buttonText}
      </button>

      {isModalOpen && (
        <div className={cls.backdrop} onClick={handleBackdropClick}>
          <div
            className={cls.modal}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            aria-describedby="modal-desc"
            tabIndex={-1}
            ref={modalRef}
          >
            <h2 id="modal-title">{modalTitle}</h2>
            <p id="modal-desc">{modalDescription}</p>
            <div className={cls.actions}>
              <button onClick={handleConfirm} className={cls.confirmButton}>
                {confirmText}
              </button>
              <button
                onClick={() => setIsModalOpen(false)}
                className={cls.cancelButton}
              >
                {cancelText}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ButtonWithConfirmModal;
