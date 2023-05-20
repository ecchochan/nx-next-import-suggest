import styles from './shared-ui-next-lib.module.css';

/* eslint-disable-next-line */
export interface SharedUiNextLibProps {}

export function SharedUiNextLib(props: SharedUiNextLibProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to SharedUiNextLib!</h1>
    </div>
  );
}

export default SharedUiNextLib;
