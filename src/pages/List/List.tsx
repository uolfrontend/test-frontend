import React, { FC } from 'react';
import styles from './List.module.css';

interface ListProps {}

const List: FC<ListProps> = () => (
  <div className={styles.List} data-testid="List">
    List Component
  </div>
);

export default List;
