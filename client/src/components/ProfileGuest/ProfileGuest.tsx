import React from 'react';
import styles from './ProfileGuest.module.scss';

import { FiEdit, FiLogIn } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { profileGuestItems } from '../../constants/profileGuestItems';

const ProfileGuest: React.FC = () => {
  return (
    <>
            <div className={styles['dropdownItem-info']}>
                <span className={styles['dropdownItem-name']}>{profileGuestItems.Guest.title}</span>
            </div>
            <ul>
                <li className={styles['dropdownItem']}>
                    <FiLogIn className={styles['dropdownItem-ico']} />
                    <Link to={profileGuestItems.login.route} className={styles['dropdownItem-link']}>{profileGuestItems.login.title}</Link>
                </li>
                <li className={styles['dropdownItem']}>
                    <FiEdit className={styles['dropdownItem-ico']} />
                    <Link to={profileGuestItems.register.route} className={styles['dropdownItem-link']}>{profileGuestItems.register.title}</Link>
                </li>
            </ul>
        </>
  )
}

export default ProfileGuest
