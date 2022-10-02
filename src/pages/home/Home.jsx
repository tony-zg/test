import LandingPageImage from '../../components/landingPageImage/LandingPageImage';
import TitleText from '../../components/titleText/TitleText';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.text}>
        <TitleText />
      </div>
      <div className={styles.img}>
        <LandingPageImage />
      </div>
    </div>
  );
};

export default Home;
