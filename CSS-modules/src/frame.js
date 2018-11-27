import React from 'react';
import styleable from 'react-styleable';
import styles from './frame-styles';

import css from './frame.css';

function Frame(props) {
  return (
    <div className={props.css.root} style={styles.root}>
      {props.children}
    </div>
  );
}

export default styleable(css)(Frame);
