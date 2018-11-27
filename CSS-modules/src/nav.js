import PropTypes from 'prop-types';
import React from 'react';
import styleable from 'react-styleable';
import styles from './nav-styles';

import css from './nav.css';

// function getPrevClassName(props) {
//   return props.hasPrevious ? props.css.prev : props.css.prevHidden;
// }

// function getNextClassName(props) {
//   return props.hasNext ? props.css.next : props.css.nextHidden;
// }

function getPrevStyles(props) {
  return props.hasPrevious ? styles.prev : styles.prevHidden;
}

function getNextStyles(props) {
  return props.hasNext ? styles.next : styles.nextHidden;
}

function Nav(props) {
  return (
    <div className={props.css.root} style={styles.root}>
      <button
        // className={getPrevClassName(props)}
        style={getPrevStyles(props)}
        onClick={props.onPrevious}
      >
        &#10094;
      </button>
      <button
        // className={getNextClassName(props)}
        style={getNextStyles(props)}
        onClick={props.onNext}
      >
        &#10095;
      </button>
    </div>
  );
}

Nav.propTypes = {
  onPrevious: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
  hasPrevious: PropTypes.bool,
  hasNext: PropTypes.bool
};

export default styleable(css)(Nav);
