import Sprite from '../../../images/sprite.svg';
import styles from './button-delete.module.css';

export default function DeleteButton({ onClick }) {
  return (
    <button aria-label="Delete" className={styles.btnDelete} onClick={onClick}>
      <svg className={styles.calendarIcon} width={18} height={18}>
        <use href={`${Sprite}#delete-icon`}></use>
      </svg>
    </button>
  );
}