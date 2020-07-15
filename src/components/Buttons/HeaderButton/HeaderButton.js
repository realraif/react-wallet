import React from 'react';
import Styles from './HeaderButton.module.css';

const HeaderButton = ( { children, onClick } ) => {
  return(
    <button className={Styles.Button} onClick={onClick}>
      {children}
    </button>
  );
};

export default HeaderButton;
