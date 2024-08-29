import React, { useState } from 'react';
import styles from './ProfileMenu.module.scss';

import { BiSolidUserDetail } from 'react-icons/bi';
import ProfileGuest from '../ProfileGuest/ProfileGuest';
import ProfileUser from '../ProfileUser/ProfileUser';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

const ProfileMenu: React.FC = () => {
  const [ showMenu, setShowMenu ] = useState(false);

  const onClick = () => {
    setShowMenu((prev) => !prev);
  };

  const onClose = () => {
    setShowMenu(false);
  };

  const user = useSelector((state: RootState) => state.auth.user);

  return (
    <div className={styles['profile-dropdown']} >
        <div className='menu-container'>
            <div className='menu-trigger' onClick={onClick}>
                <BiSolidUserDetail className={styles['menu-trigger-ico']} />
            </div>

            <div className={`${styles['dropdown-menu']} ${showMenu ? styles['active'] : styles['inactive']}`} >
                {!user  && <div onClick={onClose}><ProfileGuest /></div>}
                {user  && <div ><ProfileUser /></div>}
            </div>
        </div>
    </div>
  )
}

export default ProfileMenu;
