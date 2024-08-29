import React from 'react';
import styles from './Home.module.scss';

import { homeInfo } from '../../constants/homeInfo';

const Home: React.FC = () => {
  return (
    <section id="homePage" className={styles.homePage} >
    <div className={styles.message}>
        <p>
          {homeInfo.welcomeMessage}
        </p>
    </div>
    <div className={styles.artists} id="artists">
      {
        homeInfo.artists.map((artist) => (
          <div className={styles.artist} key={artist.id}>
            <img src={artist.imageUrl} alt="artist" />
            <h3>{artist.name}</h3>
            <span className={styles['artist-info']}>{artist.bio}</span>
          </div>
        ))
      }
    </div>
</section>
  )
}

export default Home;
