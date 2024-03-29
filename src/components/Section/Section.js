import React from 'react';
import PropTypes from 'prop-types';
import styles from './Section.module.css';

const Section = ({ title, children }) => {
    return (
      <section className={styles.section}>
        <h1 className={styles.title}>{title}</h1>
        {children}
      </section>
    );
  };
  
  export default Section;
  
  Section.defaultProps = {
    title: 'New section',
  };
  
  Section.propTypes = {
    title: PropTypes.string,
  };