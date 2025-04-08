import { useState, useEffect, useRef } from 'react';
import cls from './FinishGameButton.module.scss';

const FinishGameButton = () => {
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

  const handleFinishGame = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <>
      <button className={cls.finishButton} onClick={() => setIsModalOpen(true)}>
        Завершити гру
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
            <h2 id="modal-title">Підтвердження завершення гри</h2>
            <p id="modal-desc">
              Ви впевнені, що хочете завершити гру? Усі дані буде втрачено.
            </p>
            <div className={cls.actions}>
              <button onClick={handleFinishGame} className={cls.confirmButton}>
                Так, завершити
              </button>
              <button
                onClick={() => setIsModalOpen(false)}
                className={cls.cancelButton}
              >
                Скасувати
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FinishGameButton;
