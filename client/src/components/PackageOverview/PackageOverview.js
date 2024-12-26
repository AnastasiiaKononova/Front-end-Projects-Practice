import React from 'react';
import styles from './PackageOverview.module.sass';

const PackageOverview = ({ link }) => {
  const handleBtnClick = () => {
    if (link) {
      window.location.href = link;
    } else {
      alert('Ссылка недоступна!');
    }
  };
  return (
    <div>
      <p className={styles.infoAward}>
        All packages include the award amount <br></br>
        for the winning creative and all fees and commissions.
      </p>
      <button className={styles.getStartedButton} onClick={handleBtnClick}>
        Get started now
      </button>
    </div>
  );
};

export default PackageOverview;
