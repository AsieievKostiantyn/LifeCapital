import { Link } from 'react-router-dom';
import cls from './Header.module.scss';
import ButtonWithConfirmModal from '../../components/ButtonWithConfirmModal/ButtonWithConfirmModal';
import { useAuth } from '../../context/useAuth';

interface HeaderProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  children: React.ReactNode;
}

const Header = ({ isOpen, setIsOpen, children }: HeaderProps) => {
  const { userData, logout } = useAuth();

  return (
    <>
      <header className={`${cls.header} ${isOpen ? cls.open : ''}`}>
        <div>
          <div className={cls.logo}>
            <h1>Життєвий капітал</h1>
          </div>
          {children}
        </div>

        <div className={cls.authDataContainer}>
          {userData ? (
            <>
              <p>{userData.displayName}</p>
              <ButtonWithConfirmModal
                buttonText="Вийти"
                modalTitle="Підтвердження виходу"
                modalDescription="Ви впевнені, що хочете вийти?"
                confirmText="Так, вийти"
                cancelText="Залишитися"
                onConfirm={logout}
              />
            </>
          ) : (
            <Link to="/login">Увійти</Link>
          )}
        </div>
      </header>

      {isOpen && (
        <div className={cls.overlay} onClick={() => setIsOpen(false)}></div>
      )}
    </>
  );
};

export default Header;
