import React, { useState } from 'react';
import CONSTANTS from '../../constants';
import styles from './PricingSelect.module.sass';
import cn from 'classnames';

const { CONTEST_TYPES } = CONSTANTS;

const PricingSelect = ({ id }) => {
  const [selectedOption, setSelectedOption] = useState('NAME');
  const [contestListState, setContestListState] = useState(false);

  const changeContestListState = () => setContestListState(!contestListState);
  const handleChange = e => {
    const currentValue = !!e.target.value
      ? e.target.value
      : e.target.getAttribute('data-value');

    if (currentValue !== selectedOption) {
      setSelectedOption(currentValue);
    }
    setContestListState(false);
  };

  const renderOptions = Component => {
    return Object.keys(CONTEST_TYPES).map(key => {
      const props = {
        key: key,
      };
      switch (Component) {
        case 'option':
          props.value = key;
        default:
          props['data-value'] = key;
          props.className = cn(
            styles.listItem,
            key === selectedOption ? styles.selected : '',
          );
      }
      return <Component {...props}>{CONTEST_TYPES[key]}</Component>;
    });
  };

  return (
    <div className={styles.pricingSelect}>
      <label htmlFor={`pricing-select-${id}`}>Pricing for</label>
      <select
        id={`pricing-select-${id}`}
        value={selectedOption}
        onChange={handleChange}
        className={styles.selectInput}
      >
        {renderOptions('option')}
      </select>

      <div className={styles.customSelectBox}>
        <button onClick={changeContestListState} className={styles.customSelectButton}>
          {CONTEST_TYPES[selectedOption]}
          <i className='fa fa-angle-down'></i>
        </button>

        <ul onClick={handleChange} className='contestTypes'>
          {contestListState && renderOptions('li')}
        </ul>
      </div>
    </div>
  );
};

export default PricingSelect;
