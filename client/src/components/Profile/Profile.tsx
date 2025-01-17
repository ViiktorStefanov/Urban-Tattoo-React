import React from 'react';
import styles from './Profile.module.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

import { BiUserPin } from 'react-icons/bi';
import { customComparator } from '../../services/customComparator';

const Profile: React.FC = () => {

  const user = useSelector((state: RootState) => state.auth.user)!;

  const reservationsArray = user.reservations.slice(0);
  const sortedReservations = reservationsArray.sort(customComparator);

  return (
    <section className={styles.profilePage}>
    <div className={styles['profile-wrapper']}>
        <span className={styles['user-logo-wrapper']}>
            <BiUserPin className={styles['user-logo']} />
        </span>
        <span className={styles['user-info']}>
            <p className={styles['user-info-category']}>Email: </p>
            <p className={styles['user-info-email']}>{user.email}</p>
        </span>
        <span className={styles['user-info']}>
            <p className={styles['user-info-category']}>First name: </p>
            <p className={styles['user-info-name']}>{user.firstName}</p>
        </span>
        <span className={styles['user-info']}>
            <p className={styles['user-info-category']}>Last name: </p>
            <p className={styles['user-info-name']}>{user.lastName}</p>
        </span>
        <span className={styles['user-info']}>
            <p className={styles['user-info-category']}>Phone: </p>
            <p className={styles['user-info-phone']}>{user.phone}</p>
        </span>
        <span className={user.reservations.length === 0 ? styles['span-user-info-reservation'] : styles['user-info-reservation']}>
            <p className={styles['user-info-category']}>Reservations: </p>
            <div className={styles['reservation-list']}>
                {user.reservations.length === 0 ? <p className={styles['user-info-reservation-p']}>none</p> : null}
                {user.reservations.length > 0 ? sortedReservations.map((r, index) => <span className={styles['span-reservation']} key={index}>{r.date} - {r.hour}</span>) : null}
            </div>
        </span>
    </div>
</section>
  )
}

export default Profile
