import styles from './Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareFacebook, faSquareGooglePlus, faInstagram, faGithub  } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';


export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles['links-footer']}>
                <Link className={styles.instagram} to={'https://www.instagram.com/urban.tattoo.sofia/'} target='_blank'>
                    <FontAwesomeIcon className={`${styles['instagram-icon']}`} icon={faInstagram} />
                </Link>
                <Link className={styles.facebook} to={"https://www.facebook.com/urban.tattoo.sofia/"} target='_blank'>
                    <FontAwesomeIcon className={`${styles['facebook-icon']}`} icon={faSquareFacebook} />
                </Link>
                <Link className={styles.google} to={"https://g.page/r/CbxBJYKl-n-wEB0"} target='_blank'>
                    <FontAwesomeIcon className={`${styles['google-icon']}`} icon={faSquareGooglePlus} />
                </Link>
                <Link className={styles.github} target='_blank' to={'https://github.com/ViiktorStefanov'}>
                    <FontAwesomeIcon className={`${styles['github-icon']}`} icon={faGithub} />
                </Link>
            </div>
            <div className={styles.copyright}>
                © 2024 Copyright: 
                <Link className={styles['copyright-author']} target='_blank' to={"https://www.linkedin.com/in/viktorstefanov/"} > Viktor Stefanov</Link>
            </div>
        </footer>
    );
};