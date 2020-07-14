import React from 'react';
import Styles from './HeaderButton.module.css';

const HeaderButton = ( { children } ) => {
  return(
    <button className={Styles.Button}>
      {children}
    </button>
  );
};

export default HeaderButton;
