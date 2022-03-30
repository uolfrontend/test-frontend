import React, { FC } from 'react';
import styles from './EditButton.module.css';

interface EditButtonProps {}

const EditButton: FC<EditButtonProps> = () => (
  <div className={styles.EditButton} data-testid="EditButton">
    EditButton Component
  </div>
);

export default EditButton;
