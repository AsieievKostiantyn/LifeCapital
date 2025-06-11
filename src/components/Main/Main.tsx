import cls from './Main.module.scss';

interface MainProps {
  openMenu: () => void;
  children?: React.ReactNode;
}

const Main = ({ openMenu, children }: MainProps) => {
  return (
    <main className={cls.main}>
      <div className={cls.menuContainer}>
        <button className={cls.menuButton} onClick={openMenu}>
          <svg
            width="40px"
            height="40px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 18L20 18"
              stroke="#fff"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M4 12L20 12"
              stroke="#fff"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M4 6L20 6"
              stroke="#fff"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
        <p>Життєвий капітал</p>
      </div>

      {children}
    </main>
  );
};

export default Main;
