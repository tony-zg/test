import styles from './LandingPageImage.module.css';
import ImageOne from '../../assets/image1.png';

const LandingPageImage = () => {
  return (
    <div className={styles.landing__page__image}>
      <div className={styles.image__container}>
        <img className={styles.img} src={ImageOne} alt="image1" />
      </div>
    </div>
  );
};

export default LandingPageImage;
