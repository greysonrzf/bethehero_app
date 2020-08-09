import 'intl'
import 'intl/locale-data/jsonp/pt-BR'

import React from 'react';
import { StatusBar } from 'expo-status-bar';

import Routes from './src/routes'


export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <Routes />
    </>
  );
}
