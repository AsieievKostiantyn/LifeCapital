import { SubmitHandler, useForm } from 'react-hook-form';
import cls from './LoginPage.module.scss';
import { useAuth } from '../../context/useAuth';
import { Link } from 'react-router-dom';

interface RegisterPageData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const RegisterPage = () => {
  const { register: registerUser } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm<RegisterPageData>();

  const onSumbitRegisterPageData: SubmitHandler<RegisterPageData> = (data) => {
    try {
      registerUser(data.email, data.password, data.name);
      reset();
    } catch (error) {
      console.error('Error with registration', error);
    }
  };

  return (
    <div className={cls.pageContainer}>
      <div className={cls.container}>
        <h2 className={cls.title}>Реєстрація</h2>
        <form onSubmit={handleSubmit(onSumbitRegisterPageData)}>
          <div className={cls.inputGroup}>
            <label htmlFor="name" className={cls.label}>
              Ім’я:
              {errors.name && (
                <span className={cls.validatingErrorMessage}>
                  {' '}
                  *{errors.name.message}
                </span>
              )}
            </label>
            <input
              type="text"
              id="name"
              className={cls.input}
              placeholder="Введіть ваше ім’я"
              {...register('name', {
                required: "Ім’я користувача обов'язкове.",
                minLength: {
                  value: 3,
                  message: 'Ім’я має містити щонайменше 3 символи.',
                },
              })}
            />
          </div>

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
                required: 'Email обов’язковий.',
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
                required: 'Пароль обов’язковий.',
                minLength: {
                  value: 8,
                  message: 'Пароль має містити щонайменше 8 символів.',
                },
              })}
            />
          </div>

          <div className={cls.inputGroup}>
            <label htmlFor="confirmPassword" className={cls.label}>
              Підтвердіть пароль:
              {errors.confirmPassword && (
                <span className={cls.validatingErrorMessage}>
                  {' '}
                  *{errors.confirmPassword.message}
                </span>
              )}
            </label>
            <input
              type="password"
              id="confirmPassword"
              className={cls.input}
              placeholder="Підтвердіть ваш пароль"
              {...register('confirmPassword', {
                required: 'Підтвердження пароля обов’язкове.',
                validate: (value) =>
                  value === watch('password') || 'Паролі не збігаються.',
              })}
            />
          </div>

          <button type="submit">Зареєструватися</button>

          <div className={cls.links}>
            <Link to="/login" className={cls.link}>
              Вже є аккаунт? Увійти
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
