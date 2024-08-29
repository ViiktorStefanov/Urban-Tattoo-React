import React from 'react';
import styles from './DesktopNavigation.module.scss';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { navItems } from '../../constants/navItems';

const DesktopNavigation: React.FC = () => {

  const user = useSelector((state: RootState) => state.auth.user);

  return (
    <nav>
        <ul className={styles['nav-bar']}>
            <li className={`${styles['nav-link']} ${styles['home']} ${styles['nav-li']} ${styles['navigation']}`}>
                <Link to={navItems.home.route}>{navItems.home.title}</Link>
            </li>
            <li id="gallery" className={`${styles['nav-link']} ${styles['gallery']} ${styles['nav-li']} ${styles['navigation']}`}>
                <Link to={navItems.gallery.route}>{navItems.gallery.title}</Link>
            </li>
            <li className={`${styles['nav-logo']} ${styles['nav-li']}`}>
                <Link to={navItems.home.route}><img src="/assets/images/logo new 2023 transperant cutted.png" alt="logo" /></Link>
            </li>
            <li className={`${styles['nav-link']} ${styles['booking']} ${styles['nav-li']} ${styles['navigation']}`}>
                <Link to={navItems.booking.route}>{navItems.booking.title}</Link>
            </li>
            {user && user._role === 'user' ? <li className={`${styles['nav-link']} ${styles['contact']} ${styles['nav-li']} ${styles['navigation']}`}>
                <Link to={navItems.contact.route}>{navItems.contact.title}</Link></li> : null}
            {!user && <li className={`${styles['nav-link']} ${styles['contact']} ${styles['nav-li']} ${styles['navigation']}`}>
                <Link to={navItems.contact.route}>{navItems.contact.title}</Link></li>}
            {     
            user && user._role === 'admin' && <li className={`${styles['nav-link']} ${styles['upload']} ${styles['nav-li']} ${styles['navigation']}`}>
                <Link to={navItems.upload.route}>{navItems.upload.title}</Link></li>                     
            }
        </ul>
    </nav>
  )
};

export default DesktopNavigation;
