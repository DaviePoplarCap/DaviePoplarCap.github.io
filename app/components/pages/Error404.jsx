'use strict';
import React from 'react';
import { Link } from 'react-router';

import ErrorFace from '../../../public/images/error_face.svg';


const Error404 = () => (
  <div className="error-wrapper">
    <img
      src={ ErrorFace }
      alt="Error 404 Frowny Face Image Blob (Gray)." />
    <div>
      <h3>404 Error... Looks like this page can't be found at this time!</h3>
      <hr />
      <p>
        {[
          'In the meantime, you can try ',
          <Link
            to="/"
            rel="prev">
            going back home
          </Link>,
          ' to find what you need, or you can ',
          <a
            href="mailto:isenrich@yahoo.com"
            rel="help">
            drop us a line
          </a>,
          ' and we\'ll see if we can help resolve this issue.'
        ]}
      </p>
    </div>
  </div>
);

export default Error404;
