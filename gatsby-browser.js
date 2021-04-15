import React from 'react';
import Layout from './src/components/Layout/layout';

import "./src/styles/GlobalStyles.scss"

export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>;
}
