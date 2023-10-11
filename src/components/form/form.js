import React from 'react';
import styles from '../../styles/formulario.module.css';
import Link from 'next/link';
const Form = () => {
  return (
    <div className={styles.formContainer}>
    <form className={styles.form}>
      <h1 className={styles.title}>Formulário</h1>
      <div className={styles.formGroup}>
        <label htmlFor="name" className={styles.label}>
          Nome:
        </label>
        <input type="text" id="name" className={styles.input} />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="email" className={styles.label}>
          Email:
        </label>
        <input type="email" id="email" className={styles.input} />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="email" className={styles.label}>
          Email:
        </label>
        <input type="email" id="email" className={styles.input} />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="email" className={styles.label}>
          Email:
        </label>
        <input type="email" id="email" className={styles.input} />
      </div>
      <Link href="/pageapi">
        <p>
          <button as="text" type="submit" className={styles.button}>
            Cadastrar
          </button>
        </p>
      </Link>
      
    </form>
  </div>
  );
};

export default Form;
