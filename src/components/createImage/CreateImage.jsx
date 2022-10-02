import styles from './CreateImage.module.css';
import EventImg from '../../assets/eventimage.png';

const CreateImage = () => {
  return (
    <div className={styles.CreateImage}>
      <div className={styles.CreateImage}>
        <div className={styles.CreateImage__container}>
          <img className={styles.img} src={EventImg} alt="eventImage" />
        </div>
      </div>
    </div>
  );
};

export default CreateImage;
