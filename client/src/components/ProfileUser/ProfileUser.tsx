import React, { useState } from 'react';
import styles from './ProfileUser.module.scss';
import { Link } from 'react-router-dom';

import { FiEdit } from 'react-icons/fi';
import { CgProfile, CgLogOut } from 'react-icons/cg';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

const ProfileUser: React.FC = () => {

  const user = useSelector((state: RootState) => state.auth.user);

  const [isSubmit, setIsSubmit ] = useState(false);

  const onLogout = () => {
    setIsSubmit(true);
  }

  return (
    <>
    <div className={styles['dropdownItem-info']}>
        <span className={styles['dropdownItem-name']}>{`${user && user.firstName} ${ user && user.lastName}`}</span>
        <span className={styles['dropdownItem-email']}>{user && user.email}</span>
    </div>
    <ul>
        <li className={styles['dropdownItem']}>
            <CgProfile className={styles['dropdownItem-ico']} />
            <Link to={`/profile/${user && user._id}`} className={styles['dropdownItem-link']}>My Profile</Link>
        </li>
        <li className={styles['dropdownItem']}>
            <FiEdit className={styles['dropdownItem-ico']} />
            <Link to={`/profile/edit/${user && user._id}`} className={styles['dropdownItem-link']}>Edit Profile</Link>
        </li>
        <fieldset className={styles.fieldset} onClick={onLogout} disabled={isSubmit ? true : false}>
            <li className={styles['dropdownItem']}>
                <CgLogOut className={styles['dropdownItem-ico']} />
                <span className={styles['dropdownItem-link']}>
                  Logout
                </span>
            </li>
        </fieldset>
    </ul>
</>
  )
}

export default ProfileUser;
