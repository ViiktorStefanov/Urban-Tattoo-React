import React, { useState } from 'react';
import styles from './EditProfile.module.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import useForm from '../../hooks/useForm';
import useValidate from '../../hooks/useValidate';
import { editProfileValidator } from '../../services/validation';
import { editProfileMessages } from '../../constants/validationMessages';
import { FiEdit } from 'react-icons/fi';

const EditProfile: React.FC = () => {
  const [isSubmit, setIsSubmit ] = useState(false);
  const [isDeleteSubmit, setIsDeleteSubmit ] = useState(false);
  const user = useSelector((state: RootState) => state.auth.user)!;

  const primaryValues = {
    firstName: user.firstName,
    lastName: user.lastName,
    phone: user.phone,
};

const primaryValidationValues = {
    firstName: false,
    lastName: false,
    phone: false,
};

const onEditSubmit = async () => {

};

const onDelete = async () => {

};

const { values, onChange, onSubmit } = useForm(primaryValues, onEditSubmit);

const { onBlur, validationErrors } = useValidate(primaryValidationValues, values, editProfileValidator);

const disabled = Object.values(validationErrors).some(x => x) || isSubmit;

  return (
    <section id="editProfilePage" className={styles.editProfilePage}>
    <form onSubmit={onSubmit} className={styles.editForm}>

        <div>
            <FiEdit className={styles['dropdownItem-ico']} />
        </div>

        <div>
            <label
                htmlFor="name">
                First name:
            </label>
            <input
                className={validationErrors.firstName ? styles.warning : ''}
                id="firstName"
                name="firstName"
                type="text"
                value={values.firstName}
                onChange={onChange}
                onBlur={onBlur}
            />
             {
                validationErrors.firstName ?
                    <p className={styles['validation-message']}>
                        {editProfileMessages.firstName}
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
                className={validationErrors.lastName ? styles.warning : '' }
                id="lastName"
                name="lastName"
                type="text"
                value={values.lastName}
                onChange={onChange}
                onBlur={onBlur}
            />
             {
                validationErrors.lastName ?
                    <p className={styles['validation-message']}>
                        {editProfileMessages.lastName}
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
                className={validationErrors.phone ? styles.warning : '' }
                id="phone"
                name="phone"
                type="number"
                value={values.phone}
                onChange={onChange}
                onBlur={onBlur}
            />
             {
                validationErrors.phone ?
                    <p className={styles['validation-message']}>
                        {editProfileMessages.phone}
                    </p>
                    : null
            }
        </div>

        <div className={styles['deleteProfileDiv']}>
            <button
                onClick={(e) => { e.preventDefault(); onDelete() }}
                disabled={isDeleteSubmit ? true : false}
                className={styles['deleteProfileBtn']}>
                Delete profile
            </button>
        </div>
        <button
            className={styles.button}
            disabled={disabled}
            type="submit">
            {isSubmit ? 'Loading...' : 'Save'}
        </button>
    </form>
</section>
  )
}

export default EditProfile
