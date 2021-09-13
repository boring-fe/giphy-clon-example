import styles from './SearchForm.module.css';
import { useState } from 'react';

export const SearchForm = ({ onSubmit, value }) => {
  const [querySearch, setQuerySearch] = useState(value || '');

  const submit = (e) => {
    e.preventDefault();
    if (!querySearch) {
      return;
    }
    onSubmit(querySearch);
  };

  const onChange = (e) => {
    const text = e.target.value;
    setQuerySearch(text);
  };
  return (
    <form className={styles.form} onSubmit={submit}>
      <div className={styles.controlGroup}>
        <input
          name='query'
          type='text'
          value={querySearch}
          onChange={onChange}
          className={styles.nativeInput}
        />
      </div>
      <button className={styles.button}>Search</button>
    </form>
  );
};
