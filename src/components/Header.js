import styles from '../styles/Header.module.css';
import Profile from './Profile';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header>
            <nav>
                <ul className={styles['nav-bar']}>
                    <li className={`${styles['nav-link']} ${styles['nav-li']} ${styles['navigation']} ${styles.home}`}>
                        {/* <a href="/">HOME</a> */}
                        <Link to="/">HOME</Link>
                    </li>
                    <li id="gallery" className={`${styles['nav-link']} ${styles.gallery} ${styles['nav-li']} ${styles['navigation']}`}>
                        <Link to="/gallery">GALLERY</Link>
                    </li>
                    <li className={`${styles['nav-logo']} ${styles['nav-li']}`}>
                            <Link to="/"><img src="images/logo new 2023 transperant cutted.png" alt="logo" /></Link>
                    </li>
                    <li className={`${styles['nav-link']} ${styles.booking} ${styles['nav-li']} ${styles['navigation']}`}>
                        <Link to="/booking">BOOKING</Link>
                    </li>
                    <li className={`${styles['nav-link']} ${styles['nav-li']} ${styles['navigation']}`}>
                        <Link to="/contact">CONTACT</Link>
                    </li>
                    {/* //if user and user is admin */}
                    {/* <li className={`${styles['nav-link']} ${styles['nav-li']} ${styles['navigation']}}>
                    <Link to="/upload">UPLOAD</Link>
                </li> */}
                    {/* //if user and no admin */}
                </ul>
            </nav>
            <div className='user-wrap'>
                {/* //if user */}
                {/* <div className={styles.hero} id="user-btns">
                <i className={`${styles['user-pic']} fa-regular`}></i>
    
                <div className={styles['sub-menu-wrap']} id="subMenu">
                    <div className={styles['sub-menu']}>
                        <div className={styles['user-info']}>
                            <h4>user.email</h4>
                        </div>
                        <hr/>
                        <a href="/logout" className={styles['sub-menu-link']}>
                            <p>Logout</p>
                        </a>
                    </div>
                </div>
            </div> */}

                {/* //no-user */}
                {/* <div className={styles.hero} id="user-btns">
                <i className={`${styles['user-pic']} fa-regular fa-user`}></i>
    
                <div className={styles['sub-menu-wrap']} id="subMenu">
                    <div className={styles['sub-menu']}>
                        <div className={styles['user-info']}>
                            <h4>Guest</h4>
                        </div>
                        <hr/>
                        <a href="/login" className={styles['sub-menu-link']}>
                            <p>Sign in</p>
                        </a>
                        <a href="/register" className={styles['sub-menu-link']}>
                            <p>Sign up</p>
                        </a>
                    </div>
                </div>
            </div> */}
                <Profile />
            </div>
        </header>
    );
};