import CreateImage from '../../components/createImage/CreateImage';
import EventForm from '../../components/eventForm/EventForm';
import styles from './Create.module.css';

const Create = () => {
  return (
    <div className={styles.create}>
      <div className={styles.text}>
        <EventForm />
      </div>
      <div className={styles.img}>
        <CreateImage />
      </div>
    </div>
  );
};

export default Create;
