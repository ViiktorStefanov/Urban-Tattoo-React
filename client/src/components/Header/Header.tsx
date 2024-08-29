import React from 'react';
import styles from './Header.module.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import DesktopNavigation from '../DesktopNavigation/DesktopNavigation';
import MobileNavigation from '../MobileNavigation/MobileNavigation';
import ProfileMenu from '../ProfileMenu/ProfileMenu';

const Header: React.FC = () => {

  const isMobile = useSelector((state: RootState) => state.auth.isMobile);

  return (
    <header className={styles['header']}>
        { isMobile ? <MobileNavigation /> : <DesktopNavigation />}
        <ProfileMenu />
    </header>
  )
}

export default Header;
