import { FC } from 'react';
import styles from './Store.module.css';

interface StoreProps {}

const Store: FC<StoreProps> = () => (
  <div className={styles.Store} data-testid="Store">
    Store Component
  </div>
);

export default Store;
