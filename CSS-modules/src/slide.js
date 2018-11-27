import PropTypes from 'prop-types';
import React from 'react';
import styleable from 'react-styleable';

import styles from './slide-styles';
import css from './slide.css';

function Slide(props) {
  return (
    <article
      style={{ ...styles.root, ...props.style }}
      className={props.css.root}
    >
      <img src={props.image} alt={props.title} />
      <footer className={props.css.footer} style={styles.footer}>
        <h2 className={props.css.title} style={styles.title}>
          {props.title}
        </h2>
        <div>{props.children}</div>
      </footer>
    </article>
  );
}

Slide.propTypes = {
  image: PropTypes.string.isRequired,
  style: PropTypes.object,
  title: PropTypes.string
};

export default styleable(css)(Slide);
