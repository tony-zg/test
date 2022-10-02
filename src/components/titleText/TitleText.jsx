import styles from './TitleText.module.css';
import { Link } from 'react-router-dom';

const TitleText = () => {
  return (
    <div className={styles.title__text}>
      <div className={styles.title__text__container}>
        <h1 className={styles.title}>
          <span className={styles.text__one}>Imagine if</span>
          <span className={styles.text__two}>Snapchat</span>
          <span className={styles.text__three}>had events.</span>
        </h1>
        <div className={styles.content__container}>
          <p className={styles.content}>
            Easily host and share events with your friends across any social
            media.
          </p>
        </div>
        <div className={styles.btn__container}>
          <Link to="/create">
            <button className={styles.btn}>🎉 Create my event</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TitleText;
