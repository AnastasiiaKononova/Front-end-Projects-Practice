import React from 'react';
import styles from './AdditionalInfo.module.sass';

const AdditionalInfo = () => {
  return (
    <React.Fragment>
      <div className={styles.wrapperAddInfo}>
        <h3 className={styles.headingAddInfo}>Agency or Enterprise?</h3>
        <p className={styles.contentAddInfo}>
          To learn more about volume discounts and additional <br></br>
          services, please contact our business development team.
        </p>
        <a href='#' className={styles.temporaryLink}>
          Contact Us <i class='fa fa-arrow-right'></i>{' '}
        </a>
      </div>
      <div className={styles.wrapperAddInfo}>
        <h3 className={styles.headingAddInfo}>More questions?</h3>
        <p className={styles.contentAddInfo}>
          We're here to help. Check out our FAQs, send us an email,<br></br>
          or give us a call at +1 (877) 355-3585
        </p>
        <a href='#' className={styles.temporaryLink}>
          Shedule branding consultation <i class='fa fa-arrow-right'></i>{' '}
        </a>
      </div>
    </React.Fragment>
  );
};

export default AdditionalInfo;
