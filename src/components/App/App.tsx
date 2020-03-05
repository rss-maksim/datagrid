import React from 'react';

import { Header, Grid} from '../';
import {gridConfig} from './gridConfig';

import './index.scss';

export const App = () => {
  return (
    <div className="app-container">
      <Header />
      <Grid config={gridConfig} />
    </div>
  );
};
