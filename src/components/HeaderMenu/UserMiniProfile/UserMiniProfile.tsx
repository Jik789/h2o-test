import styles from './UserMiniProfile.module.scss';
import userAvatar from '../../../image/userAvatar.png';
import userStickBottom from '../../../image/userStickBottom.svg';

function UserMiniProfile() {
  return (
    <div className={styles.mainContainer}>
      <div>
        <img src={userAvatar} alt="userAvatar"></img>
      </div>
      <div>
        <h3 className={styles.userName}>Kristina</h3>
        <p className={styles.userPost}>Менеджер продаж</p>
      </div>
      <a className={styles.imageContainer}>
        <img src={userStickBottom} alt="right" />
      </a>
    </div>
  );
}

export default UserMiniProfile;
