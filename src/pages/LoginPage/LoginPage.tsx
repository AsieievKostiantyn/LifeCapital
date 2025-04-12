import { SubmitHandler, useForm } from 'react-hook-form';
import cls from './LoginPage.module.scss';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/useAuth';

interface LoginPageData {
  email: string;
  password: string;
}

const LoginPage = () => {
  const { login } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LoginPageData>();

  const onSubmitLoginForm: SubmitHandler<LoginPageData> = (data) => {
    try {
      login(data.email, data.password);
      reset();
    } catch (error) {
      console.error('Error with registration', error);
    }
  };

  return (
    <div className={cls.pageContainer}>
      <div className={cls.container}>
        <h2 className={cls.title}>Авторизація</h2>
        <form onSubmit={handleSubmit(onSubmitLoginForm)}>
          <div className={cls.inputGroup}>
            <label htmlFor="email" className={cls.label}>
              Електронна пошта:
              {errors.email && (
                <span className={cls.validatingErrorMessage}>
                  {' '}
                  *{errors.email.message}
                </span>
              )}
            </label>
            <input
              type="email"
              id="email"
              className={cls.input}
              placeholder="Введіть вашу електронну пошту"
              {...register('email', {
                required: 'Email обов`язковий.',
                pattern: {
                  value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                  message: 'Невірний формат email.',
                },
              })}
            />
          </div>
          <div className={cls.inputGroup}>
            <label htmlFor="password" className={cls.label}>
              Пароль:
              {errors.password && (
                <span className={cls.validatingErrorMessage}>
                  {' '}
                  *{errors.password.message}
                </span>
              )}
            </label>
            <input
              type="password"
              id="password"
              className={cls.input}
              placeholder="Введіть ваш пароль"
              {...register('password', {
                required: 'Пароль обов`язковий.',
                minLength: {
                  value: 8,
                  message: 'Пароль повинен містити мінімум 8 символів.',
                },
              })}
            />
          </div>
          <button type="submit">Увійти</button>
          <div className={cls.links}>
            <a href="#" className={cls.link}>
              Забули пароль?
            </a>
            <span className={cls.separator}>|</span>
            <Link to="/register" className={cls.link}>
              Зареєструватися
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
