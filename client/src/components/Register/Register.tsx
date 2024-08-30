import React, { useState } from 'react';
import styles from './Register.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import useValidate from '../../hooks/useValidate';
import { registerValidator } from '../../services/validation';
import useForm from '../../hooks/useForm';
import { registerMessages } from '../../constants/validationMessages';
import notification from '../../services/notification';
import { useDispatch } from 'react-redux';
import { setIsFailed, setIsLoading, setIsSucessful, setUser } from '../../store/authSlice';
import { register } from '../../services/authService';
import { RegisterData } from '../../types/User';

const Register: React.FC = () => {

  const [isSubmit, setIsSubmit ] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const primaryValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    repeatPassword: '',
    phone: '',
};

const primaryValidationValues = {
    firstName: false,
    lastName: false,
    email: false,
    password: false,
    repeatPassword: false,
    phone: false,
};

const onRegisterSubmit = async (data: RegisterData) => {
    const { repeatPassword, ...registerData } = data;

    if(!data.firstName || !data.lastName || !data.phone || !data.email || !data.password || !data.repeatPassword) {
        return notification.warning('All fields are required');
    };

    if(data.password !== repeatPassword) {
        return notification.warning('Passwords do not match');
    };

    try {
        setIsSubmit(true);
        dispatch(setIsLoading());
        const result = await register(registerData);
        notification.success('Registration successful', 3000);
        dispatch(setUser(result));
        navigate('/')
    } catch (e:any) {
        dispatch(setIsFailed());
        return notification.error(e.message, 3000);
    } finally {
        setIsSubmit(false);
        dispatch(setIsSucessful());
    }

};

const { values, onChange, onSubmit } = useForm(primaryValues, onRegisterSubmit);

const { onBlur, validationErrors } = useValidate(primaryValidationValues, values, registerValidator);

const disabled = Object.values(validationErrors).some(error => error) || isSubmit;

  return (
    <section id="registerPage" className={styles.registerPage}>
            <form onSubmit={onSubmit} className={styles.registerForm} method='POST'>
                <div>
                    <label
                        htmlFor="name">
                        First name:
                    </label>
                    <input
                        className={validationErrors.firstName ? styles.warning : ''}
                        onChange={onChange}
                        onBlur={onBlur}
                        id="firstName"
                        name="firstName"
                        type="text"
                        placeholder="First name"
                        value={values.firstName}
                    />
                     {
                        validationErrors.firstName ?
                            <p className={styles['validation-message']}>
                                {registerMessages.firstName}
                            </p>
                            : null
                    }
                </div>

                <div>
                    <label
                        htmlFor="name">
                        Last name:
                    </label>
                    <input
                        className={validationErrors.lastName ? styles.warning : ''}
                        onChange={onChange}
                        onBlur={onBlur}
                        id="lastName"
                        name="lastName"
                        type="text"
                        placeholder="Last name"
                        value={values.lastName}
                    />
                    {
                        validationErrors.lastName ?
                            <p className={styles['validation-message']}>
                                {registerMessages.lastName}
                            </p>
                            : null
                    }
                </div>

                <div>
                    <label
                        htmlFor="email">
                        Email:
                    </label>
                    <input
                        onChange={onChange}
                        className={validationErrors.email ? styles.warning : ''}
                        onBlur={onBlur}
                        id="email"
                        name="email"
                        type="text"
                        value={values.email}
                        placeholder="example@email.com"
                    />
                    {
                        validationErrors.email ?
                            <p className={styles['validation-message']}>
                                {registerMessages.email}
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
                        className={validationErrors.password ? styles.warning : ''}
                        onChange={onChange}
                        onBlur={onBlur}
                        id="password"
                        name="password"
                        type="password"
                        placeholder="New password"
                        value={values.password}
                    />
                    {
                        validationErrors.password ?
                            <p className={styles['validation-message']}>
                                {registerMessages.password}
                            </p>
                            : null
                    }
                </div>

                <div>
                    <label
                        htmlFor="repeatPassword">
                        Repeat Password:
                    </label>
                    <input
                        className={validationErrors.repeatPassword ? styles.warning : ''}
                        onChange={onChange}
                        onBlur={onBlur}
                        id="repeatPassword"
                        name="repeatPassword"
                        type="password"
                        placeholder="Repeat Password"
                        value={values.repeatPassword}
                    />
                    {
                        validationErrors.repeatPassword ?
                            <p className={styles['validation-message']}>
                                {registerMessages.repeatPassword}
                            </p>
                            : null
                    }
                </div>


                <div>
                    <label
                        htmlFor="phone">
                        Phone:
                    </label>
                    <input
                        className={validationErrors.phone ? styles.warning : ''}
                        onChange={onChange}
                        onBlur={onBlur}
                        id="phone"
                        name="phone"
                        type="text"
                        placeholder="+359886003010"
                        value={values.phone}
                    />
                    {
                        validationErrors.phone ?
                            <p className={styles['validation-message']}>
                                {registerMessages.phone}
                            </p>
                            : null
                    }
                </div>


                <button
                    className={styles.button}
                    disabled={ disabled }
                    type="submit">
                    {isSubmit ? 'Loading...' : 'Sign up'}
                </button>

                <p className={styles.field}>
                    <span>
                        Sign in
                        <Link to={'/login'} className={styles['reg-btn']} >
                            here
                        </Link>
                    </span>
                </p>
            </form>
        </section>
  )
}

export default Register
