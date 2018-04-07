'use strict';
import React from 'react';
import { Link } from 'react-router';

import DPCLogo from '../../constants/svg/DPCLogo_SVG';


const Home = () => (
  <div className="center-cont home">
    <Link
      to="about"
      rel="next">
      <DPCLogo />
    </Link>
  </div>
);

export default Home;
