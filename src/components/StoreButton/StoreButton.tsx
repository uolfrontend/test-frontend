import React, { FC } from 'react';
import styles from './StoreButton.module.css';

interface StoreButtonProps {}

const StoreButton: FC<StoreButtonProps> = () => (
  <div className={styles.StoreButton} data-testid="StoreButton">
    StoreButton Component
  </div>
);

export default StoreButton;
