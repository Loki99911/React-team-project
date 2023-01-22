import React from 'react';
import styles from './button.module.css';

export default function Button({ text, type = 'button', onClick }) {
  return (
    <div className={styles.buttonContainer}>
      <button className={styles.button} type={type} onClick={onClick}>
        {text}
      </button>
    </div>
  );
}
