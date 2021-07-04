import styles from './Statistics.module.css';
import PropTypes from 'prop-types';

function Statistics({ good, neutral, bad, total, positivePercent }) {
  return (
    <div>
      <p className={styles.input}>Good: {good}</p>
      <p className={styles.input}>Neutral: {neutral}</p>
      <p className={styles.input}>Bad: {bad}</p>
      <p className={styles.input}>Total: {total}</p>
      <p className={styles.input}>PositivePercent: {positivePercent}%</p>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number,
  percent: PropTypes.number,
};

Statistics.defaultProps = {
  good: 0,
  neutral: 0,
  bad: 0,
};

export default Statistics;