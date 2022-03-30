import React, { FC } from 'react';
import styles from './Edit.module.css';

interface EditProps {}

const Edit: FC<EditProps> = () => (
  <div className={styles.Edit} data-testid="Edit">
    Edit Component
  </div>
);

export default Edit;
