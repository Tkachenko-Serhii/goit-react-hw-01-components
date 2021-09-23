import PropTypes from 'prop-types';

export default function Statistics({ label, percentage }) {
  return (
    <li className="item">
      <span className="label">{label} </span>
      <span className="percentage">{percentage}%</span>
    </li>
  );
}

Statistics.propTypes = {
  label: PropTypes.string,
  percentage: PropTypes.number,
};
