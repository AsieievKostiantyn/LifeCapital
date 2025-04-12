import cls from './LoginPage.module.scss';

const ForgetPasswordPage: React.FC = () => {
  return (
    <div className={cls.pageContainer}>
      <div className={cls.container}>
        <h2 className={cls.title}>Відновлення пароля</h2>
        <form>
          <div className={cls.inputGroup}>
            <label htmlFor="email" className={cls.label}>
              Електронна пошта:
            </label>
            <input
              type="email"
              id="email"
              className={cls.input}
              placeholder="Введіть вашу електронну пошту"
            />
          </div>
          <button type="submit">Відновити пароль</button>
          <div className={cls.links}>
            <a href="/login" className={cls.link}>
              Повернутися до авторизації
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgetPasswordPage;
