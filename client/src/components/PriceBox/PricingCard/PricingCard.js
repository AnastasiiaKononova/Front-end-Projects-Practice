import React from 'react';
import PropTypes from 'prop-types';
import styles from './PricingCard.module.sass';

const PricingCard = props => {
  const { color, borderColor, type, describeType, price, profit, link } = props;

  const renderProfitOptions = options => {
    if (!options || options.length === 0) return null;

    return (
      <ul className={styles.profitList}>
        {options.map((item, optIndex) => (
          <li key={optIndex} className={styles.benefitItem}>
            <p className={styles.benefit}>{item.label}</p>
            {item.tooltip && (
              <small className={styles.tooltip}>{item.tooltip}</small>
            )}
            {renderProfitOptions(item?.options)}
          </li>
        ))}
      </ul>
    );
  };

  const handleButtonClick = () => {
    if (link) {
      window.location.href = link;
    } else {
      alert('Ссылка недоступна!');
    }
  };
  return (
    <div className={styles.card}>
      <div className={styles.topBox} data-border={borderColor}>
        <h3 className={styles.headerCard} style={{ color }}>
          {type}
        </h3>
        <p className={styles.describeTopBox}>{describeType}</p>
        <div className={styles.price} style={{ color }}>
          <span>{price}</span>
        </div>
      </div>
      {renderProfitOptions(profit)}
      <button
        className={styles.cardButton}
        style={{
          backgroundColor: color,
          border: color,
        }}
        onClick={handleButtonClick}
      >
        <i class='fa fa-check'></i> Start
      </button>
    </div>
  );
};

PricingCard.propTypes = {
  color: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  describeType: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  profit: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      tooltip: PropTypes.string,
      options: PropTypes.arrayOf(
        PropTypes.shape({
          label: PropTypes.string.isRequired,
          tooltip: PropTypes.string.isRequired,
        }),
      ),
    }),
  ).isRequired,
};

export default PricingCard;
