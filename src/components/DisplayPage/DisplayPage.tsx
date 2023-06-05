import { ChangeEvent, useState } from 'react';
import styles from './DisplayPage.module.scss';

function DisplayPage() {
  const [state, setState] = useState({
    countPage: '10',
  });

  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const target = e.target;
    setState({ ...state, [target.name]: e.target.value });
  };

  return (
    <div className={styles.mainContainer}>
      <label>отображать на странице</label>
      <select
        className={styles.visibleSelect}
        value={state.countPage}
        onChange={onChange}
        name="countPage"
      >
        <option value="10">1</option>
        <option value="20">2</option>
        <option value="30">3</option>
      </select>
    </div>
  );
}

export default DisplayPage;
