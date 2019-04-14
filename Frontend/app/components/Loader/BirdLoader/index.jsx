import React from 'react';

import './style.scss';
import TwitterLogo from '../../../../public/images/TwitterLogo.png';

const BirdLoader = () => (
  <div className="container w-25">
    <img className="w-50" src={TwitterLogo} id="loader_img" />
  </div>
);

export default BirdLoader;
