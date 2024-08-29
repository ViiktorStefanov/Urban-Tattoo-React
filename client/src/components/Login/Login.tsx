import React, { useState } from 'react';
import styles from './Login.module.scss';

import { Link, useNavigate } from 'react-router-dom';

import { loginMessages } from '../../constants/validationMessages';
import useForm from '../../hooks/useForm';
import useValidate from '../../hooks/useValidate';
import { loginValidator } from '../../services/validation';
import notification from '../../services/notification';
import { LoginData } from '../../types/User';
import { login } from '../../services/authService';
import { useDispatch } from 'react-redux';
import { setIsFailed, setIsLoading, setIsSucessful, setUser } from '../../store/authSlice';


const Login: React.FC = () => {

  const [isSubmit, setIsSubmit ] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const primaryValues = {
    email: '',
    password: '',
  };

  const primaryValidationValues = {
    email: false,
    password: false,
  };

  const onLoginSubmit = async (data: LoginData) => {

    if(!data.email || !data.password) {
      return notification.warning('All fields are required');
    };

    try {
      setIsSubmit(true);
      dispatch(setIsLoading());
      const result = await login(data);
      notification.success('Login Successful', 3000);
      dispatch(setUser(result))
      navigate('/')
    } catch (e: any) {
      if (e.status === 403) {
          dispatch(setIsFailed());
          return notification.error('Invalid email or password', 3000);
      }
      dispatch(setIsFailed());
      notification.error(e.message, 3000);
    } finally {
      dispatch(setIsSucessful());
      setIsSubmit(false);
    }
}

const { values, onChange, onSubmit } = useForm(primaryValues, onLoginSubmit);

const { onBlur, validationErrors } = useValidate(primaryValidationValues, values, loginValidator);

 const disabled = Object.values(validationErrors).some(error => error) || isSubmit;

  return (
    <section id="loginPage" className={styles.loginPage}>
    <form className={styles.loginForm} onSubmit={onSubmit} method='POST'>
        <div>
            <label
                htmlFor="email">
                Email:
            </label>
            <input
                onChange={onChange}
                onBlur={onBlur}
                className={validationErrors.email ? styles.warning : ''}
                id="email"
                name="email"
                type="text"
                placeholder="example@email.com"
                value={values.email}
            />
            {
                validationErrors.email ?
                    <p className={styles['validation-message']}>
                        {loginMessages.email}
                    </p>
                    : null
            }
        </div>
        <div>
            <label
                htmlFor="password">
                Password:
            </label>
            <input
                onChange={onChange}
                onBlur={onBlur}
                className={validationErrors.password ? styles.warning : ''}
                id="password"
                name="password"
                type="password"
                placeholder="********"
                value={values.password}
            />
              {
                validationErrors.password ?
                    <p className={styles['validation-message']}>
                        {loginMessages.password}
                    </p>
                    : null
            }
        </div>
        <button className={styles.button} disabled={disabled} type="submit">{isSubmit ? 'Loading...' : 'Sign in'}</button>
        <p className={styles.field}>
            <span>Sign up <Link to={'/register'} className={styles['log-btn']}>here</Link></span>
        </p>
    </form>
</section>
  )
};

export default Login;
