import React, { useState } from 'react';
import styles from './MobileNavigation.module.scss';

import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { navItems } from '../../constants/navItems';
import { Link } from 'react-router-dom';

import { IoMenu } from "react-icons/io5";
import { IoIosCloseCircleOutline } from "react-icons/io";

const MobileNavigation: React.FC = () => {

  const user = useSelector((state: RootState) => state.auth.user);

  const [showMenu, setShowMenu ] = useState(false);

  const onClick = () => {
    setShowMenu((prev) => !prev);
  };

  const onClose = () => {
    setShowMenu(false);
  };
    
  return (
    <div className={styles['responsive-navigation-dropdown']}>
            <div className={styles['menu-container']}>
                <div className={styles['navigation-menu-trigger']} onClick={onClick}>
                    <IoMenu className={styles['navigation-menu-trigger-ico']} />
                </div>

                <div className={styles['logo-wrapper']}>
                    <Link to={navItems.home.route}><img src="/assets/images/logo new 2023 transperant cutted.png" alt="logo" /></Link>
                </div>

                <div className={`${styles['dropdown-navigation']} ${showMenu ? styles['active'] : styles['inactive']}`} >
                    <IoIosCloseCircleOutline className={styles['close-icon']} onClick={onClose} />
                    <ul>
                        <li className={`${styles['nav-logo']}`}>
                            <img src="/assets/images/logo new 2023 transperant cutted.png" alt="logo" />
                        </li>
                        <li className={styles['dropdown-navigation-dropdownItem']} onClick={onClose}>
                            <Link to={navItems.home.route} className={styles['dropdown-navigation-dropdownItem-link']} >{navItems.home.title}</Link>
                        </li>
                        <li className='dropdown-navigation-dropdownItem' onClick={onClose}>
                            <Link to={navItems.gallery.route} className={styles['dropdown-navigation-dropdownItem-link']}>{navItems.gallery.title}</Link>
                        </li>
                        <li className='dropdown-navigation-dropdownItem' onClick={onClose}>
                            <Link to={navItems.booking.route} className={styles['dropdown-navigation-dropdownItem-link']}>{navItems.booking.title}</Link>
                        </li>
                        {
                            user && user._role === 'user' ?
                                <li className='dropdown-navigation-dropdownItem' onClick={onClose}>
                                    <Link to={navItems.contact.route} className={styles['dropdown-navigation-dropdownItem-link']}>{navItems.contact.title}</Link>
                                </li> : null
                        }
                        {
                            !user &&
                            <li className='dropdown-navigation-dropdownItem' onClick={onClose}>
                                <Link to={navItems.contact.route} className={styles['dropdown-navigation-dropdownItem-link']}>{navItems.contact.title}</Link>
                            </li>
                        }
                        {
                            user && user._role === 'admin' &&
                            <li className='dropdown-navigation-dropdownItem' onClick={onClose}>
                                <Link to={navItems.upload.route} className={styles['dropdown-navigation-dropdownItem-link']}>{navItems.upload.title}</Link>
                            </li>
                        }
                    </ul>
                </div>
            </div>
        </div>
  )
};

export default MobileNavigation;
